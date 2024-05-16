class Imagenesr {
  constructor(xr, yr, anr, alr) {
    this.xr = xr;
    this.yr = yr;
    this.anr = anr;
    this.alr = alr;
    this.num = 0;
    this.op = 255;
  }

  dibujar() {
    tint(255, this.op);
    image(imagenesr[this.num], this.xr, this.yr, this.anr, this.alr);
    noTint();
  }

  teclapresionada() {
    if (keyIsDown(UP_ARROW)) {
      this.num++;
      this.anr+=10;
      this.num %= imagenesr.length;
      this.anr = anchosRojas[this.num]; 
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.num--;
      this.anr-=10;
      if (this.num < 0) {
        this.num = imagenesr.length - 1;
      }
      this.anr = anchosRojas[this.num]; 
    }
    
    if (keyIsDown(87)){
      this.op = min(this.op + 20, 255);
    }
    
    if (keyIsDown(83)){
      this.op = max(this.op - 20, 0);
    }
  }
}
