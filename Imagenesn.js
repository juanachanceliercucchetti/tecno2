class Imagenesn {
  constructor(xn, yn, ann, aln, num) {
    this.xn = xn;
    this.yn = yn;
    this.ann = ann;
    this.aln = aln;
    this.num = num;
    this.op = 255;
    this.load();
  }

  load() {
    this.imagenesn = [];
    for (let i = 0; i < 12; i++) {
      this.imagenesn[i] = loadImage("data/img" + i + ".png");
    }
  }

  dibujar() {
    tint(255, this.op);
    image(this.imagenesn[this.num], this.xn, this.yn, this.ann, this.aln);
    noTint();
  }

  teclapresionada() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.num++;
      this.num %= this.imagenesn.length;
    }
    
    if (keyIsDown(LEFT_ARROW)) {
      this.num--;
      if (this.num < 0) {
        this.num = 0;
      }
    }
    
    if (keyIsDown(68)) {
      this.op = min(this.op + 20, 255);
    }
    
    if (keyIsDown(65)) {
      this.op = max(this.op - 20, 0);
    }
  }
}
