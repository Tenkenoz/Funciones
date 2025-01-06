/*
Crea una funcion declarada llamada calcularPromedio que reciba tres numeros
como parametro y retorne su promedio

Designa una funcion expresion llamada determinarMayor que reciba dos numeros como paramtro y retorne cual de llos es mayor

Crea una funcion flecha llamada esPar que reciba un numero y retorne true si el numero es par y false si no lo es.

Escriba una funcion anonima autoejecutable que:
    LLame a las funciones anteriores (calcularPromedio y determinarMayor y esPar)
    Use valores de ehjemplo y muestre los resultados en la consola

Reto: Agrega validaciones para asegurarte de que los parametros son numeros antes de realizar la operacion
Si algun parametro no es un numero, lanzar un error con un mensaje descriptivo    
*/
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

function determinarMayor(a, b) {
  return (a > b) ? a : b;
}

esPar = x => (x % 2 == 0) ? true : false;

(function(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    console.log("Los parámetros deben ser números");
  } else {
    console.log("Promedio: " + calcularPromedio(a, b, c));
    console.log("El valor mayor es: " + determinarMayor(a, b));
    console.log("Es par: " + esPar(a));
  }
})(4, 5, 8);