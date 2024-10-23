document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 1500
  canvas.height = 700

  let lineDrawingActive = false
  const lineArray = []

  const getMousePosition = (event) => {
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    return { x, y }
  }

  const startLine = ({ x, y }) => {
    ctx.beginPath()
    ctx.moveTo(x, y)
    lineArray.push({ start: { x, y }, end: { x, y } })
  }

  const endLine = ({ x, y }) => {
    ctx.lineTo(x, y)
    ctx.stroke()

    lineArray[lineArray.length - 1].end = { x, y }
    drawLines()
  }

  const drawLines = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    lineArray.forEach(({ start, end }) => {
      ctx.beginPath()
      ctx.moveTo(start.x, start.y)
      ctx.lineTo(end.x, end.y)
      ctx.stroke()
    })
  }

  canvas.addEventListener('mousedown', function (event) {
    lineDrawingActive = true
    startLine(getMousePosition(event))
  })

  canvas.addEventListener('mouseup', function (event) {
    if (lineDrawingActive) {
      endLine(getMousePosition(event))
      lineDrawingActive = false
    }
  })

  canvas.addEventListener('mousemove', function (event) {
    if (lineDrawingActive) {
      endLine(getMousePosition(event))
    }
  })
})
