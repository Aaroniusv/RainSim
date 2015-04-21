var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var WIDTH = 500;
var HEIGHT = 500;


var raindrops = [];

var rainDrop = function(x,y, radius)
{
  this.centerX = x;
  this.centerY = y;
  this.radius = radius;
  this.draw = function(ctx)
   {
     ctx.beginPath();
     ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
     ctx.fillStyle = 'blue';
     ctx.fill();
     ctx.lineWidth = 1;
     ctx.strokeStyle = '#003300';
     ctx.stroke();
   };
   this.update = function()
   {
     this.centerX[0] += this.centerY[0];
   };
};
for(var i = 0; i < 10; i++)
{
  raindrops[i] = new rainDrop(Math.random()*100, Math.random()*100);
}


render = function()
{
	ctx.clearRect(0,0,WIDTH,HEIGHT);
  raindrops.forEach(function(i) { i.update()})
  rainDrop.update();
  requestAnimationFrame(render);
}
function main()
{

  render();
}
function init()
{

  main();
}
