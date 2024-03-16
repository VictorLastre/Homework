function convertirNumero(num) {
  if (num % 2 === 0) {
      return num.toString(2);
  } else {
      return num.toString(16);
  }
}

// Ejemplo de uso
let numero = 15;
let resultado = convertirNumero(numero);
console.log(resultado);
