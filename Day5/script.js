document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 650
  canvas.height = 490

  const test = () => {
    ctx.fillRect(10, 10, 100, 100)

    ctx.rect(120, 120, 100, 100)
    ctx.fillStyle = 'blue'
    ctx.fill()

    ctx.rect(240, 240, 100, 100)
    ctx.strokeStyle = 'red'
    ctx.stroke()

    const gradient = ctx.createLinearGradient(0, 0, 220, 170)
    gradient.addColorStop(0, 'red')
    gradient.addColorStop(1, 'green')

    ctx.fillStyle = gradient
    ctx.fillRect(120, 10, 100, 100)

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle = `rgb(
          ${Math.floor(255 - 42.5 * i)}
          ${Math.floor(255 - 42.5 * j)}
          0)`;
        ctx.fillRect(j * 25 + 400, i * 25 + 10, 25, 25);
      }
    }

    const radial = ctx.createRadialGradient(65, 170, 5, 95, 170, 50)
    radial.addColorStop(0, 'red')
    radial.addColorStop(1, 'green')


    ctx.fillStyle = radial
    ctx.fillRect(10, 120, 100, 100)
  }
  // test()

  const sunset = () => {


    const sunsetSkyGradient = ctx.createLinearGradient(0, 0, 0, 200)
    sunsetSkyGradient.addColorStop(0, 'black')
    sunsetSkyGradient.addColorStop(1, 'red')

    ctx.fillStyle = sunsetSkyGradient
    ctx.fillRect(0, 0, 650, 200)

    const sunLocation = {
      x: 300,
      y: 180
    }

    const sunSize = 100

    const sunsetGradient = ctx.createRadialGradient(sunLocation.x, sunLocation.y, 5, 300, 100, 100)
    sunsetGradient.addColorStop(0, 'yellow')
    sunsetGradient.addColorStop(1, 'orange')

    ctx.fillStyle = sunsetGradient
    ctx.beginPath()
    ctx.arc(sunLocation.x, sunLocation.y, sunSize, 0, 2 * Math.PI)

    ctx.fill()


    const waterGradient = ctx.createLinearGradient(0, 0, 0, 320)
    waterGradient.addColorStop(0, 'blue')
    waterGradient.addColorStop(1, 'green')

    ctx.fillStyle = waterGradient
    ctx.fillRect(0, 200, 650, 220)

    const sandGradient = ctx.createLinearGradient(0, 320, 0, 490)
    sandGradient.addColorStop(0, 'orange')
    sandGradient.addColorStop(1, 'brown')

    ctx.fillStyle = sandGradient
    ctx.fillRect(0, 420, 650, 170)

  }
  sunset()

})