//---- CALIBRACION----
let AMP_MIN = 0.01;
let AMP_MED = 0.15;
let AMP_MAX = 0.3;
/*
let FREC_MIN = 125;
let FREC_MAX = 270; */
//----AUDIO----
let mic; 
let amp;
//----
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
  userStartAudio(); // forzar el inicio del audio en el navegador
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  background(220);
  imagenesnObj.dibujar();
  imagenesrObj.dibujar();
  SonidoGrave  = amp > AMP_MIN && amp < AMP_MED;
  SonidoAgudo = amp < AMP_MAX && amp > AMP_MED;
  
  
  if (SonidoGrave){
    imagenesrObj.mover();
  }

  if (SonidoAgudo){
    imagenesnObj.mover();
  }


  amp= mic.getLevel();
 texto = 'amplitud' + amp;
 text (texto, 370,100);
}

function keyPressed() {
  imagenesnObj.teclapresionada();
  imagenesrObj.teclapresionada();
}




