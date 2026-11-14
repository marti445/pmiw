class Roca {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.t = 45;
    this.v = 2.5;
  }

  dibujar() {
    push();
    imageMode(CENTER);
    if (imgRoca) {
      image(imgRoca, this.x, this.y, this.t, this.t);
    } else {
      fill(100);
      stroke(50);
      ellipse(this.x, this.y, this.t, this.t);
    }
    pop();
  }

  mover() {
    this.y += this.v;
    
    if (this.y > height - 60) {
      this.y = random(-250, -50);
      this.x = random(100, width - 100);
    }
  }

  verificarColision(jugador) {
    let d = dist(this.x, this.y, jugador.x, jugador.y);
    if (d < (this.t / 2 + jugador.t / 2 - 15)) {
      return true;
    }
    return false;
  }

  reiniciar(posY) {
    this.y = posY;
    this.x = random(100, width - 100);
  }
}
