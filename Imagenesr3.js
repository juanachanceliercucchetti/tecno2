class Imagenesr3 {
    constructor(xr, yr, anr, alr, num) {
      this.xr = xr;
      this.yr = yr;
      this.anr = anr;
      this.alr = alr;
      this.num = num;
      this.numAnterior = num;
      this.op = 0;
      this.opCambio = 1;
    }
  
    dibujar() {
      this.opCambio = lerp(this.opCambio,1,0.1);
      tint(255, this.op*this.opCambio);
      image(imagenesr3[this.num], this.xr, this.yr, this.anr, this.alr);
      tint(255, this.op*(1-this.opCambio));
      image(imagenesr3[this.numAnterior], this.xr, this.yr, this.anr, this.alr);
      noTint();
    }
  
    mover() {
      this.numAnterior = this.num;
      this.num++;
      this.num %= imagenesr3.length;
      this.opCambio = 0;
    }
  
    opacidadAlta() {
      this.op = 255;
    }
  
    opacidadBaja() {
      this.op = max(this.op - 1, 0);
      if (this.op === 0) {
        cambiarClaseImagenesr();
      }
    }
  }