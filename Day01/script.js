const canvas = document.getElementById('myDay1Canvas');
const ctx = canvas.getContext('2d');

ctx.strokeRect(0, 0, 100, 100);

ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(150, 150);
ctx.stroke();