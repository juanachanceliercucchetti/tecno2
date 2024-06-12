//---- CALIBRACION----
let AMP_MIN = 0.03;
let AMP_MED = 0.15;
let AMP_MAX = 0.7;
let FREC_MIN = 125;
let FREC_MED = 200;
let FREC_MAX = 270;

//----AUDIO----
let mic; 
let amp = 0;
let frec;
let sonido;
//----
let imagenesn = [];
let imagenesr = [];
let imagenesn2 = [];


//-----------
// Temporizadores para controlar la velocidad de cambio
let cambioIntervalo = 15; // Cambiar imagen cada 30 cuadros
let cambioContadorN = 0;
let cambioContadorR = 0;
let mostrarImagenesn1 = true; // Para alternar entre imagenesn1 e imagenesn2

function preload() {
  for (let i = 0; i < 43; i++) {
    imagenesn[i] = loadImage("data/obra/obra" + i + ".png");
  }
  for (let i = 0; i < 35; i++) {
    imagenesr[i] = loadImage("data/obra/oobra" + i + ".png");
  }
  for (let i = 0; i < 48; i++) {
    imagenesn2[i] = loadImage("data/obraa/obraa" + i + ".png");
  }
  for (let i = 0; i < 45; i++) {
    imagenesr2[i] = loadImage("data/obraa/linea" + i + ".png");
  }
}

function setup() {
  createCanvas(400, 580);
  imagenesnObj = new Imagenesn1(0, -100, width, 600, 0);
  imagenesrObj = new Imagenesr1(0, 470, width, 200);
  imagenesn2Obj = new Imagenesn2(0, 0, width, 600, 0);
  userStartAudio(); // forzar el inicio del audio en el navegador
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {

  background(220);
  if (mostrarImagenesn1) {
    imagenesnObj.dibujar();
  } else {
    imagenesn2Obj.dibujar();
  }
  imagenesrObj.dibujar();

  SonidoGrave = amp > AMP_MIN && amp < AMP_MED;
  SonidoAgudo = amp < AMP_MAX && amp > AMP_MED;
  sonido = amp > AMP_MIN;
  amp = mic.getLevel(); // Actualización de la amplitud del micrófono

  if (SonidoGrave && cambioContadorR <= 0 && !SonidoAgudo) { //verifica si hay un sonido grave y si el contador de cambio para imagenesrObj es menor o igual a 0. También se asegura de que no haya un sonido agudo en ese momento para evitar que ambas condiciones se cumplan al mismo tiempo.
    imagenesrObj.mover();
    cambioContadorR = cambioIntervalo;
  } else if (SonidoAgudo && cambioContadorN <= 0 && !SonidoGrave) {
    if (mostrarImagenesn1) {
      imagenesnObj.mover();
      if (imagenesnObj.num === 0) { //cambia a imagenesn2 cuando imagenesn1 termina
        mostrarImagenesn1 = false;
      }
    } else {
      imagenesn2Obj.mover();
      if (imagenesn2Obj.num === 0) { //cambia a imagenesn1 cuando imagenesn2 termina
        mostrarImagenesn1 = true;
      }
    }
    cambioContadorN = cambioIntervalo;
  } else if (cambioContadorR > 0) {
    cambioContadorR--;
  } else if (cambioContadorN > 0) {
    cambioContadorN--;
  }

  if (sonido) {
    imagenesrObj.opacidadAlta();
    if (mostrarImagenesn1) {
      imagenesnObj.opacidadAlta();
    } else {
      imagenesn2Obj.opacidadAlta();
    }
  } else {
    imagenesrObj.opacidadBaja();
    if (mostrarImagenesn1) {
      imagenesnObj.opacidadBaja();
    } else {
      imagenesn2Obj.opacidadBaja();
    }
  }

  amp = mic.getLevel();
  let texto = 'amplitud ' + amp;
  text(texto, 370, 100);
}