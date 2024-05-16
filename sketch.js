let imagenesn = [];
let imagenesr = [];
let anchosRojas = [50, 60, 70, 100, 140, 180, 240, 260, 280];

function preload() {
  for (let i = 0; i < 12; i++) {
    imagenesn[i] = loadImage("data/img" + i + ".png");
  }
  for (let i = 0; i < 9; i++) {
    imagenesr[i] = loadImage("data/roja" + i + ".png");
  }
}

function setup() {
  createCanvas(500, 600);
  imagenesnObj = new Imagenesn(100, 50, 300, 400, 0);
  imagenesrObj = new Imagenesr(100, 470, anchosRojas[0], 60);
}

function draw() {
  background(220);
  imagenesnObj.dibujar();
  imagenesrObj.dibujar();
}

function keyPressed() {
  imagenesnObj.teclapresionada();
  imagenesrObj.teclapresionada();
}
