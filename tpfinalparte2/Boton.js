class Boton {
  constructor(x, y, ancho, alto, etiqueta) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.etiqueta = etiqueta;
  }

  dibujar() {
    push();
    imageMode(CENTER);
    rectMode(CENTER);
    
    if (imgBoton) {
      image(imgBoton, this.x, this.y, this.ancho, this.alto);
    } else {
      fill(50, 40, 30, 200);
      stroke(200, 180, 140);
      strokeWeight(2);
      rect(this.x, this.y, this.ancho, this.alto, 8);
    }
    
    textFont("sans-serif");

    fill(255, 255, 255, 100);
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
    text(this.etiqueta, this.x + 1, this.y + 1);
    
    fill(35, 30, 25);
    textSize(15);
    text(this.etiqueta, this.x, this.y);
    
    pop();
  }

  mouseSobre() {
    return (
      mouseX > this.x - this.ancho / 2 &&
      mouseX < this.x + this.ancho / 2 &&
      mouseY > this.y - this.alto / 2 &&
      mouseY < this.y + this.alto / 2
    );
  }
}
