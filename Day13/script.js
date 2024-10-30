document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 1500
  canvas.height = 700

  const practice = () => {
    ctx.fillStyle = 'red'
    ctx.fillRect(200, 200, 200, 200)

    ctx.save()

    ctx.fillStyle = 'blue'
    ctx.translate(200, 200)

    ctx.rotate((Math.PI / 180) * 45)
    ctx.fillRect(100, 100, 200, 200)

    ctx.restore()

    ctx.fillRect(400, 400, 200, 200)
  }

  const mandella = () => {
    const width = canvas.width
    const height = canvas.height

    const centerX = width / 2
    const centerY = height / 2

    ctx.translate(centerX, centerY)

    const drawPetal = (size) => {
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.quadraticCurveTo(size, size, 0, size * 2)
      ctx.quadraticCurveTo(-size, size, 0, 0)
      ctx.fill()

    }


    const petalCount = 10

    ctx.fillStyle = 'red'
    let petalSize = 150
    for (let i = 0; i < petalCount; i++) {
      ctx.save()
      ctx.rotate((Math.PI / 180) * (360 / petalCount) * i)
      drawPetal(petalSize)
      ctx.restore()
    }

    ctx.fillStyle = 'blue'
    petalSize = 125
    for (let i = 0; i < petalCount; i++) {
      ctx.save()
      ctx.rotate((Math.PI / 180) * (360 / petalCount) * i + (Math.PI / 180) * (360 / (2 * petalCount)))
      drawPetal(petalSize)
      ctx.restore()
    }

    ctx.fillStyle = 'green'
    petalSize = 110
    for (let i = 0; i < petalCount; i++) {
      ctx.save()
      ctx.rotate((Math.PI / 180) * (360 / petalCount) * i)
      drawPetal(petalSize)
      ctx.restore()
    }

    ctx.fillStyle = 'yellow'
    petalSize = 90
    for (let i = 0; i < petalCount; i++) {
      ctx.save()
      ctx.rotate((Math.PI / 180) * (360 / petalCount) * i + (Math.PI / 180) * (360 / (2 * petalCount)))
      drawPetal(petalSize)
      ctx.restore()
    }

    ctx.fillStyle = 'orange'
    petalSize = 75
    for (let i = 0; i < petalCount; i++) {
      ctx.save()
      ctx.rotate((Math.PI / 180) * (360 / petalCount) * i)
      drawPetal(petalSize)
      ctx.restore()
    }

    ctx.fillStyle = 'purple'
    petalSize = 60
    for (let i = 0; i < petalCount; i++) {
      ctx.save()
      ctx.rotate((Math.PI / 180) * (360 / petalCount) * i + (Math.PI / 180) * (360 / (2 * petalCount)))
      drawPetal(petalSize)
      ctx.restore()
    }

    ctx.fillStyle = 'pink'
    petalSize = 50
    for (let i = 0; i < petalCount; i++) {
      ctx.save()
      ctx.rotate((Math.PI / 180) * (360 / petalCount) * i)
      drawPetal(petalSize)
      ctx.restore()
    }

  }

  mandella()
})
