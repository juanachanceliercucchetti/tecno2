class Imagenesn{
constructor (xn,yn,ann,aln){
    this.load ();
    this.dibujar ();
    this.xn= xn; 
    this.yn= yn;
    this.ann= ann;
    this.aln= aln;
    this.num = 0; 
    this.teclaPresionada(keyCode);
}
 load(){
    this.imagenesn = [];
    for (let i = 0; i < 12; i++) {
      this.imagenesn[i] = loadImage ("data/img" + i + ".png");
    }
 }
 dibujar() {
  image(this.imagenesn[2], this.xn, this.yn, this.ann, this.aln);
}

teclaPresionada(keyCode) {
  if (keyCode === RIGHT_ARROW) {
    this.num = (this.num + 1) % this.imagenesn.length; // Cambia al siguiente índice de imagen
  }
}
}