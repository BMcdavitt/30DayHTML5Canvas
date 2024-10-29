document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 1500
  canvas.height = 700

  const circleSize = 60
  const circleStartOffset = 100
  const movementOffset = 40

  const circleData = [
    { x: circleStartOffset, y: circleStartOffset, radius: circleSize, selected: false },
    { x: canvas.width - circleStartOffset, y: canvasHeight = circleStartOffset, radius: circleSize, selected: false },
    { x: circleStartOffset, y: canvas.height - circleStartOffset, radius: circleSize, selected: false },
    { x: canvas.width - circleStartOffset, y: canvas.height - circleStartOffset, radius: circleSize, selected: false },
  ]

  const getMousePosition = (event) => {
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    return { x, y }
  }

  const drawCircles = () => {
    circleData.forEach(circle => {
      ctx.fillStyle = circle.selected ? 'green' : 'red'
      ctx.beginPath()
      ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.fill()
    })
  }

  const drawCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCircles()
  }

  window.addEventListener('click', function (event) {
    const { x, y } = getMousePosition(event)

    circleData.forEach(circle => {
      const distance = Math.sqrt((circle.x - x) ** 2 + (circle.y - y) ** 2)
      if (distance < circle.radius) {
        circle.selected = true
      } else {
        circle.selected = false
      }
    })

    drawCanvas()
  })

  window.addEventListener('keydown', function (event) {

    circleData.forEach(circle => {
      if (circle.selected) {
        switch (event.key) {
          case 'ArrowUp':
            circle.y -= movementOffset;
            break;
          case 'ArrowDown':
            circle.y += movementOffset;
            break;
          case 'ArrowLeft':
            circle.x -= movementOffset;
            break;
          case 'ArrowRight':
            circle.x += movementOffset;
            break;
        }
      }
    })


    drawCanvas()
  }
  )
  drawCanvas()
})



