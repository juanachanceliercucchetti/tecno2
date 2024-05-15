function setup() {
  createCanvas(500,600 );
 this.Imagenesn = new Imagenesn (100,50,300,400);
 this.Imagenesr = new Imagenesr (100,470,50,60);
}

function draw() {
  background(220);
  this.Imagenesn.dibujar ();
  this.Imagenesr.dibujar ();
}
