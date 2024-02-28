const readline = require('readline');

function juegoAdivinanza() {
  const numeroCorrecto = Math.floor(Math.random() * 10) + 1;

  console.log("¡Bienvenido al juego de adivinanzas!");
  console.log("Estoy pensando en un número entre 1 y 10...");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function verificarAdivinanza(intento) {
    if (intento === numeroCorrecto) {
      console.log("¡Felicidades! ¡Adivinaste el número correcto!");
      rl.close();
    } else {
      console.log("Intenta de nuevo. ¡El número no es correcto!");
      rl.question("Ingresa tu adivinanza (entre 1 y 10): ", (nuevaAdivinanza) => {
        verificarAdivinanza(parseInt(nuevaAdivinanza));
      });
    }
  }

  rl.question("Ingresa tu adivinanza (entre 1 y 10): ", (intento) => {
    verificarAdivinanza(parseInt(intento));
  });
}

juegoAdivinanza();
