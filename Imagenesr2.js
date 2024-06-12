class Imagenesr2 {
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
        image(imagenesr2[this.num], this.xn, this.yn, this.ann, this.aln);
        tint(255, this.op*(1-this.opCambio));
        image(imagenesr2[this.numAnterior], this.xn, this.yn, this.ann, this.aln);
        noTint();
    }
  
    mover() {
        this.numAnterior = this.num;
        this.num++;
        this.num %= imagenesr2.length;
        this.opCambio = 0;
      }
    opacidadAlta() {
        this.op = 255;
    }
    
    opacidadBaja() {
        this.op = max(this.op - 5, 0);
    }
  }