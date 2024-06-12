//---- CALIBRACION----
let AMP_MIN = 0.03;
let AMP_MED = 0.15;
let AMP_MAX = 0.35;
/*
let FREC_MIN = 125;
let FREC_MAX = 270; */
//----AUDIO----
let mic; 
let amp = 0;
let sonido;
//----
let imagenesn = [];
let imagenesr = [];
let anchosRojas = [50, 60, 70, 100, 140, 180, 240, 260, 280];

//-----------
// Temporizadores para controlar la velocidad de cambio
let cambioIntervalo = 60; // Cambiar imagen cada 30 cuadros
let cambioContadorN = 0;
let cambioContadorR = 0;

function preload() {
  for (let i = 0; i < 35; i++) {
    imagenesn[i] = loadImage("data/sprites-obra" + i + ".png");
  }
  for (let i = 0; i < 9; i++) {
    imagenesr[i] = loadImage("data/roja" + i + ".png");
  }
}

function setup() {
  createCanvas(500, 600);
  imagenesnObj = new Imagenesn(0, 0, width, 600, 0);
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
  sonido = amp > AMP_MIN;
  amp = mic.getLevel(); // Actualización de la amplitud del micrófono

  // Actualizar el contador de cambio para Imagenesr
if (SonidoGrave && cambioContadorR <= 0) {
  imagenesrObj.mover();
  cambioContadorR = cambioIntervalo;
} else if (cambioContadorR > 0) {
  cambioContadorR--;
}

// Actualizar el contador de cambio para Imagenesn
if (SonidoAgudo && cambioContadorN <= 0) {
  imagenesnObj.mover();
  cambioContadorN = cambioIntervalo;
} else if (cambioContadorN > 0) {
  cambioContadorN--;
}


  if (SonidoGrave){
    imagenesrObj.mover();
  }

  if (SonidoAgudo){
    imagenesnObj.mover();
  }

if (sonido){
  imagenesrObj.opacidadAlta();
} else {
  imagenesrObj.opacidadBaja();
}
  amp= mic.getLevel();
 texto = 'amplitud' + amp;
 text (texto, 370,100);
}

function keyPressed() {
  imagenesnObj.teclapresionada();
  imagenesrObj.teclapresionada();
}