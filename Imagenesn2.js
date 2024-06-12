class Imagenesn2 {
    
  constructor(xn, yn, ann, aln, num) {
    this.xn = xn;
    this.yn = yn;
    this.ann = ann;
    this.aln = aln;
    this.num = num;
    this.numAnterior = num;
    this.op = 0;
    this.opCambio = 1;
  }

  dibujar() {
    this.opCambio = lerp(this.opCambio,1,0.1);
    tint(255, this.op*this.opCambio);
    image(imagenesn2[this.num], this.xn, this.yn, this.ann, this.aln);
    tint(255, this.op*(1-this.opCambio));
    image(imagenesn2[this.numAnterior], this.xn, this.yn, this.ann, this.aln);
    noTint();
  }
  mover(){
    this.numAnterior = this.num;
      this.num++;
      this.num %= imagenesn.length;
      this.opCambio = 0;
  }

  opacidadAlta (){
    this.op = 255; // la opacidad a 255 cuando hay sonido
  }
  
  opacidadBaja(){
    this.op = max(this.op - 5, 0); // Reduce la opacidad  cuando no hay sonido
  }

}