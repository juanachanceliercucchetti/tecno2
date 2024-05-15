function setup() {
  createCanvas(500,600 );
 this.imagenes = new Imagenes (100,470,100,50,50,300,60,400);
}

function draw() {
  background(220);
  this.imagenes.dibujar ();
}
