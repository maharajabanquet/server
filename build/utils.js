const fs = require("fs");
const path = require("path");
const https = require("https");
const remote = require("@electron/remote");

const isDev = !remote.app.isPackaged;

module.exports.isDev = isDev;

const dataPath = isDev
  ? path.join(remote.app.getAppPath(), "./data")
  : path.join(remote.app.getPath("userData"), "./data");

/**
 * Creates initial folders and returns the root directory, `dataPath`.
 */
module.exports.setupPaths = () => {
  const paths = ["", "./config", "./images"];
  paths.forEach(p => {
    p = path.join(dataPath, p);
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
  });

  return dataPath;
};

/**
 * Returns a hash code for a string, equivalent to Java's `String.hashCode()`.
 * See https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
 */
function hashCode(s) {
  let h;
  for (let i = 0; i < s.length; i++)
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;

  return h;
}

/**
 * Hashes the URL into a short filename.
 */
module.exports.urlToFilename = url => {
  let urlSegment = url.split("/").pop();
  let ext = urlSegment.match(/\.[a-zA-Z0-9]{2,6}/g).pop() || "";
  ext = ext.includes(".") ? ext : "";
  let hash = hashCode(urlSegment);
  return `${hash}${ext}`;
};

/**
 * Downloads the resource for a given URL to a folder.
 */
module.exports.download = (url, httpOptions, folderName, filename) => {
  httpOptions = { ...httpOptions, timeout: 30000 };

  return new Promise((resolve, reject) => {
    const filePath = path.join(dataPath, folderName, filename);
    // don't download if it already exists
    if (fs.existsSync(filePath)) {
      return resolve();
    } else {
      const tempPath = path.join(dataPath, folderName, `tmp-${filename}`);

      const request = https.get(url, httpOptions, response => {
        // console.log(response)
        if (response.statusCode === 200) {
          const file = fs.createWriteStream(tempPath);
          file.on("finish", () => {
            fs.rename(tempPath, filePath, reject);
            return resolve();
          });

          response.pipe(file);
        } else {
          let status = `${response.statusCode} ${response.statusMessage}`;
          return reject(`Error downloading file (${status}):\n${url}`);
        }
      });

      const handleError = err => {
        // console.log(err)
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        return reject(`Error downloading file ${url}`);
      };
      request.on("timeout", () => request.abort());
      request.on("abort", err => handleError(err));
      request.on("error", err => handleError(err));
    }
  });
};

/**
 * Send messages for the render context to listen to
 */
module.exports.sendMessage = (type, content = null) => {
  window.postMessage({ type, content });
};
