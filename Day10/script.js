document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 1500
  canvas.height = 700

  // Day 10: Drawing Images on Canvas
  //      Learn how to load and draw images using drawImage().
  //      Task: Place an image on the canvas and overlay text or shapes.


  const image = document.getElementById('image')

  image.addEventListener('load', function () {

    ctx.drawImage(image,
      0,
      0,
      image.width,
      image.height,
      (canvas.width / 2) - (canvas.width / 2 / 2),
      (canvas.height / 2) - (canvas.height / 2 / 2),
      canvas.width / 2,
      canvas.height / 2)

    ctx.font = '48px serif'
    ctx.fillStyle = 'blue'
    ctx.fillText('Hello World', 620, 250)
  })
})
