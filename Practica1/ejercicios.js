let nombre = "Armando";
const edad = 25;

nombre = "Ana Maria";

const saludo = `Hola,  ${nombre} .Tienes  ${edad}  años.`;
console.log(saludo);

const cuadrado = (numero) => numero * numero;

console.log(cuadrado(3))
console.log(cuadrado(5))
console.log(cuadrado(10))

const miSaludo = (nombre,edad) => `Hola, me llamo ${nombre} y tengo ${edad} años`;
console.log(miSaludo("Joaquin",22))