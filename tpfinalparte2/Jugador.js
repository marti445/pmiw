class Jugador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.t = 65;
    this.v = 6;
    this.vy = 0;
    this.gravedad = 0.6;
    this.fuerzaSalto = -12;
    this.sueloY = height - 80;
  }

  actualizarFisicas() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.v;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.v;
    }
    this.x = constrain(this.x, 100, width - 100);

    this.y += this.vy;
    this.vy += this.gravedad;

    if (this.y >= this.sueloY) {
      this.y = this.sueloY;
      this.vy = 0;
    }
  }

  saltar() {
    if (this.y >= this.sueloY) {
      this.vy = this.fuerzaSalto;
    }
  }

  dibujar() {
    push();
    imageMode(CENTER);
    
    let imgActual = imgSprite1;
    if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {
      if (Math.floor(frameCount / 10) % 2 === 0) {
        imgActual = imgSprite2;
      }
    }
    
    if (imgActual) {
      image(imgActual, this.x, this.y, this.t, this.t);
    } else {
      fill(0, 200, 255);
      rect(this.x, this.y, this.t, this.t);
    }
    pop();
  }
}
