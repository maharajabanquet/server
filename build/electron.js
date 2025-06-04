const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const remote = require("@electron/remote/main");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const log = require("electron-log");

remote.initialize();

const isDev = !app.isPackaged;

log.transports.file.level = "debug";
autoUpdater.logger = log;

// keep a global reference of the window object, else the window will close
// when the javascript object is garbage collected
let mainWindow;
let webContents;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 675,
    useContentSize: true,
    kiosk: true,
    autoHideMenuBar: true,
    minimizable: false,
    frame: false,
    resizable: false,
    // Hide page loading from the user:
    // https://electronjs.org/docs/api/browser-window#showing-window-gracefully
    show: false,
    backgroundColor: "#ffffff",
    webPreferences: {
      // Security stuff
      devTools: isDev,
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: !isDev,
      preload: path.resolve(__dirname, "preload.js")
    }
  });

  webContents = mainWindow.webContents;
  remote.enable(webContents);

  if (!isDev) {
    // disable the top menu
    mainWindow.removeMenu();
  }

  // events
  // https://www.electronjs.org/docs/api/browser-window#showing-window-gracefully
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.on("closed", () => (mainWindow = null));

  // load React app
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

// This needs to be `false` for now, or else node's `https` module breaks,
// and possibly others modules, like `fs`, as well.
// See https://github.com/electron/electron/issues/18397
// app.allowRendererProcessReuse = false;

const gotSingleInstanceLock = app.requestSingleInstanceLock();

if (!gotSingleInstanceLock) {
  log.warn("App is already running, quitting second instance.");
  app.quit();
} else {
  app.on("second-instance", () => {
    // Someone tried to run a second instance, we should focus our window.
    log.info("Attempted to run second instance, focusing main window.");
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.on("ready", () => {
    // Load the app normally
    log.info("App is starting normally...");
    awaitUpdateStart();
    createWindow();
  });
}

// Override the default error dialog behavior
dialog.showErrorBox = function(title, content) {
  log.error(
    `Attempted error dialog box.\nTitle: ${title}\nContent: ${content}`
  );
};

let autoUpdateInterval = null;
let requestedQuitAndInstall = false;
const awaitUpdateStart = () => {
  ipcMain.on("autoupdate-message", (event, args) => {
    if (args !== "START") return;

    const send = args => {
      log.info(`Sending update info to main window: ${JSON.stringify(args)}`);
      webContents.send("autoupdate-reply", args);
    };

    if (isDev) {
      send({ status: "update-not-available" });
      return;
    }

    if (!autoUpdateInterval) {
      // Check for updates on app start, and periodically afterward
      autoUpdater.checkForUpdatesAndNotify();
      autoUpdateInterval = setInterval(() => {
        autoUpdater.checkForUpdatesAndNotify();
      }, 10 * 60 * 1000);
    }

    // https://www.electron.build/auto-update#events
    const statuses = [
      "checking-for-update",
      "update-available",
      "update-not-available"
    ];

    statuses.forEach(status => {
      autoUpdater.on(status, () => send({ status }));
    });

    autoUpdater.on("error", () => send({ status: "update-not-available" }));

    autoUpdater.on("update-downloaded", () => {
      // This is a manual check, since we're having issues with
      // quitAndInstall() being called multiple times, ultimately
      // preventing the app from starting back up after installation.
      if (!requestedQuitAndInstall) {
        send({ status: "update-downloaded" });
        setTimeout(() => {
          autoUpdater.quitAndInstall(true, true);
        }, 5000);
        requestedQuitAndInstall = true;
      }
    });
  });
};
