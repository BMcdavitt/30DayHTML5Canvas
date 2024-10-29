document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 1500
  canvas.height = 700

  // clipping(ctx)
  loadImage(ctx)

})

const loadImage = (ctx) => {
  const image = document.getElementById('image')

  image.addEventListener('load', function () {

    ctx.drawImage(image, 0, 0, 1500, 700)
    clipImage(ctx)

  })
}

const clipImage = (ctx) => {
  ctx.globalCompositeOperation = 'destination-in'
  // ctx.arc(750, 350, 260, 0, Math.PI * 2)

  ctx.beginPath()
  for (let i = 0; i < 5; i++) {
    ctx.lineTo(750 + 350 * Math.cos((18 + i * 72) * Math.PI / 180), 350 + 350 * Math.sin((18 + i * 72) * Math.PI / 180));
    ctx.lineTo(750 + 130 * Math.cos((54 + i * 72) * Math.PI / 180), 350 + 130 * Math.sin((54 + i * 72) * Math.PI / 180));
  }
  ctx.closePath();
  ctx.fill()

}

const globalCompositeOperation = (ctx) => {
  // ctx.globalCompositeOperation = 'destination-in'
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 0, 1500, 500)

  ctx.fillStyle = 'blue'
  ctx.fillRect(500, 400, 500, 500)

  ctx.globalCompositeOperation = 'source-in'
  ctx.fillStyle = 'green'
  ctx.fillRect(300, 300, 300, 300)
}

const clipping = (ctx) => {
  ctx.beginPath()

  const clip = () => {
    ctx.arc(750, 350, 160, 0, Math.PI * 2)
    ctx.clip()
  }

  const reverseClip = () => {

    ctx.rect(0, 0, 1500, 700)
    ctx.arc(750, 350, 160, 0, Math.PI * 2, true)
    ctx.clip()
  }

  const globalCompositeClip = () => {
    ctx.globalCompositeOperation = 'destination-in'
    // ctx.globalCompositeOperation = 'destination-out'
    ctx.arc(750, 350, 160, 0, Math.PI * 2)
    ctx.fill()

  }

  // clip()
  // reverseClip()


  const linGrad = ctx.createLinearGradient(0, -200, 0, 750)
  linGrad.addColorStop(0, '#232256')
  linGrad.addColorStop(1, '#143778')

  ctx.fillStyle = linGrad
  ctx.fillRect(0, 0, 1500, 700)

  generateStars(ctx)

  globalCompositeClip()

}

const generateStars = (ctx) => {
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * 1500
    const y = Math.random() * 700
    const radius = Math.random() * 3

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = 'white'
    ctx.fill()
  }
}
