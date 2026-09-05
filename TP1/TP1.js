// Variables globales
let fondo;
let imagenCartel;
let framesCaminar = [];

// Variables para los botones
let botonNew, botonLoad, botonCoop, botonExit;

// Variables del fondo
let fondoX = 0;
let fondoAncho = 1400; 

// Variables del personaje
let posX = 100; 
let posY = 450; 
let indiceFrame = 0;
let tiempoUltimoFrame = 0;

// Variables del control de tiempo
let cartelY = -200; 
let tiempoInicioBotones = 0; 
const CAMINANDO = 0;
const CARTEL_CAYENDO = 1;
const BOTONES_APARECIENDO = 2;
let estadoActual = CAMINANDO;

// Variables del alien en la letra E
let framesAlien = [];
let indiceFrameAlien = 0;
let tiempoUltimoFrameAlien = 0;
let alienIniciado = false;
let alienTerminado = false;

// Variable para el reinicio automático
let tiempoFinSecuencia = 0; 

let alienX = 460; 
let alienY = 44;
let alienAncho = 42;
let alienAlto = 78;

function preload() {
  fondo = loadImage("data/fondo.png"); 
  imagenCartel = loadImage("data/cartel.png"); 
  framesCaminar = construirArregloFrames("data/sprite-10-", 13, 16);
  
  botonNew = loadImage("data/boton_new.png");
  botonLoad = loadImage("data/boton_load.png");
  botonCoop = loadImage("data/boton_coop.png");
  botonExit = loadImage("data/boton_exit.png");

  framesAlien = construirArregloFrames("data/sprite-7-", 1, 9);
}

function setup() {
  createCanvas(800, 600);
  noSmooth(); 
}

function draw() {
  image(fondo, fondoX, 0, fondoAncho, height);

  if (estadoActual === CAMINANDO) {
    
    fondoX -= 2; 
    posX += 0.1; 
    
    dibujarAnimacion(framesCaminar, posX, posY, 40, 72, 150); 
    
    if (fondoX <= -450) {
      fondoX = -450; 
      estadoActual = CARTEL_CAYENDO;
    }

  } else if (estadoActual === CARTEL_CAYENDO) {
    
    image(framesCaminar[0], posX, posY, 40, 72);
    
    let destinoCartel = 120; 
    if (cartelY < destinoCartel) {
      cartelY += 5; 
    } else {
      estadoActual = BOTONES_APARECIENDO;
      tiempoInicioBotones = millis(); 
    }
    
    imageMode(CENTER);
    image(imagenCartel, width / 2, cartelY, 450, 200); 
    imageMode(CORNER); 

  } else if (estadoActual === BOTONES_APARECIENDO) {
    
    image(framesCaminar[0], posX, posY, 40, 72);
    
    imageMode(CENTER);
    image(imagenCartel, width / 2, 120, 450, 200);
    
    let tiempoPasado = millis() - tiempoInicioBotones;
    let posYBotones = 265; 
    
    if (tiempoPasado > 300) {
      image(botonNew, width / 2 - 165, posYBotones, 100, 75);
    }
    if (tiempoPasado > 600) {
      image(botonLoad, width / 2 - 55, posYBotones, 100, 75);
    }
    if (tiempoPasado > 900) {
      image(botonCoop, width / 2 + 55, posYBotones, 100, 75);
    }
    if (tiempoPasado > 1200) {
      image(botonExit, width / 2 + 165, posYBotones, 100, 75);
    }

    imageMode(CORNER); 

    // Animación del Alien 
    if (tiempoPasado > 1600) {
      
      if (!alienTerminado) {
        
        if (!alienIniciado) {
          alienIniciado = true;
          tiempoUltimoFrameAlien = millis();
        }

        image(framesAlien[indiceFrameAlien], alienX, alienY, alienAncho, alienAlto);

        if (millis() - tiempoUltimoFrameAlien > 250) {
          indiceFrameAlien++;
          tiempoUltimoFrameAlien = millis();
        }

        if (indiceFrameAlien >= framesAlien.length) {
          alienTerminado = true;
          tiempoFinSecuencia = millis(); 
        }

      } else {
        // El alien ya terminó, se reinicia
        if (millis() - tiempoFinSecuencia > 3000) {
          reiniciarSistema();
        }
      }
    }
  }
}

function construirArregloFrames(prefijo, inicio, fin) {
  let arregloTemp = [];
  for (let i = inicio; i <= fin; i++) {
    let ruta = prefijo + i + ".png"; 
    arregloTemp.push(loadImage(ruta));
  }
  return arregloTemp;
}

function dibujarAnimacion(arreglo, x, y, ancho, alto, velocidad) {
  if (millis() - tiempoUltimoFrame > velocidad) {
    indiceFrame++;
    tiempoUltimoFrame = millis();
  }

  if (indiceFrame >= arreglo.length) {
    indiceFrame = 0;
  }

  image(arreglo[indiceFrame], x, y, ancho, alto);
}

function reiniciarSistema() {
  estadoActual = CAMINANDO;
  fondoX = 0;     
  posX = 100;     
  cartelY = -200; 
  indiceFrame = 0;
  tiempoInicioBotones = 0;
  
  indiceFrameAlien = 0;
  alienIniciado = false;
  alienTerminado = false;
  tiempoFinSecuencia = 0; 
}
