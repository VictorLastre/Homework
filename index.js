function convertirNumero(num) {
  if (num % 2 === 0) {
      return num.toString(2);
  } else {
      return num.toString(16);
  }
}

let numero = 15;
let resultado = convertirNumero(numero);
console.log(resultado);


function obtenerInformacionPersonal() {
  return {
      nombre: "Victor Lastre",
      edad: "38",
      nacionalidad: "Argentino"
  };
}


let informacion = obtenerInformacionPersonal();
console.log(informacion);
