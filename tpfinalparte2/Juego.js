class Juego {
  constructor() {
    this.estado = "INICIO";
    this.distanciaRecorrida = 0;
    this.metaDistancia = 900;
    this.vidas = 3;
    this.tiempoJuego = 15;
    
    this.jugador = new Jugador(width / 2, height - 80);
    this.listaRocas = [];
    this.listaRelojes = [];
    
    this.btnJugar = new Boton(width / 2, height / 2 - 20, 180, 40, "JUGAR");
    this.btnInstrucciones = new Boton(width / 2, height / 2 + 30, 180, 40, "INSTRUCCIONES");
    this.btnCreditos = new Boton(width / 2, height / 2 + 80, 180, 40, "CRÉDITOS");
    this.btnVolver = new Boton(width / 2, height - 60, 160, 35, "VOLVER");
    this.btnMenu = new Boton(width / 2, height / 2 + 50, 200, 40, "MENÚ PRINCIPAL");
    
    this.listaRocas.push(new Roca(random(140, width - 140), 120));
    this.listaRocas.push(new Roca(random(140, width - 140), -50));
    this.listaRocas.push(new Roca(random(140, width - 140), -220));
    this.listaRocas.push(new Roca(random(140, width - 140), -380));

    this.listaRelojes.push(new Reloj(random(150, width - 150), -150));
    this.listaRelojes.push(new Reloj(random(150, width - 150), -550));
  }

  actualizar() {
    if (this.estado === "JUEGO") {
      if (frameCount % 45 === 0 && this.tiempoJuego > 0) {
        this.tiempoJuego--;
      }

      this.distanciaRecorrida += 0.8;
      this.jugador.actualizarFisicas();

      let velocidadRocas = (this.distanciaRecorrida > 600) ? 3.8 : 2.5;

      for (let roca of this.listaRocas) {
        roca.v = velocidadRocas;
        roca.mover();
        
        if (roca.verificarColision(this.jugador)) {
          this.vidas--;
          roca.y = random(-250, -50);
          roca.x = random(140, width - 140);
          
          if (this.vidas <= 0) {
            this.estado = "PERDISTE";
          }
        }
      }

      for (let reloj of this.listaRelojes) {
        reloj.v = (this.distanciaRecorrida > 600) ? 1.5 : 2; 
        reloj.mover();
        
        if (reloj.verificarRecoleccion(this.jugador)) {
          this.tiempoJuego += 3;
        }
      }

      if (this.tiempoJuego <= 0) {
        this.estado = "PERDISTE";
      }

      if (this.distanciaRecorrida >= this.metaDistancia) {
        this.estado = "GANASTE";
      }
    }
  }

  dibujar() {
    push();
    imageMode(CENTER);
    
    if (this.estado === "GANASTE") {
      if (imgFinal) {
        image(imgFinal, width / 2, height / 2, width, height);
      } else {
        background(0, 100, 50);
      }
    } else if (this.estado === "INICIO" || this.estado === "INSTRUCCIONES" || this.estado === "CREDITOS") {
      if (imgInicio) {
        image(imgInicio, width / 2, height / 2, width, height);
      } else {
        background(30, 20, 15);
      }
    } else if (this.estado === "JUEGO") {
      if (this.distanciaRecorrida < 300) {
        image(imgFondo, width / 2, height / 2, width, height);
      } else if (this.distanciaRecorrida < 650) {
        image(imgAvance1, width / 2, height / 2, width, height);
      } else {
        image(imgAvance2, width / 2, height / 2, width, height);
      }
    } else {
      if (imgFondo) {
        image(imgFondo, width / 2, height / 2, width, height);
      } else {
        background(30, 20, 15);
      }
    }
    pop();

    if (this.estado === "INICIO") {
      this.pantallaInicio();
    } else if (this.estado === "INSTRUCCIONES") {
      this.pantallaInstrucciones();
    } else if (this.estado === "CREDITOS") {
      this.pantallaCreditos();
    } else if (this.estado === "JUEGO") {
      this.jugarPantalla();
    } else if (this.estado === "GANASTE") {
      this.pantallaGanaste();
    } else if (this.estado === "PERDISTE") {
      this.pantallaPerdiste();
    }
  }

  pantallaInicio() {
    push();
    if (fuenteTitulo) {
      textFont(fuenteTitulo);
    }
    
    fill(0, 220);
    textSize(38);
    textAlign(CENTER);
    text("LA CUEVA DEL TIEMPO", width / 2 + 3, height / 2 - 87);
    
    fill(255, 243, 215);
    textSize(38);
    text("LA CUEVA DEL TIEMPO", width / 2, height / 2 - 90);
    pop();

    this.btnJugar.dibujar();
    this.btnInstrucciones.dibujar();
    this.btnCreditos.dibujar();
  }

  pantallaInstrucciones() {
    push();
    if (fuenteTitulo) {
      textFont(fuenteTitulo);
    }
    fill(0, 200);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("INSTRUCCIONES", width / 2 + 2, height / 2 - 82);
    
    fill(255, 243, 215);
    textSize(30);
    text("INSTRUCCIONES", width / 2, height / 2 - 85);
    
    textFont("sans-serif");
    textSize(14);
    textAlign(CENTER, TOP);
    fill(245, 245, 245);
    
    let textoInstrucciones = "• Movete con flechas y saltá con la barra espaciadora.\n\n• Atrapá los relojes para sumar segundos.\n\n• Llegá a la salida antes de que se agote el tiempo.";
    text(textoInstrucciones, width / 2, height / 2 - 35);
    pop();

    this.btnVolver.dibujar();
  }

  pantallaCreditos() {
    push();
    if (fuenteTitulo) {
      textFont(fuenteTitulo);
    }
    fill(0, 200);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("CRÉDITOS", width / 2 + 2, height / 2 - 82);
    
    fill(255, 243, 215);
    textSize(30);
    text("CRÉDITOS", width / 2, height / 2 - 85);
    
    textFont("sans-serif");
    textSize(14);
    textAlign(CENTER, TOP);
    fill(245, 245, 245);
    
    let textoCreditos = "Desarrollado por: Martina Hernandez\n\nBasado en La Cueva del Tiempo";
    text(textoCreditos, width / 2, height / 2 - 25);
    pop();

    this.btnVolver.dibujar();
  }

  jugarPantalla() {
    for (let roca of this.listaRocas) {
      roca.dibujar();
    }
    for (let reloj of this.listaRelojes) {
      reloj.dibujar();
    }
    this.jugador.dibujar();

    push();
    imageMode(CENTER);
    for (let i = 0; i < this.vidas; i++) {
      if (imgVida) {
        image(imgVida, 30 + i * 35, 25, 28, 28);
      }
    }

    if (imgReloj) {
      image(imgReloj, 140, 25, 26, 26);
    }

    fill(255);
    textSize(16);
    textAlign(LEFT, CENTER);
    text(this.tiempoJuego + "s", 160, 25);
    pop();
  }

  pantallaGanaste() {
    push();
    if (fuenteTitulo) {
      textFont(fuenteTitulo);
    }
    fill(0, 220);
    textSize(36);
    textAlign(CENTER);
    text("LOGRASTE SALIR", width / 2 + 3, height / 2 - 57);
    
    fill(255, 243, 215);
    textSize(36);
    text("LOGRASTE SALIR", width / 2, height / 2 - 60);
    
    textFont("sans-serif");
    textSize(16);
    fill(240, 240, 240);
    textAlign(CENTER);
    text("¡Escapaste con éxito de la cueva del tiempo!", width / 2, height / 2 - 15);
    pop();

    this.btnMenu.dibujar();
  }

  pantallaPerdiste() {
    push();
    if (fuenteTitulo) {
      textFont(fuenteTitulo);
    }
    fill(0, 220);
    textSize(36);
    textAlign(CENTER);
    text("¡PERDISTE!", width / 2 + 3, height / 2 - 57);
    
    fill(255, 243, 215);
    textSize(36);
    text("¡PERDISTE!", width / 2, height / 2 - 60);
    
    textFont("sans-serif");
    textSize(16);
    fill(240, 240, 240);
    textAlign(CENTER);
    text("Se acabó el tiempo o te quedaste sin vidas.", width / 2, height / 2 - 15);
    pop();

    this.btnMenu.dibujar();
  }

  manejarTeclas() {
    if (this.estado === "JUEGO") {
      if (key === ' ') {
        this.jugador.saltar();
      }
    }
  }

  manejarMouse() {
    if (this.estado === "INICIO") {
      if (this.btnJugar.mouseSobre()) {
        this.reiniciar();
        this.estado = "JUEGO";
      } else if (this.btnInstrucciones.mouseSobre()) {
        this.estado = "INSTRUCCIONES";
      } else if (this.btnCreditos.mouseSobre()) {
        this.estado = "CREDITOS";
      }
    } else if (this.estado === "INSTRUCCIONES" || this.estado === "CREDITOS") {
      if (this.btnVolver.mouseSobre()) {
        this.estado = "INICIO";
      }
    } else if (this.estado === "GANASTE" || this.estado === "PERDISTE") {
      if (this.btnMenu.mouseSobre()) {
        this.reiniciar();
        this.estado = "INICIO";
        reiniciarMusica(); 
      }
    }
  }

  reiniciar() {
    this.distanciaRecorrida = 0;
    this.vidas = 3;
    this.tiempoJuego = 15;
    this.jugador.x = width / 2;
    this.jugador.y = height - 80;
    this.jugador.vy = 0;
    
    let yInicioRoca = 120;
    for (let roca of this.listaRocas) {
      roca.reiniciar(yInicioRoca);
      yInicioRoca -= 150;
    }

    let yInicioReloj = -150;
    for (let reloj of this.listaRelojes) {
      reloj.reiniciar(yInicioReloj);
      yInicioReloj -= 400;
    }
  }
}
