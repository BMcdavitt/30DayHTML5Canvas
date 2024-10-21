document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 650
  canvas.height = 490

  const example = () => {
    const x = canvas.width / 2;

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();

    ctx.font = "30px serif";

    ctx.textAlign = "left";
    ctx.fillText("left-aligned", x, 40);

    ctx.textAlign = "center";
    ctx.fillText("center-aligned", x, 85);

    ctx.textAlign = "right";
    ctx.fillText("right-aligned", x, 130);
  }

  const baselines = () => {
    const baselines = [
      "top",
      "hanging",
      "middle",
      "alphabetic",
      "ideographic",
      "bottom",
    ];
    ctx.font = "36px serif";
    ctx.strokeStyle = "red";

    baselines.forEach((baseline, index) => {
      ctx.textBaseline = baseline;
      const y = 75 + index * 75;
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(550, y + 0.5);
      ctx.stroke();
      ctx.fillText(`Abcdefghijklmnop (${baseline})`, 0, y);
    });
  }
  const test = () => {

    const x = canvas.width / 2;

    ctx.fillStyle = 'red'
    ctx.font = '50px serif'
    ctx.fillText('Hello World', 10, 50)

    gradient = ctx.createLinearGradient(10, 0, 500, 0)
    gradient.addColorStop(0, 'red')
    gradient.addColorStop(1, 'green')

    ctx.textAlign = "center"
    ctx.lineWidth = 4
    ctx.strokeStyle = gradient
    ctx.font = "100px serif";
    ctx.strokeText("Hello world", x, 150);



  }

  const banner = () => {

    const left = 150
    const right = 500
    const top = 10
    const bottom = 400
    const center = ((right - left) / 2) + left


    ctx.moveTo(left, top)
    ctx.lineTo(left, bottom)
    ctx.lineTo(center, bottom - 75)
    ctx.lineTo(right, bottom)
    ctx.lineTo(right, top)
    ctx.lineTo(left, top)
    ctx.stroke()

    ctx.gradient = ctx.createLinearGradient(0, 0, 0, 400)
    ctx.gradient.addColorStop(0, 'maroon')
    ctx.gradient.addColorStop(1, 'red')
    ctx.fillStyle = ctx.gradient

    ctx.fill()

    ctx.fillStyle = 'white'
    ctx.font = '75px monospace'
    ctx.textAlign = 'center'
    ctx.fillText('NEW', center, 150)
    ctx.fillText('ARRIVAL', center, 225)

  }

  banner()

})