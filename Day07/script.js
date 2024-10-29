document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  console.log('Here', canvas)

  canvas.width = 1500
  canvas.height = 700

  ctx.fillStyle = 'green'
  ctx.fillRect(0, 250, canvas.width, canvas.height)

  skyGradient = ctx.createLinearGradient(0, 0, 0, 250)
  skyGradient.addColorStop(0, 'blue')
  skyGradient.addColorStop(1, 'white')

  ctx.fillStyle = skyGradient
  ctx.fillRect(0, 0, canvas.width, 250)

  ctx.fillStyle = 'brown'
  ctx.fillRect(0, 200, canvas.width, 50)

  for (let i = 0; i < canvas.width; i += 10) {
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(i, 200)
    ctx.lineTo(i, 250)
    ctx.stroke()
  }

  roadGradient = ctx.createLinearGradient(0, 500, 0, 650)
  roadGradient.addColorStop(0, 'grey')
  roadGradient.addColorStop(0.25, 'black')
  roadGradient.addColorStop(0.75, 'black')
  roadGradient.addColorStop(1, 'grey')

  ctx.fillStyle = roadGradient
  ctx.fillRect(0, 500, canvas.width, 150)

  let x = 0
  while (x < canvas.width) {
    ctx.fillStyle = 'yellow'
    ctx.fillRect(x, 570, 50, 10)
    x += 100
  }

  const houseGradient = ctx.createLinearGradient(0, 120, 0, 420)
  houseGradient.addColorStop(0, 'lightBlue')
  houseGradient.addColorStop(1, 'white')


  ctx.fillStyle = houseGradient
  ctx.strokeStyle = 'black'
  ctx.fillRect(100, 120, 500, 300)
  ctx.strokeRect(100, 120, 500, 300)

  const roofGradient = ctx.createLinearGradient(0, 0, 0, 120)
  roofGradient.addColorStop(0, 'black')
  roofGradient.addColorStop(1, 'grey')


  ctx.fillStyle = roofGradient
  ctx.beginPath()
  ctx.moveTo(100, 120)
  ctx.lineTo(250, 20)
  ctx.lineTo(750, 20)
  ctx.lineTo(600, 120)
  ctx.stroke()
  ctx.fill()

  ctx.fillStyle = houseGradient
  ctx.beginPath()
  ctx.moveTo(600, 120)
  ctx.lineTo(750, 20)
  ctx.lineTo(850, 80)
  ctx.lineTo(850, 300)
  ctx.lineTo(600, 420)
  ctx.fill()

  ctx.fillStyle = 'brown'
  ctx.fillRect(150, 270, 100, 150)
  ctx.strokeRect(150, 270, 100, 150)

  const drawWindow = (x, y) => {

    // Draw first window
    ctx.fillStyle = 'white'
    ctx.fillRect(x, y, 75, 100)
    ctx.strokeRect(x, y, 75, 100)
    ctx.beginPath()
    ctx.moveTo(x + 37.5, y)
    ctx.lineTo(x + 37.5, y + 100)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y + 50)
    ctx.lineTo(x + 75, y + 50)
    ctx.stroke()
  }

  drawWindow(450, 200)
  drawWindow(300, 200)

  ctx.fillStyle = '#491B1D'
  ctx.fillRect(1100, 120, 75, 330)


  const drawLeaf = (x, y) => {

    const leafGradient = ctx.createRadialGradient(x, y, 5, x, y, 70)
    leafGradient.addColorStop(0, 'red')
    leafGradient.addColorStop(1, 'orange')

    ctx.fillStyle = leafGradient
    ctx.beginPath()
    ctx.arc(x, y, 70, 0, 2 * Math.PI)
    ctx.fill()
  }

  drawLeaf(1000, 100)
  drawLeaf(1200, 120)
  drawLeaf(1100, 120)
  drawLeaf(1250, 100)
  drawLeaf(950, 50)
  drawLeaf(1100, 25)
  drawLeaf(1050, 50)
  drawLeaf(1200, 25)
  drawLeaf(1300, 20)


  const signGradient = ctx.createLinearGradient(800, 300, 900, 400)
  signGradient.addColorStop(0, 'red')
  signGradient.addColorStop(1, 'blue')

  ctx.fillStyle = signGradient;
  ctx.fillRect(800, 300, 150, 100);
  ctx.strokeRect(800, 300, 150, 100);

  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText('For Sale', 840, 350);

  ctx.fillStyle = 'brown';
  ctx.fillRect(810, 400, 10, 50);
  ctx.fillRect(930, 400, 10, 50);



})
