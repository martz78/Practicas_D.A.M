//Crear un programa que genere un número random, el usuario deberá ingresar un
//numero por el teclado tratando de adivinar el número secreto, el programa
//finalizara hasta que el usuario acierte el número secreto (es decir el número
//random generado)

var randon = Math.floor(Math.random() * 5);
document.writeln(randon);

let numero 

do{
    numero = prompt("Por Favor, Ingresa un Numero")
    if(numero!=randon){
        document.writeln("Sigue")
    }else{
        document.writeln("Número Random Generado")
    break;
    }
}while(numero!=randon)