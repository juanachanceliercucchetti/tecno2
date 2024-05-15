class Imagenesn {
  constructor(xn, yn, ann, aln, num) {
    this.xn = xn;
    this.yn = yn;
    this.ann = ann;
    this.aln = aln;
    this.num = num;
    this.load();
  }

  load() {
    this.imagenesn = [];
    for (let i = 0; i < 12; i++) {
      this.imagenesn[i] = loadImage("data/img" + i + ".png");
    }
  }

  dibujar() {
    image(this.imagenesn[this.num], this.xn, this.yn, this.ann, this.aln);
  }

  teclapresionada (keyCode) {
    if (keyIsDown (RIGHT_ARROW)) {
      this.num ++;
      this.num %= this.imagenesn.length; 
    }

  }

}