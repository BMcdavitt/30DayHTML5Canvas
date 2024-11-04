

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 1500
  canvas.height = 700

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


    const content = document.createElement('div')
    content.style.display = 'flex'
    content.style.flexDirection = 'column'

    popover.appendChild(content)


    const start = document.createElement('button')
    start.textContent = 'Start'
    start.style.margin = '10px'
    start.addEventListener('click', () => {
      step()
      stop.style.display = 'block'
      start.style.display = 'none'
    })
    content.appendChild(start)

    const stop = document.createElement('button')
    stop.textContent = 'Stop'
    stop.style.margin = '10px'
    stop.style.display = 'none'
    stop.addEventListener('click', () => {
      cancelAnimationFrame(ballAnimationFrame)
      stop.style.display = 'none'
      start.style.display = 'block'
    })
    content.appendChild(stop)

  }

  const drawBall = () => {
    const x = ballPos.x
    const y = ballPos.y

    const radius = 50;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
  };

  let ballPos = {
    x: canvas.width / 2,
    y: canvas.height / 2
  }

  let ballAnimationFrame = null

  let xDirection = 'right'
  let yDirection = 'down'

  const step = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();

    if (ballPos.x + 50 >= canvas.width) {
      xDirection = 'left'
    } else if (ballPos.x - 50 <= 0) {
      xDirection = 'right'
    }

    if (ballPos.y + 50 >= canvas.height) {
      yDirection = 'up'
    } else if (ballPos.y - 50 <= 0) {
      yDirection = 'down'
    }


    if (xDirection === 'right') {
      ballPos.x += 5;
    } else {
      ballPos.x -= 5;
    }

    if (yDirection === 'down') {
      ballPos.y += 5;
    } else {
      ballPos.y -= 5;
    }


    ballAnimationFrame = requestAnimationFrame(step)

  }

  drawPopoverMenu(0, 0)
  drawBall()
})
