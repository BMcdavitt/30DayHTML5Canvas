document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 1500;
  canvas.height = 1000;

  const roofGradient = ctx.createLinearGradient(0, 0, 0, 300);
  roofGradient.addColorStop(0, "red");
  roofGradient.addColorStop(1, "darkRed");

  ctx.fillStyle = roofGradient;
  ctx.fillRect(700, 100, 100, 50);
  ctx.fillRect(650, 150, 200, 50);
  ctx.fillRect(600, 200, 300, 50);
  ctx.fillRect(550, 250, 400, 50);

  ctx.fillStyle = "brown";
  ctx.fillRect(600, 300, 300, 300);

  ctx.fillStyle = "black";
  ctx.fillRect(620, 400, 100, 200);

  ctx.fillStyle = "black";
  ctx.fillRect(760, 400, 100, 100);
});
