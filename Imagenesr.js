class Imagenesr {
  constructor(xr, yr, anr, alr) {
    this.xr = xr;
    this.yr = yr;
    this.anr = anr;
    this.alr = alr;
    this.num = 0;
    this.vel = 0;
    this.op = 255;
    this.opCambio = 1;

  }

  dibujar() {
    this.opCambio = lerp(this.opCambio,1,0.1);
    tint(255, this.op*this.opCambio);
    image(imagenesr[this.num], this.xr, this.yr, this.anr, this.alr);
    noTint();
  }
  
  mover(){
    this.num++;
    this.anr+=10;
    this.num %= imagenesr.length;
    this.anr = anchosRojas[this.num]; 
    this.opCambio = 0;
  }
  opacidadAlta (){
    this.op = max(this.op - 20, 0);
  }
  
  opacidadBaja(){
    this.op = min(this.op + 20, 255);
  }
 /* teclapresionada() {
    if (keyIsDown(UP_ARROW)) {
      this.num++;
      this.anr+=10;
      this.num %= imagenesr.length;
      this.anr = anchosRojas[this.num]; 
      this.opCambio = 0;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.num--;
      this.anr-=10;
      this.opCambio = 0;
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
  }*/
}
