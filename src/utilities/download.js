const downloadFile = (text) => {
  const blob = new Blob([text], { type: 'txt' })
  const a = document.createElement('a')
  a.download = 'download'
  a.href = URL.createObjectURL(blob)
  a.dataset.downloadurl = ['txt', a.download, a.href].join(':')
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => {
    URL.revokeObjectURL(a.href)
  }, 2500)
}

export default downloadFile
