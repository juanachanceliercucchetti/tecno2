
function setup() {
  createCanvas(500, 600);
  Imagenesn = new Imagenesn(100, 50, 300, 400);
  Imagenesr = new Imagenesr(100, 470, 50, 60);
}

function draw() {
  background(220);
  Imagenesn.dibujar();
  Imagenesr.dibujar();
  this.Imagenesn.teclapresionada (RIGHT_ARROW);
}
