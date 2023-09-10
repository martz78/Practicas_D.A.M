//Crea un programa que lea el año de nacimiento de una persona. Mostrar una
//alerta con edad de la persona.

let edad = prompt("Por Favor, Ingresa tu Edad");

let year = new Date().getFullYear()
document.writeln("Tu Año de Nacimiento es:" +(year-edad));