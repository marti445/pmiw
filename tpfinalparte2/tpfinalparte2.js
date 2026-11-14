//https://youtu.be/UCfPCIHQGwY
let juego;
let imgInicio, imgFondo, imgAvance1, imgAvance2, imgFinal, imgCreditos;
let imgSprite1, imgSprite2, imgRoca, imgReloj, imgBoton, imgVida;
let fuenteTitulo;
let musicaFondo; 

function preload() {
  imgInicio = loadImage("data/inicio.png");
  imgFondo = loadImage("data/fondo.png");
  imgAvance1 = loadImage("data/avance.png");
  imgAvance2 = loadImage("data/avance_1.png");
  imgFinal = loadImage("data/final.png");
  imgCreditos = loadImage("data/Creditos.jpg");
  
  imgSprite1 = loadImage("data/sprite_1.png");
  imgSprite2 = loadImage("data/sprite_2.png");
  imgRoca = loadImage("data/roca.png");
  imgReloj = loadImage("data/reloj.png");
  imgBoton = loadImage("data/boton_aventura.png");
  imgVida = loadImage("data/vida.png");
  
  fuenteTitulo = loadFont("data/fuente.ttf");
}

function setup() {
  createCanvas(800, 450);
  juego = new Juego();
  
  musicaFondo = new Audio('data/sonido.mp3');
  musicaFondo.loop = true; 
  musicaFondo.volume = 0.4; 
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function keyPressed() {
  juego.manejarTeclas();
}

function mousePressed() {
 
  if (musicaFondo.paused) {
    musicaFondo.play().catch(function(error) {
      console.log("Esperando interacción para reproducir audio.");
    });
  }
  juego.manejarMouse();
}

function reiniciarMusica() {
  if (musicaFondo) {
    musicaFondo.currentTime = 0;
    musicaFondo.play();
  }
}
