const { ipcRenderer } = require("electron");
const { sendMessage } = require("./utils");

module.exports.startCheckingForUpdates = () => {
  const rendererMsgType = "ELECTRON_UPDATE_STATUS";

  ipcRenderer.send("autoupdate-message", "START");
  ipcRenderer.on("autoupdate-reply", (event, args) => {
    sendMessage(rendererMsgType, args);
  });
};
