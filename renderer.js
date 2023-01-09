const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const task = async () => {
  let ping = await window.versions.ping()
  window.alert(ping)
}
task()
