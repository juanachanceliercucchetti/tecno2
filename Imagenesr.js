class Imagenesr {
  constructor(xr, yr, anr, alr) {
    this.xr = xr;
    this.yr = yr;
    this.anr = anr;
    this.alr = alr;
    this.num = 0;
    this.load();
  }

  load() {
    this.imagenesr = [];
    for (let i = 0; i < 9; i++) {
      this.imagenesr[i] = loadImage("data/roja" + i + ".png");
    }
  }

  dibujar() {
    image(this.imagenesr[2], this.xr, this.yr, this.anr, this.alr);
  }

  teclapresionada (keyCode) {
    if (keyIsDown (RIGHT_ARROW)) {
      this.num ++;
      this.num %= this.imagenesr.length; 
    }

  }
}
