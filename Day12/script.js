document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 1500
  canvas.height = 700

  const getMousePosition = (event) => {
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    return { x, y }
  }

  const practice = () => {

    ctx.fillStyle = 'red'
    ctx.fillRect(200, 200, 200, 200)

    ctx.globalCompositeOperation = 'lighter'

    ctx.translate(100, 100)

    ctx.fillStyle = 'blue'
    ctx.fillRect(200, 200, 200, 200)

    ctx.scale(1.5, 1.5)
    ctx.fillStyle = 'green'
    ctx.fillRect(200, 200, 200, 200)

    ctx.translate(-100, -100)
    ctx.scale(1 / 1.5, 1 / 1.5)
    ctx.rotate((Math.PI / 180) * 45)

    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.globalCompositeOperation = 'darken'
    ctx.fillStyle = 'yellow'
    ctx.fillRect(400, -200, 200, 200)
  }

  const compass = () => {

    const width = canvas.width
    const height = canvas.height

    const centerX = width / 2
    const centerY = height / 2

    let priorAngle = 0

    ctx.translate(centerX, centerY)

    ctx.lineWidth = 5
    ctx.strokeStyle = 'blue'

    const generateStars = (ctx) => {
      for (let i = 0; i < 500; i++) {
        const x = Math.random() * 1500
        const y = Math.random() * 700
        const radius = Math.random() * 3

        ctx.beginPath()
        ctx.arc(x - centerX, y - centerY, radius, 0, Math.PI * 2)
        ctx.fillStyle = 'white'
        ctx.fill()
      }
    }

    const linGrad = ctx.createLinearGradient(0, -200, 0, 750)
    linGrad.addColorStop(0, '#232256')
    linGrad.addColorStop(1, '#143778')

    ctx.fillStyle = linGrad
    ctx.fillRect(0 - centerX, 0 - centerY, 1500, 700)

    generateStars(ctx)

    const drawCompass = (angle) => {

      ctx.rotate((Math.PI / 180) * -priorAngle)
      priorAngle = angle

      drawCompassFrame()
      drawCompassArrow(angle)
    }

    const drawCompassFrame = () => {

      ctx.strokeStyle = 'blue'
      const radGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 400)
      radGrad.addColorStop(0, 'grey')
      radGrad.addColorStop(1, 'black')
      ctx.fillStyle = radGrad

      const silverGrad = ctx.createLinearGradient(-200, -200, 200, 200)
      silverGrad.addColorStop(0, 'silver')
      silverGrad.addColorStop(1, 'grey')
      ctx.strokeStyle = silverGrad

      ctx.beginPath()
      ctx.arc(0, 0, 202.5, 0, Math.PI * 2, true)
      ctx.stroke()
      ctx.fill()

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;

      for (let i = 0; i < 360; i += 15) {

        ctx.moveTo(0, -180)
        ctx.lineTo(0, -200)

        ctx.rotate((Math.PI / 180) * 15)

        ctx.stroke()
      }


    }

    const drawCompassArrow = (angle) => {

      const redGrad = ctx.createLinearGradient(0, -200, 0, 0);
      redGrad.addColorStop(0, 'darkRed');
      redGrad.addColorStop(1, 'red');

      const whiteGrayGrad = ctx.createLinearGradient(0, -200, 0, 0);
      whiteGrayGrad.addColorStop(0, 'white');
      whiteGrayGrad.addColorStop(1, 'gray');


      ctx.strokeStyle = redGrad;
      ctx.rotate((Math.PI / 180) * angle)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -170)
      ctx.stroke()

      ctx.strokeStyle = whiteGrayGrad;
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, 150)
      ctx.stroke()
    }

    drawCompass(0)

    canvas.addEventListener('mousemove', (event) => {

      let { x, y } = getMousePosition(event)

      const mouseX = x - centerX
      const mouseY = y - centerY
      const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 90

      drawCompass(angle)
    })



  }
  // practice()
  compass()


})
