document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 650
  canvas.height = 490

  const example1 = () => {
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.strokeStyle = 'green'
    ctx.moveTo(0, 0)
    ctx.lineTo(160, 160)
    ctx.lineTo(200, 160)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.moveTo(0, 0)
    ctx.lineTo(50, 170)
    ctx.stroke()
    ctx.closePath()
  }

  const example2 = () => {
    // draw a triangle
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = 'red'
    ctx.fillStyle = 'green'
    ctx.moveTo(10, 10)
    ctx.lineTo(250, 10)
    ctx.lineTo(10, 250)
    ctx.lineTo(10, 10)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()

  }

  const example3 = () => {
    // draw a quadratic curve
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.fillStyle = 'blue'
    ctx.moveTo(10, 10)
    ctx.lineTo(300, 250)
    ctx.quadraticCurveTo(100, 130, 160, 350)
    ctx.fill()
    ctx.closePath()
  }

  const example4 = () => {
    ctx.lineWidth = 3

    ctx.beginPath()
    ctx.moveTo(10, 10)
    ctx.lineTo(150, 200)
    ctx.strokeStyle = 'red'
    ctx.stroke()

    const control1 = { x: 220, y: 300 }
    const control2 = { x: 225, y: 100 }

    ctx.beginPath()
    ctx.moveTo(150, 200)
    ctx.bezierCurveTo(control1.x, control1.y, control2.x, control2.y, 300, 200)
    ctx.strokeStyle = 'blue'
    ctx.stroke()

    dot(control1.x, control1.y)
    dot(control2.x, control2.y)

    const control3 = { x: 400, y: 350 }

    ctx.beginPath()
    ctx.moveTo(300, 200)
    ctx.quadraticCurveTo(control3.x, control3.y, 450, 250)
    ctx.strokeStyle = 'green'
    ctx.stroke()

    dot(control3.x, control3.y)

    ctx.closePath()

  }

  const dot = (x, y) => {
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, 2 * Math.PI)
    ctx.fillStyle = 'red'
    ctx.fill()
  }

  const multipleShapes = () => {
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = 'blue'
    ctx.moveTo(10, 10)
    ctx.lineTo(250, 10)
    ctx.lineTo(10, 250)
    ctx.lineTo(10, 10)
    ctx.stroke()
    ctx.closePath()

    ctx.moveTo(400, 10)
    ctx.lineTo(640, 10)
    ctx.lineTo(640, 250)
    ctx.lineTo(400, 10)
    ctx.stroke()
    ctx.closePath()

    ctx.moveTo(640, 290)
    ctx.lineTo(640, 480)
    ctx.lineTo(400, 480)
    ctx.lineTo(640, 290)
    ctx.stroke()
    ctx.closePath()

  }

  const star = () => {

    ctx.beginPath()

    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'yellow'

    ctx.moveTo(325, 10)
    ctx.lineTo(450, 470)
    ctx.lineTo(100, 120)
    ctx.lineTo(570, 350)
    ctx.lineTo(100, 350)
    ctx.lineTo(570, 120)
    ctx.lineTo(200, 470)
    ctx.lineTo(325, 10)
    ctx.stroke()
    ctx.closePath()

    ctx.fill()
    ctx.stroke()
  }

  const star2 = () => {

    ctx.lineWidth = 2

    const segmentedCircle = (x, y, radius, segments, offset) => {
      console.log('segmented')
      const angle = 2 * Math.PI / segments
      const segmentColors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'black']
      let start = 0
      let end = angle

      for (let i = 0; i < segments; i++) {
        console.log('i', i)
        ctx.strokeStyle = 'black'
        ctx.beginPath()
        ctx.arc(x, y, radius, start + offset, end + offset)
        ctx.stroke()
        start = end
        end += angle
      }
    }

    segmentedCircle(325, 245, 40, 7, 0.7)
    segmentedCircle(325, 245, 200, 7, 0.2)

    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.lineJoin = 'bevel'
    ctx.moveTo(308, 207)
    ctx.lineTo(319, 45)
    ctx.lineTo(343, 207)
    ctx.lineTo(480, 120)
    ctx.lineTo(363, 240)
    ctx.lineTo(522, 283)
    ctx.lineTo(358, 270)
    ctx.lineTo(415, 423)
    ctx.lineTo(325, 285)
    ctx.lineTo(243, 428)
    ctx.lineTo(295, 270)
    ctx.lineTo(130, 295)
    ctx.lineTo(285, 240)
    ctx.lineTo(165, 125)
    ctx.lineTo(308, 207)
    ctx.stroke()
    ctx.closePath()


  }

  star2()

})