document.addEventListener('DOMContentLoaded', function () {

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 1500
  canvas.height = 700

  const squares = []
  let selectedSquare = null

  let isDrawing = false
  let isDragging = false
  let isRotating = false
  let isResizing = false

  let lastPosition = null

  let selectedFunction = "Draw"

  const drawPopoverMenu = (x, y) => {
    const popover = document.createElement('div')
    popover.style.position = 'absolute'
    popover.style.top = `0`
    popover.style.left = `0`
    popover.style.width = '100px'
    popover.style.height = '100vh'
    popover.style.backgroundColor = 'grey'
    popover.style.zIndex = '1000'
    popover.style.display = 'flex'
    popover.style.justifyContent = 'center'
    popover.style.alignItems = 'center'
    document.body.appendChild(popover)

    const form = document.createElement('form');
    const options = ['Draw', 'Move', 'Rotate', 'Resize'];

    form.style.display = 'flex';
    form.style.flexDirection = 'column';

    options.forEach(option => {
      const label = document.createElement('label');
      label.style.marginRight = '10px';
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'action';
      radio.value = option;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));
      form.appendChild(label);
      if (option === selectedFunction) {
        radio.checked = true;
      }
      radio.addEventListener('change', function (e) {
        selectedFunction = e.target.value;
      });
    });



    popover.appendChild(form);
  }

  const updateCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawSquares()
  }

  const drawSquares = () => {
    squares.forEach((square, index) => {
      if (square.angle) {
        ctx.save()
        const centerX = (square.startX + square.endX) / 2
        const centerY = (square.startY + square.endY) / 2
        ctx.translate(centerX, centerY)
        ctx.rotate((Math.PI / 180) * square.angle)
        ctx.translate(-centerX, -centerY)
        ctx.beginPath()
        ctx.rect(square.startX, square.startY, square.endX - square.startX, square.endY - square.startY)
        ctx.stroke()
        ctx.restore()
      } else {
        ctx.beginPath()
        ctx.rect(square.startX, square.startY, square.endX - square.startX, square.endY - square.startY)
        ctx.stroke()
      }
      if (selectedSquare === square) {
        ctx.fillStyle = 'red'
        ctx.fill()
      }

    })
  }

  const pointInSquare = (point) => {
    return [...squares].reverse().find(square => {
      const lowerX = Math.min(square.startX, square.endX)
      const higherX = Math.max(square.startX, square.endX)
      const lowerY = Math.min(square.startY, square.endY)
      const higherY = Math.max(square.startY, square.endY)
      if (point.x > lowerX && point.x < higherX && point.y > lowerY && point.y < higherY) {
        return true
      }
    })
  }


  canvas.addEventListener('mousedown', function (e) {
    if (e.button === 0) {

      lastPosition = { x: e.offsetX, y: e.offsetY }

      if (selectedFunction === 'Draw') {
        squares.push({ startX: e.offsetX, startY: e.offsetY, endX: e.offsetX, endY: e.offsetY })
        selectedSquare = squares[squares.length - 1]
        isDrawing = true
      } else {
        const foundSquare = pointInSquare({ x: e.offsetX, y: e.offsetY })
        if (foundSquare) {
          selectedSquare = foundSquare
          updateCanvas()
          if (selectedFunction === 'Move') {
            isDragging = true
          } else if (selectedFunction === 'Rotate') {
            isRotating = true
          } else if (selectedFunction === 'Resize') {
            isResizing = true
          }
        } else {
          selectedSquare = null
          updateCanvas()
        }
      }
    }
  })

  canvas.addEventListener('mousemove', function (e) {

    if (selectedSquare) {
      delta = { x: e.offsetX - lastPosition.x, y: e.offsetY - lastPosition.y }
      lastPosition = { x: e.offsetX, y: e.offsetY }
    }


    if (isDrawing) {
      squares[squares.length - 1].endX = e.offsetX
      squares[squares.length - 1].endY = e.offsetY
    } else if (isDragging) {
      selectedSquare.startX += delta.x
      selectedSquare.startY += delta.y
      selectedSquare.endX += delta.x
      selectedSquare.endY += delta.y
    } else if (isResizing) {
      const centerX = (selectedSquare.startX + selectedSquare.endX) / 2
      const centerY = (selectedSquare.startY + selectedSquare.endY) / 2
      const distanceX = Math.abs(e.offsetX - centerX)
      const distanceY = Math.abs(e.offsetY - centerY)
      selectedSquare.startX = centerX - distanceX
      selectedSquare.startY = centerY - distanceY
      selectedSquare.endX = centerX + distanceX
      selectedSquare.endY = centerY + distanceY
    } else if (isRotating) {
      const centerX = (selectedSquare.startX + selectedSquare.endX) / 2
      const centerY = (selectedSquare.startY + selectedSquare.endY) / 2
      const distance = Math.sqrt(Math.pow(e.offsetY - centerY, 2) + Math.pow(e.offsetX - centerX, 2))
      selectedSquare.angle = distance % 360
    }
    updateCanvas()
  })

  canvas.addEventListener('mouseup', function (e) {
    if (e.button === 0) {
      isDrawing = false
      isDragging = false
      isRotating = false
      isResizing = false
    }
  })

  drawPopoverMenu(100, 100)

})
