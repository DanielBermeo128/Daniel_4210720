const fecha = new Date();
let  nombre = prompt("¿Cual es tu nombre?");
let edad = parseInt(prompt("¿Cual es tu edad?"));
console.log("Tu nombre es: "+ nombre);
console.log("Naciste en: " + (fecha.getFullYear() - edad));