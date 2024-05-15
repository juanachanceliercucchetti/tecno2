class Imagenesn{
constructor (xr,yr,xn,yn,anr,ann,alr,aln){
    this.load ();
    this.dibujar ();
    this.xr= xr;
    this.yr= yr; 
    this.xn= xn; 
    this.yn= yn;
    this.anr= anr;
    this.ann= ann;
    this.alr= alr;
    this.aln= aln;
    this.num;
}
 load(){
    this.imagenes = [];
    for (let i = 0; i < 29; i++) {
      this.imagenes[i] = loadImage ("data/img" + i + ".png");
    }
 }
 dibujar(){
    image (this.imagenes[this.num],this.xn,this.yn,this.ann,this.aln);
    image (this.imagenes[13],this.xr,this.yr,this.anr,this.alr);
 }
 teclaPresionada (keyCode) {
   if (keyIsDown (RIGHT_ARROW)) {
     this.num ++;
   }
}
}