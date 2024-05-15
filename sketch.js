let imagenesn, imagenesr;

function setup() {
  createCanvas(500, 600);
  imagenesn = new Imagenesn(100, 50, 300, 400, 0);
  imagenesr = new Imagenesr(100, 470, 50, 60);
}

function draw() {
  background(220);
  imagenesn.dibujar();
  imagenesr.dibujar();
}

function keyPressed() {
  imagenesn.teclapresionada();
  imagenesr.teclapresionada();
}
