

class Imagenesr {
  constructor(xr, yr, anr, alr) {
    this.load();
    this.xr = xr;
    this.yr = yr; 
    this.anr = anr;
    this.alr = alr;
    this.num = 0; // Inicializa la variable num para el índice de la imagen
  }

  load() {
    this.imagenesr = [];
    for (let i = 0; i < 9; i++) {
      this.imagenesr[i] = loadImage("data/roja" + i + ".png");
    }
  }

  dibujar() {
    image(this.imagenesr[this.num], this.xr, this.yr, this.anr, this.alr);
  }

  teclaPresionada(keyCode) {
    // En este caso, asumo que también quieres cambiar la imagen en Imagenesr al presionar la tecla derecha.
    if (keyCode === RIGHT_ARROW) {
      this.num = (this.num + 1) % this.imagenesr.length; // Cambia al siguiente índice de imagen
    }
  }
}
