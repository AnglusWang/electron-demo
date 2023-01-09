// import { app, BrowserWindow } from 'electron'
// electron 模块可以用来控制应用的生命周期和创建原生浏览窗口
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

console.log(`欢迎来到 Electron 👋`)

const createWindow = () => {
  //创建浏览窗口
  const mainWindow = new BrowserWindow({
    height: 800, //自定义宽高
    width: 600,
    // fullscreen: true, //全屏
    // show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  //打开开发者工具
  // mainWindow.webContents.openDevTools()

  ipcMain.handle('ping', () => {
    return '进程间通信，传递的参数值 pong'
  })

  mainWindow.loadFile('index.html')

  // mainWindow.maximize() //最大化
  // mainWindow.show()
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform != 'darWin') {
    app.quit()
  }
})

app.on('activate', () => {
  createWindow()

  if (BrowserWindow.getAllWindows.length == 0) createWindow()
})
