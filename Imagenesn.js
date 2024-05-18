class Imagenesn {
  constructor(xn, yn, ann, aln, num) {
    this.xn = xn;
    this.yn = yn;
    this.ann = ann;
    this.aln = aln;
    this.num = num;
    this.numAnterior = num;
    this.op = 255;
    this.opCamibio = 1;
  }

  dibujar() {
    this.opCamibio = lerp(this.opCamibio,1,0.1);

    tint(255, this.op*this.opCamibio);
    image(imagenesn[this.num], this.xn, this.yn, this.ann, this.aln);
    tint(255, this.op*(1-this.opCamibio));
    image(imagenesn[this.numAnterior], this.xn, this.yn, this.ann, this.aln);
    noTint();
  }

  teclapresionada() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.numAnterior = this.num;
      this.num++;
      this.num %= imagenesn.length;
      this.opCamibio = 0;
    }
    
    if (keyIsDown(LEFT_ARROW)) {
      this.numAnterior = this.num;
      this.num--;
      if (this.num < 0) {
        this.num = imagenesn.length - 1;
      }
      this.opCamibio = 0;
    }
    
    if (keyIsDown(68)) {
      this.op = min(this.op + 20, 255);
    }
    
    if (keyIsDown(65)) {
      this.op = max(this.op - 20, 0);
    }
  }
}
