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
let imagenesr3 = [];
//-----------
let imagenesnObj;
let imagenesrObj;
let imagenesn2Obj;
let imagenesr2Obj;
let imagenesr3Obj;

// Temporizadores para controlar la velocidad de cambio
let cambioIntervalo = 15; // Cambiar imagen cada 15 cuadros
let cambioContadorN = 0;
let cambioContadorR = 0;
let mostrarImagenesn1; // Para alternar entre imagenesn1 e imagenesn2
let mostrarImagenesr1;
let mostrarImagenesr2;
let mostrarImagenesr3;


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
  for (let i = 0; i < 35; i++) {
    imagenesr3[i] = loadImage("data/lineaaa" + i + ".png");
  }
}

function setup() {
  createCanvas(500, 600);
  
  // Inicializar aleatoriamente los valores de mostrarImagenesn1 y mostrarImagenesr1
  mostrarImagenesn1 = random() < 0.5;
  mostrarImagenesr1 = random() < 0.5;
  mostrarImagenesr2 = !mostrarImagenesr1 && random() < 0.5;
  mostrarImagenesr3 = !mostrarImagenesr1 && !mostrarImagenesr2;

  // Crear los objetos de imágenes basado en la inicialización aleatoria
  if (mostrarImagenesn1) {
    imagenesnObj = new Imagenesn1(0, -100, width, 600, 0);
  } else {
    imagenesn2Obj = new Imagenesn2(0, -100, width, 600, 0);
  }

  if (mostrarImagenesr1) {
    imagenesrObj = new Imagenesr1(0, 0, width, 600, 0);
  } else if (mostrarImagenesr2) {
    imagenesr2Obj = new Imagenesr2(0, 0, width, 600, 0);
  } else {
    imagenesr3Obj = new Imagenesr3(0, 0, width, 600, 0);
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
  } else if (mostrarImagenesr2) {
    imagenesr2Obj.dibujar();
  } else if (mostrarImagenesr3) {
    imagenesr3Obj.dibujar();
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
        mostrarImagenesr2 = true;
        imagenesr2Obj = new Imagenesr2(0, 0, width, 600, 0); // Inicializa la siguiente secuencia
      }
    } else if (mostrarImagenesr2) {
      imagenesr2Obj.mover();
      if (imagenesr2Obj.num === 0) {
        mostrarImagenesr2 = false;
        mostrarImagenesr3 = true;
        imagenesr3Obj = new Imagenesr3(0, 0, width, 600, 0); // Inicializa la siguiente secuencia
      }
    } else if (mostrarImagenesr3) {
      imagenesr3Obj.mover();
      if (imagenesr3Obj.num === 0) {
        mostrarImagenesr3 = false;
        mostrarImagenesr1 = true;
        imagenesrObj = new Imagenesr1(0, 0, width, 600, 0); // Reinicia la primera secuencia
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
    } else if (mostrarImagenesr2) {
      imagenesr2Obj.opacidadAlta();
    } else if (mostrarImagenesr3) {
      imagenesr3Obj.opacidadAlta();
    }

    if (mostrarImagenesn1) {
      imagenesnObj.opacidadAlta();
    } else {
      imagenesn2Obj.opacidadAlta();
    }
  } else {
    if (mostrarImagenesr1) {
      imagenesrObj.opacidadBaja();
    } else if (mostrarImagenesr2) {
      imagenesr2Obj.opacidadBaja();
    } else if (mostrarImagenesr3) {
      imagenesr3Obj.opacidadBaja();
    }

    if (mostrarImagenesn1) {
      imagenesnObj.opacidadBaja();
    } else {
      imagenesn2Obj.opacidadBaja();
    }
  }
}


function cambiarClaseImagenesn() {
  if (mostrarImagenesn1) {
    mostrarImagenesn1 = false;
    imagenesn2Obj = new Imagenesn2(0, -100, width, 600, 0); // Inicializa la otra secuencia
  } else {
    mostrarImagenesn1 = true;
    imagenesnObj = new Imagenesn1(0, -100, width, 600, 0); // Inicializa la otra secuencia
  }
}

function cambiarClaseImagenesr() {
  if (mostrarImagenesr1) {
    mostrarImagenesr1 = false;
    mostrarImagenesr2 = true;
    imagenesr2Obj = new Imagenesr2(0, 0, width, 600, 0); // Inicializa la siguiente secuencia
  } else if (mostrarImagenesr2) {
    mostrarImagenesr2 = false;
    mostrarImagenesr3 = true;
    imagenesr3Obj = new Imagenesr3(0, 0, width, 600, 0); // Inicializa la siguiente secuencia
  } else {
    mostrarImagenesr3 = false;
    mostrarImagenesr1 = true;
    imagenesrObj = new Imagenesr1(0, 0, width, 600, 0); // Reinicia la primera secuencia
  }
}
