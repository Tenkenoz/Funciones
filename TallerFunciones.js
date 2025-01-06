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

calcularPromedio = (a,b,c) => (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")? console.log("Los parametros del promedio deben ser numeros") : (a+b+c)/3;
determinarMayor = (a,b) => (typeof a !== "number" || typeof b !== "number")? console.log("Los parametros del valor mayor deben ser numeros") :(a>b) ? a : b;
esPar = x => (typeof x !== "number")? console.log("Los parametros del se par, deben ser numeros") :(x%2==0) ? true : false;
(function(){
    console.log("Promedio: "+calcularPromedio(2,3,4));
    console.log("El valor mayor es:"+determinarMayor(2,3));
    console.log("Es par: "+esPar(2));
})()