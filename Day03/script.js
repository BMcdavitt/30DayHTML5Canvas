document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')

  console.log('Here', canvas)

  canvas.width = 1000
  canvas.height = 1000

  const drawTarget = () => {
    ctx.beginPath()
    ctx.arc(500, 250, 125, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.fillStyle = 'red'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(500, 250, 100, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.fillStyle = 'blue'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(500, 250, 75, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.fillStyle = 'red'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(500, 250, 50, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.fillStyle = 'blue'
    ctx.fill()
  }

  const drawLines = () => {
    ctx.beginPath()
    ctx.moveTo(10, 0)
    ctx.lineTo(100, 100)
    ctx.stroke()

    ctx.lineWidth = 5

    ctx.beginPath()
    ctx.moveTo(10, 100)
    ctx.lineTo(100, 200)
    ctx.stroke()

    ctx.lineWidth = 1
    ctx.strokeStyle = 'red'

    ctx.beginPath()
    ctx.moveTo(10, 200)
    ctx.lineTo(100, 300)
    ctx.stroke()

    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5
    ctx.lineCap = 'round'

    ctx.beginPath()
    ctx.moveTo(10, 300)
    ctx.lineTo(100, 400)

    ctx.beginPath()
    ctx.moveTo(10, 400)
    ctx.lineTo(100, 500)
    ctx.lineTo(200, 500)

    ctx.stroke()

    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(10, 500)
    ctx.lineTo(100, 600)
    ctx.lineTo(200, 600)

    ctx.stroke()
  }

  const dratTriangles = () => {
    ctx.fillStyle = 'red'
    ctx.lineWidth = 10

    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(500, 10)
    ctx.lineTo(600, 110)
    ctx.lineTo(400, 110)
    ctx.closePath()
    ctx.stroke()

    ctx.lineJoin = 'bevel'
    ctx.beginPath()
    ctx.moveTo(500, 130)
    ctx.lineTo(600, 230)
    ctx.lineTo(400, 230)
    ctx.closePath()
    ctx.stroke()

    ctx.lineJoin = 'miter'
    ctx.beginPath()
    ctx.moveTo(500, 250)
    ctx.lineTo(600, 350)
    ctx.lineTo(400, 350)
    ctx.closePath()
    ctx.stroke()
  }

  const drawPieChart = () => {
    ctx.strokeStyle = 'black'

    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(250, 250, 200, 0, Math.PI * 0.25)
    ctx.lineTo(250, 250)
    ctx.lineTo(250 + 200 * Math.cos(0), 250 + 200 * Math.sin(0))
    ctx.fill()

    ctx.fillStyle = 'blue'
    ctx.beginPath()
    ctx.arc(250, 250, 200, Math.PI * 0.25, Math.PI * 1)
    ctx.lineTo(250, 250)
    ctx.lineTo(250 + 200 * Math.cos(Math.PI * 0.25), 250 + 200 * Math.sin(Math.PI * 0.25))
    ctx.fill()

    ctx.fillStyle = 'green'
    ctx.beginPath()
    ctx.arc(250, 250, 200, Math.PI * 1, Math.PI * 1.5)
    ctx.lineTo(250, 250)
    ctx.lineTo(250 + 200 * Math.cos(Math.PI * 1), 250 + 200 * Math.sin(Math.PI * 1))
    ctx.fill()

    ctx.fillStyle = 'yellow'
    ctx.beginPath()
    ctx.arc(250, 250, 200, Math.PI * 1.5, Math.PI * 2)
    ctx.lineTo(250, 250)
    ctx.lineTo(250 + 200 * Math.cos(Math.PI * 1.5), 250 + 200 * Math.sin(Math.PI * 1.75))
    ctx.fill()

    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.arc(250, 250, 200, 0, Math.PI * 2)
    ctx.stroke()
  }

  //   drawTarget()
  // drawLines()
  // dratTriangles()

  drawPieChart()
})
