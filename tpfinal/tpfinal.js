let pantallas = [];
let estado = 0; 

function preload() {
  pantallas[0] = loadImage("data/Titulo.jpg"); 
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
}

function setup() {
  createCanvas(800, 450); 
  textAlign(CENTER, CENTER);
}

function draw() {
  image(pantallas[estado], 0, 0, 800, 450);

  if (estado === 0) {
    dibujarBoton("Comenzar Aventura", 300, 320, 200, 40);
    
    // Créditos
    fill(255);
    textSize(16);
    text("Créditos: Martina Hernandez y Sofía Astrada", 400, 420);
  } 
  else if (estado === 1) {
    dibujarCajaTexto("Te perdiste en una extraña cueva tenuemente iluminada. Gradualmente empezas a distinguir dos tuneles.\n¿Que túnel decidís explorar?");
    dibujarBoton("El de la izquierda que va hacia arriba", 30, 380, 220, 40);
    dibujarBoton("Decidis salir de la cueva", 290, 380, 220, 40);
    dibujarBoton("El de la derecha que va hacia abajo", 550, 380, 220, 40);
  }
  else if (estado === 2) {
    dibujarCajaTexto("Podes ir por el primer túnel que encuentres, o buscas un túnel mas lejano y amplio. ¿Que tunel elegis?");
    dibujarBoton("Primer tunel que encontras", 150, 380, 200, 40);
    dibujarBoton("Tunel mas lejano y amplio", 450, 380, 200, 40);
  }
  else if (estado === 3) {
    dibujarCajaTexto("Das la vuelta hacia la salida, pero descubrís que está totalmente cubierta de gruesos bloques.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (estado === 4) {
    dibujarCajaTexto("Volvés a adentrarte buscando otra salida y te encontrás con dos pasadizos. Hay un pasadizo a la izquierda por el que caminarás por horas, y otro a la derecha por el que debés subir a oscuras.\n¿que pasadizo tomas?");
    dibujarBoton("Izquierda", 150, 380, 200, 40);
    dibujarBoton("Derecha", 450, 380, 200, 40);
  }
  else if (estado === 5) {
    dibujarCajaTexto("Boston, año 1718: resbalas, perdes el conocimiento y despertas junto a un chico llamado Nick, pescando. Nick siente cierta curiosidad.\n¿Le decis que venis del futuro?");
    dibujarBoton("No", 150, 380, 200, 40);
    dibujarBoton("Si", 450, 380, 200, 40);
  }
  else if (estado === 6) {
    dibujarCajaTexto("Resbalas por arena hasta una gruta y buceas hasta salir en un paraíso tropical.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (estado === 7) {
    dibujarCajaTexto("El tunel se encoge. Salis a un mundo oscuro y helado bajo un sol rojo y moribundo.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (estado === 8) {
    dibujarCajaTexto("Epoca 2022: conoces a una chica llamada Luisa, con quien recorres el pacifico mundo del futuro.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (estado === 9) {
    dibujarCajaTexto("Trepas una escalera de cuerda y llegas a un barco a punto de chocar con un iceberg.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (estado === 10) {
    dibujarCajaTexto("No te cree y se va. Llegas al pueblo y un guardia te arresta por tus ropas raras.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (estado === 11) {
    dibujarCajaTexto("Cree que es broma pero te acoge. Creces y te volves un exitoso imrpesor en Filadelfia.");
    dibujarBoton("Continuar...", 300, 380, 200, 40);
  }
  else if (estado === 12) {
    dibujarCajaTexto("Te adaptas a la vida silvestre. Envejeces y moris apaciblemente en una playa tranquila, lejos de la historia y el tiempo.");
    dibujarBoton("Volver al inicio", 300, 380, 200, 40);
  }
  else if (estado === 13) {
    dibujarCajaTexto("Tu valentía te permite descubrir maravillas increíbles, embarcándote en una aventura eterna que desafía las leyes de la historia y el universo.");
    dibujarBoton("Volver al inicio", 300, 380, 200, 40);
  }
  else if (estado === 14) {
    dibujarCajaTexto("Quedas atrapado para siempre en tus pesadillas sin esperanzas de regresar a tu hogar.");
    dibujarBoton("Volver al inicio", 300, 380, 200, 40);
  }
}

function mousePressed() {
  if (estado === 0) {
    if (verificarClic(300, 320, 200, 40)) estado = 1;
  } 
  else if (estado === 1) {
    if (verificarClic(30, 380, 220, 40)) estado = 2;   // Va al Desierto
    else if (verificarClic(290, 380, 220, 40)) estado = 3; // Va al Hielo
    else if (verificarClic(550, 380, 220, 40)) estado = 5; // Va a Boston
  }
  else if (estado === 2) { 
    if (verificarClic(150, 380, 200, 40)) estado = 7;  // Sol moribundo 
    else if (verificarClic(450, 380, 200, 40)) estado = 6; // Gruta 
  }
  else if (estado === 3) { 
    if (verificarClic(300, 380, 200, 40)) estado = 4; 
  }
  else if (estado === 4) { 
    if (verificarClic(150, 380, 200, 40)) estado = 8;  // Época 2022
    else if (verificarClic(450, 380, 200, 40)) estado = 9; // Titanic
  }
  else if (estado === 5) { 
    if (verificarClic(150, 380, 200, 40)) estado = 10; // Arresto
    else if (verificarClic(450, 380, 200, 40)) estado = 11; // Impresor
  }
  else if (estado === 6 || estado === 8) {
    if (verificarClic(300, 380, 200, 40)) estado = 13; // Final heroico
  }
  else if (estado === 11) {
    if (verificarClic(300, 380, 200, 40)) estado = 12; // Final clásico
  }
  else if (estado === 7 || estado === 9 || estado === 10) {
    if (verificarClic(300, 380, 200, 40)) estado = 14; // Final trágico
  }
  else if (estado >= 12 && estado <= 14) {
    if (verificarClic(300, 380, 200, 40)) estado = 0; // Reinicio
  }
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
