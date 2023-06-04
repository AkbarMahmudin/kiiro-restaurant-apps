import * as WorkboxWindow from 'workbox-window'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker tidak didukung browser ini.')
    return 0
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js')

  try {
    await wb.register()
    console.log('Pendaftaran ServiceWorker berhasil')
  } catch (err) {
    console.error('Pendaftaran ServiceWorker gagal', err)
  }
}

export default swRegister
