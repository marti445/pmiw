class Reloj {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.t = 40;
    this.v = 2;
    this.capturado = false;
  }

  dibujar() {
    if (!this.capturado) {
      push();
      imageMode(CENTER);
      if (imgReloj) {
        image(imgReloj, this.x, this.y, this.t, this.t);
      } else {
        fill(255, 215, 0);
        stroke(100);
        ellipse(this.x, this.y, this.t, this.t);
      }
      pop();
    }
  }

  mover() {
    if (!this.capturado) {
      this.y += this.v;
      if (this.y > height + 30) {
        this.y = random(-600, -200);
        this.x = random(100, width - 100);
      }
    }
  }

  verificarRecoleccion(jugador) {
    if (!this.capturado) {
      let d = dist(this.x, this.y, jugador.x, jugador.y);
      if (d < (this.t / 2 + jugador.t / 2 - 10)) {
        this.y = random(-700, -300); 
        this.x = random(100, width - 100);
        return true;
      }
    }
    return false;
  }

  reiniciar(posY) {
    this.capturado = false;
    this.y = posY;
    this.x = random(100, width - 100);
  }
}
