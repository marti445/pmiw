// https://youtu.be/A0H6aWHrPe8
let pantallas = [];
let pantalla = 0; 
let botonaventuraImg; 

// Animación
let personajeY = 450; 
let personajeSprite1, personajeSprite2;
let botonY = 500; 

// Sonido
let sonidoFondo;

function preload() {
  pantallas[0] = loadImage("data/portada.jpg"); 
  pantallas[1] = loadImage("data/decision_tunel_1.jpeg"); 
  pantallas[2] = loadImage("data/decision_tunel_2.jpeg"); 
  pantallas[3] = loadImage("data/atrapado_hielo.jpeg");
  pantallas[4] = loadImage("data/decision_tunel_3.jpeg"); 
  pantallas[5] = loadImage("data/boston.jpeg"); 
  pantallas[6] = loadImage("data/gruta_submarina.jpeg");
  pantallas[7] = loadImage("data/sol_moribundo.jpeg");
  pantallas[8] = loadImage("data/epoca_2022.jpeg"); 
  pantallas[9] = loadImage("data/el_titanic.jpeg");
  pantallas[10] = loadImage("data/arresto.jpg");
  pantallas[11] = loadImage("data/el_impresor.jpg"); 
  pantallas[12] = loadImage("data/final_clasico.jpeg"); 
  pantallas[13] = loadImage("data/final_heroico.jpeg"); 
  pantallas[14] = loadImage("data/final_tragico.jpeg"); 
  
  botonaventuraImg = loadImage("data/boton_aventura.png"); 
  
  personajeSprite1 = loadImage("data/sprite_1.png"); 
  personajeSprite2 = loadImage("data/sprite_2.png");  
  
  // Carga de música 
  sonidoFondo = loadSound("data/musica_cueva.mp3");
}

function setup() {
  createCanvas(800, 450); 
  textAlign(CENTER, CENTER); 
}

function draw() {
  image(pantallas[pantalla], 0, 0, 800, 450);

  if (pantalla === 0) {
    
    // Animacion del personaje
    let imgActual;
    
    if (personajeY > 220) {
      personajeY -= 1.5; 
      
      if (frameCount % 30 < 15) {
        imgActual = personajeSprite1;
      } else {
        imgActual = personajeSprite2;
      }
    } else {
      imgActual = personajeSprite1;
    }

    let escala = map(personajeY, 450, 220, 2.2, 0.85); 
    let anchoPersonaje = 70 * escala;
    let altoPersonaje = 140 * escala;

    image(imgActual, 400 - anchoPersonaje / 2, personajeY, anchoPersonaje, altoPersonaje);
    
    // Animacion del boton
    if (personajeY <= 220) {
      if (botonY > 350) {
        botonY -= 3; 
      }
      dibujarBotonImagen(botonaventuraImg, "COMENZAR AVENTURA", 290, botonY, 220, 70);
    }
    
    // Creditos
    textAlign(LEFT, CENTER); 
    fill(255);
    textSize(14);
    text("Créditos: Martina Hernandez", 10, 415); 
    text("Autor de la obra: Edward Packard-Paul Granger", 10, 435); 
    textAlign(CENTER, CENTER); 
    
  } 
  else if (pantalla === 1) {
    dibujarCajaTexto("Te perdiste en una extraña cueva tenuemente iluminada. Gradualmente empezas a distinguir dos tuneles.\n¿Que túnel decidís explorar?");
    dibujarBoton("El de la izquierda que va hacia arriba", 30, 380, 220, 40);
    dibujarBoton("Decidis salir de la cueva", 290, 380, 220, 40);
    dibujarBoton("El de la derecha que va hacia abajo", 550, 380, 220, 40);
  }
  else if (pantalla === 2) {
    dibujarCajaTexto("Podes ir por el primer túnel que encuentres, o buscas un túnel mas lejano y amplio. ¿Que tunel elegis?");
    dibujarBoton("Primer tunel que encontras", 150, 380, 200, 40);
    dibujarBoton("Tunel mas lejano y amplio", 450, 380, 200, 40);
  }
  else if (pantalla === 3) {
    dibujarCajaTexto("Das la vuelta hacia la salida, pero descubrís que está totalmente cubierta de gruesos bloques.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (pantalla === 4) {
    dibujarCajaTexto("Volvés a adentrarte buscando otra salida y te encontrás con dos pasadizos. Hay un pasadizo a la izquierda por el que caminarás por horas, y otro a la derecha por el que debés subir a oscuras.\n¿que pasadizo tomas?");
    dibujarBoton("Izquierda", 150, 380, 200, 40);
    dibujarBoton("Derecha", 450, 380, 200, 40);
  }
  else if (pantalla === 5) {
    dibujarCajaTexto("Boston, año 1718: resbalas, perdes el conocimiento y despertas junto a un chico llamado Nick, pescando. Nick siente cierta curiosidad.\n¿Le decis que venis del futuro?");
    dibujarBoton("No", 150, 380, 200, 40);
    dibujarBoton("Si", 450, 380, 200, 40);
  }
  else if (pantalla === 6) {
    dibujarCajaTexto("Resbalas por arena hasta una gruta y buceas hasta salir en un paraíso tropical.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (pantalla === 7) {
    dibujarCajaTexto("El tunel se encoge. Salis a un mundo oscuro y helado bajo un sol rojo y moribundo.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (pantalla === 8) {
    dibujarCajaTexto("Epoca 2022: conoces a una chica llamada Luisa, con quien recorres el pacifico mundo del futuro.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (pantalla === 9) {
    dibujarCajaTexto("Trepas una escalera de cuerda y llegas a un barco a punto de chocar con un iceberg.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (pantalla === 10) {
    dibujarCajaTexto("No te cree y se va. Llegas al pueblo y un guardia te arresta por tus ropas raras.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (pantalla === 11) {
    dibujarCajaTexto("Cree que es broma pero te acoge. Creces y te volves un exitoso impresor en Filadelfia.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (pantalla === 12) {
    dibujarCajaTexto("Te adaptas a la vida silvestre. Envejeces y moris apaciblemente en una playa tranquila, lejos de la historia y el tiempo.");
    dibujarBoton("Volver al inicio", 300, 380, 200, 40);
  }
  else if (pantalla === 13) {
    dibujarCajaTexto("Tu valentía te permite descubrir maravillas increíbles, embarcándote en una aventura eterna que desafía las leyes de la historia y el universo.");
    dibujarBoton("Volver al inicio", 300, 380, 200, 40);
  }
  else if (pantalla === 14) {
    dibujarCajaTexto("Quedas atrapado para siempre en tus pesadillas sin esperanzas de regresar a tu hogar.");
    dibujarBoton("Volver al inicio", 300, 380, 200, 40);
  }
}

function mousePressed() {
  if (!sonidoFondo.isPlaying()) {
    sonidoFondo.loop(); 
  }

  if (pantalla === 0) {
    if (botonY <= 350 && verificarClic(290, 350, 220, 70)) {
      pantalla = 1;
    }
  } 
  else if (pantalla === 1) {
    if (verificarClic(30, 380, 220, 40)) pantalla = 2;   
    else if (verificarClic(290, 380, 220, 40)) pantalla = 3; 
    else if (verificarClic(550, 380, 220, 40)) pantalla = 5; 
  }
  else if (pantalla === 2) { 
    if (verificarClic(150, 380, 200, 40)) pantalla = 7;  
    else if (verificarClic(450, 380, 200, 40)) pantalla = 6; 
  }
  else if (pantalla === 3) { 
    if (verificarClic(300, 380, 200, 40)) pantalla = 4; 
  }
  else if (pantalla === 4) { 
    if (verificarClic(150, 380, 200, 40)) pantalla = 8;  
    else if (verificarClic(450, 380, 200, 40)) pantalla = 9; 
  }
  else if (pantalla === 5) { 
    if (verificarClic(150, 380, 200, 40)) pantalla = 10; 
    else if (verificarClic(450, 380, 200, 40)) pantalla = 11; 
  }
  else if (pantalla === 6 || pantalla === 8) {
    if (verificarClic(300, 380, 200, 40)) pantalla = 13; 
  }
  else if (pantalla === 11) {
    if (verificarClic(300, 380, 200, 40)) pantalla = 12; 
  }
  else if (pantalla === 7 || pantalla === 9 || pantalla === 10) {
    if (verificarClic(300, 380, 200, 40)) pantalla = 14; 
  }
  else if (pantalla >= 12 && pantalla <= 14) {
    if (verificarClic(300, 380, 200, 40)) {
      pantalla = 0; 
      personajeY = 450; 
      botonY = 500;
    }
  }
}

function dibujarBotonImagen(img, texto, x, y, ancho, alto) {
  image(img, x, y, ancho, alto);
  
  fill(45, 38, 30); 
  textSize(14); 
  textStyle(BOLD); 
  text(texto, x + ancho / 2, y + alto / 2 - 2); 
  textStyle(NORMAL); 
}

function dibujarCajaTexto(textoNarrativo) {
  fill(0, 0, 0, 200); 
  rect(50, 20, 700, 100, 15); 
  fill(255); 
  textSize(14); 
  text(textoNarrativo, 70, 30, 660, 80); 
}

function dibujarBoton(texto, x, y, ancho, alto) {
  fill(0, 0, 0, 180); 
  rect(x, y, ancho, alto, 10); 
  fill(255); 
  textSize(13); 
  text(texto, x + ancho / 2, y + alto / 2);
}

function verificarClic(x, y, ancho, alto) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    return true; 
  } else {
    return false;
  }
}
