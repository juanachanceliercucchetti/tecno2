class Imagenesr {
  constructor(xr, yr, anr, alr) {
    this.xr = xr;
    this.yr = yr;
    this.anr = anr;
    this.alr = alr;
    this.num = 0;
    this.op = 0;
    this.opCambio = 1;

  }

  dibujar() {
    this.opCambio = lerp(this.opCambio, 1, 0.1); // Uso de lerp para suavizar el cambio de opacidad
    tint(255, this.op * this.opCambio);
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
    this.op = 255; // la opacidad a 255 cuando hay sonido
  }
  
  opacidadBaja(){
    this.op = max(this.op - 5, 0); // Reduce la opacidad  cuando no hay sonido
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
