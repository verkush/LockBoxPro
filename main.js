const { app, BrowserWindow } = require("electron");

function createWindow() {
  const myWindow = new BrowserWindow({
    width: 768,
    height: 560,
  });

  //load a webpage
  myWindow.loadFile("src/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
