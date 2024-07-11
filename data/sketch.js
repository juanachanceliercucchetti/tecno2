//---- CALIBRACION----
let AMP_MIN = 0.03;
let AMP_MED = 0.15;
let AMP_MAX = 0.7;

//----AUDIO----
let mic; 
let amp = 0;
let sonido;

let imagenesn = [];
let imagenesr = [];
let imagenesn2 = [];
let imagenesr2 = [];

//-----------
// Temporizadores para controlar la velocidad de cambio
let cambioIntervalo = 15; // Cambiar imagen cada 15 cuadros
let cambioContadorN = 0;
let cambioContadorR = 0;
let mostrarImagenesn1; // Para alternar entre imagenesn1 e imagenesn2
let mostrarImagenesr1;

function preload() {
  for (let i = 0; i < 43; i++) {
    imagenesn[i] = loadImage("data/obra" + i + ".png");
  }
  for (let i = 0; i < 35; i++) {
    imagenesr[i] = loadImage("data/oobra" + i + ".png");
  }
  for (let i = 0; i < 48; i++) {
    imagenesn2[i] = loadImage("data/obraa" + i + ".png");
  }
  for (let i = 0; i < 45; i++) {
    imagenesr2[i] = loadImage("data/linea" + i + ".png");
  }
}

function setup() {
  createCanvas(500, 600);
  
  // Inicializar aleatoriamente los valores de mostrarImagenesn1 y mostrarImagenesr1
  mostrarImagenesn1 = random() < 0.5;
  mostrarImagenesr1 = random() < 0.5;
  
  // Crear los objetos de imágenes basado en la inicialización aleatoria
  if (mostrarImagenesn1) {
    imagenesnObj = new Imagenesn1(0, -100, width, 600, 0);
  } else {
    imagenesn2Obj = new Imagenesn2(0, -100, width, 600, 0);
  }

  if (mostrarImagenesr1) {
    imagenesrObj = new Imagenesr1(0, 0, width, 600, 0);
  } else {
    imagenesr2Obj = new Imagenesr2(0, 0, width, 600, 0);
  }
  
  userStartAudio(); // Forzar el inicio del audio en el navegador
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
  if (mostrarImagenesr1) {
    imagenesrObj.dibujar();
  } else {
    imagenesr2Obj.dibujar();
  }

  amp = mic.getLevel(); // Actualización de la amplitud del micrófono
  let SonidoGrave = amp > AMP_MIN && amp < AMP_MED;
  let SonidoAgudo = amp < AMP_MAX && amp > AMP_MED;
  let sonido = amp > AMP_MIN;

  if (SonidoGrave && cambioContadorR <= 0 && !SonidoAgudo) {
    if (mostrarImagenesr1) {
      imagenesrObj.mover();
      if (imagenesrObj.num === 0) {
        mostrarImagenesr1 = false;
        imagenesr2Obj = new Imagenesr2(0, 0, width, 600, 0); // Inicializa la otra secuencia
      }
    } else {
      imagenesr2Obj.mover();
      if (imagenesr2Obj.num === 0) {
        mostrarImagenesr1 = true;
        imagenesrObj = new Imagenesr1(0, 0, width, 600, 0); // Inicializa la otra secuencia
      }
    }
    cambioContadorR = cambioIntervalo;
  } else if (SonidoAgudo && cambioContadorN <= 0 && !SonidoGrave) {
    if (mostrarImagenesn1) {
      imagenesnObj.mover();
      if (imagenesnObj.num === 0) {
        mostrarImagenesn1 = false;
        imagenesn2Obj = new Imagenesn2(0, -100, width, 600, 0); // Inicializa la otra secuencia
      }
    } else {
      imagenesn2Obj.mover();
      if (imagenesn2Obj.num === 0) {
        mostrarImagenesn1 = true;
        imagenesnObj = new Imagenesn1(0, -100, width, 600, 0); // Inicializa la otra secuencia
      }
    }
    cambioContadorN = cambioIntervalo;
  } else if (cambioContadorR > 0) {
    cambioContadorR--;
  } else if (cambioContadorN > 0) {
    cambioContadorN--;
  }

  if (sonido) {
    if (mostrarImagenesr1) {
      imagenesrObj.opacidadAlta();
    } else {
      imagenesr2Obj.opacidadAlta();
    }

    if (mostrarImagenesn1) {
      imagenesnObj.opacidadAlta();
    } else {
      imagenesn2Obj.opacidadAlta();
    }
  } else {
    if (mostrarImagenesr1) {
      imagenesrObj.opacidadBaja();
    } else {
      imagenesr2Obj.opacidadBaja();
    }

    if (mostrarImagenesn1) {
      imagenesnObj.opacidadBaja();
    } else {
      imagenesn2Obj.opacidadBaja();
    }
  }

  //let texto = 'amplitud ' + amp;
  //text(texto, 370, 100);
}
