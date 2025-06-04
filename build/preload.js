// Exposes node APIs to the render context through messages.
//
// This preload script will be run before all others on the page, and helps prevent
// "prototype pollution" attacks due to context isolation. It also restricts access
// to important, low-level node APIs, like 'fs' or 'electron', and should help against
// cross-site scripting attacks.
//
// For more info:
// https://github.com/electron/electron/blob/master/docs/tutorial/security.md
// https://developer.chrome.com/extensions/content_scripts#host-page-communication
const fs = require("fs");
const path = require("path");
const { webFrame } = require("electron");
const { startCheckingForUpdates } = require("./update");
const utils = require("./utils");
const sendMessage = utils.sendMessage;

if (utils.isDev) console.log("Preload script running");

const dataPath = utils.setupPaths();

const productFile = path.join(dataPath, "products.json");
const tmpProductFile = path.join(dataPath, "tmp-products.json");

const getOldProducts = () => {
  let product_data = fs.readFileSync(productFile, "utf8");
  let escapedDataPath = dataPath.replace(/\\/g, "\\\\");
  if (!product_data.includes(escapedDataPath)) {
    product_data = product_data.replace(/([^"]*?)\\\\data/g, escapedDataPath);
  }
  return JSON.parse(product_data);
};

const oldProducts = fs.existsSync(productFile) ? getOldProducts() : [];

// Begin listening to messages from the render context
window.addEventListener("message", event => {
  if (event.source !== window) return;

  switch (event.data.type) {
    case "START_ELECTRON_UPDATES": {
      startCheckingForUpdates();
      break;
    }
    case "START_DOWNLOADING_CONFIG": {
      let config = event.data.content;
      createConfigPaths(config);
      cleanupConfigData(config);
      downloadConfigData(config)
        .then(() => {
          sendMessage("FINISHED_DOWNLOADING_CONFIG", config);
        })
        .catch(error => {
          console.log(error);
          sendMessage(
            "ERROR_DOWNLOADING_CONFIG",
            "There was a problem downloading assets. " +
              "Please contact a service representative, " +
              "or check your internet connectivity."
          );
        });
      break;
    }
    case "REQ_OLD_PRODUCT_DATA": {
      sendMessage("RESP_OLD_PRODUCT_DATA", oldProducts);
      cleanupProductImages();
      break;
    }
    case "START_DOWNLOADING_ASSETS": {
      let products = event.data.content;
      createImagePaths(products);
      writeTmpProductData(products);
      downloadAllImages(products)
        .then(([products, errors]) => {
          // only include products that didn't error out during the download
          products = products.filter(
            product => !errors.includes(product.handle)
          );
          writeTmpProductData(products);
          sendMessage("FINISHED_DOWNLOADING_ASSETS", products);
        })
        .catch(error => {
          sendMessage("ERROR_DOWNLOADING_ASSETS", error);
        });
      break;
    }
    case "CLEANUP_ASSETS": {
      replaceProductData();
      cleanupProductImages();
      break;
    }
    case "CLEAR_WEBFRAME_CACHE": {
      webFrame.clearCache();
      break;
    }
    default:
      return;
  }
});

function createConfigPaths(config) {
  let logoFilename = utils.urlToFilename(config.data.logo.url);
  let logoPath = path.join(dataPath, "config", logoFilename);
  config.data.logo = {
    ...config.data.logo,
    filename: logoFilename,
    path: logoPath
  };

  const iterableConfigs = ["videos", "collectionFilters", "fonts"];
  iterableConfigs.forEach(configName => {
    config.data[configName] = config.data[configName].map(item => {
      let filename = utils.urlToFilename(item.url);
      let filepath = path.join(dataPath, "config", filename);
      return { ...item, filename, path: filepath };
    });
  });

  config.data.customTags = config.data.customTags.map(tag => {
    if (tag.icons && tag.icons.length > 0) {
      tag.icons = tag.icons.map(icon => {
        let filename = utils.urlToFilename(icon.url);
        let filepath = path.join(dataPath, "config", filename);
        return { ...icon, filename, path: filepath };
      });
    }
    return tag;
  });
}

function downloadConfigData(config) {
  let data = config.data;

  sendMessage("DOWNLOADING_CONFIG", "logo image");
  return utils
    .download(data.logo.url, {}, "config", data.logo.filename)
    .then(async () => {
      const iterableConfigs = [
        { value: "videos", message: "videos" },
        { value: "collectionFilters", message: "collection images" },
        { value: "fonts", message: "fonts" }
      ];
      for (const iterableConfig of iterableConfigs) {
        let total = data[iterableConfig.value].length;
        for (const [index, item] of data[iterableConfig.value].entries()) {
          let progress = index + 1;
          sendMessage(
            "DOWNLOADING_CONFIG",
            `${iterableConfig.message} (${progress}/${total})`
          );
          await utils.download(item.url, {}, "config", item.filename);
        }
      }

      for (const tag of data.customTags) {
        if (tag.icons && tag.icons.length > 0) {
          for (const icon of tag.icons) {
            sendMessage("DOWNLOADING_CONFIG", "icons");
            await utils.download(icon.url, {}, "config", icon.filename);
          }
        }
      }

      return Promise.resolve();
    });
}

function cleanupConfigData(config) {
  fs.readdir(path.join(dataPath, "config"), (err, files) => {
    let configFiles = new Set();

    configFiles.add(config.data.logo.filename);

    const iterableConfigs = ["videos", "collectionFilters", "fonts"];
    iterableConfigs.forEach(configName => {
      config.data[configName].forEach(item => configFiles.add(item.filename));
    });

    config.data.customTags.forEach(tag => {
      if (tag.icons && tag.icons.length > 0) {
        tag.icons.forEach(icon => configFiles.add(icon.filename));
      }
    });

    let filesToDelete = files.filter(file => !configFiles.has(file));
    filesToDelete.forEach(file => {
      fs.unlink(path.join(dataPath, "config", file), error =>
        error ? console.log(error) : null
      );
    });
  });
}

function writeTmpProductData(products) {
  fs.writeFileSync(tmpProductFile, JSON.stringify(products));
}

// Swaps the old product data with new data
function replaceProductData() {
  if (fs.existsSync(tmpProductFile)) {
    fs.renameSync(tmpProductFile, productFile);
  }
}

function createImagePaths(products) {
  products.forEach(product => {
    product.images = product.images.map(image => {
      let filename = `${product.handle}_${utils.urlToFilename(
        image.originalSrc
      )}`;

      return {
        ...image,
        filename,
        path: path.join(dataPath, "images", filename)
      };
    });

    product.variants = product.variants.map(variant => {
      let filename = `${product.handle}_${utils.urlToFilename(
        variant.image.originalSrc
      )}`;

      return {
        ...variant,
        image: {
          ...variant.image,
          filename,
          path: path.join(dataPath, "images", filename)
        }
      };
    });
  });
}

function downloadImages(product) {
  let filenames = []; // keep track of duplicates
  let downloads = [];

  let httpOptions = { headers: { "User-Agent": "Mozilla/5.0" } };
  product.images.forEach(image => {
    if (!filenames.includes(image.filename)) {
      filenames.push(image.filename);
      downloads.push(
        utils.download(image.originalSrc, httpOptions, "images", image.filename)
      );
    }
  });

  product.variants.forEach(variant => {
    if (!filenames.includes(variant.image.filename)) {
      filenames.push(variant.image.filename);
      downloads.push(
        utils.download(
          variant.image.originalSrc,
          httpOptions,
          "images",
          variant.image.filename
        )
      );
    }
  });

  return Promise.all(downloads);
}

// recursively attempt to download all images
function downloadAllImages(products, progress = 0, errors = []) {
  if (progress < products.length) {
    let product = products[progress];
    progress++;
    sendMessage("DOWNLOADING_ASSETS", { progress, total: products.length });

    return downloadImages(product)
      .then(() => downloadAllImages(products, progress, errors))
      .catch(error => {
        console.log(error); // TODO: expose errors to the user
        errors.push(product.handle);
        return downloadAllImages(products, progress, errors);
      });
  } else {
    return Promise.resolve([products, errors]);
  }
}

// Removes any unneeded images left over from previous updates
function cleanupProductImages() {
  fs.readdir(path.join(dataPath, "images"), (err, files) => {
    let productImageFiles = new Set();
    let products = [];

    if (fs.existsSync(productFile)) {
      products.push(...JSON.parse(fs.readFileSync(productFile, "utf8")));
    }
    if (fs.existsSync(tmpProductFile)) {
      products.push(...JSON.parse(fs.readFileSync(tmpProductFile, "utf8")));
    }

    products.forEach(product => {
      product.images.forEach(image => {
        productImageFiles.add(image.filename);
      });

      product.variants.forEach(variant => {
        productImageFiles.add(variant.image.filename);
      });
    });

    let filesToDelete = files.filter(file => !productImageFiles.has(file));
    filesToDelete.forEach(file => {
      fs.unlink(path.join(dataPath, "images", file), error =>
        error ? console.log(error) : null
      );
    });
  });
}
