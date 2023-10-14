//METODO FOREACH//

let paises = [
    { nombre: 'España', capital: 'Madrid', poblacion: 48000000 },
    { nombre: 'Francia', capital: 'París', poblacion: 70000000 },
    { nombre: 'Alemania', capital: 'Berlín', poblacion: 40000000 },
];

paises.forEach(function(country) {
    console.log(`El país ${country.nombre} tiene como capital ${country.capital} y población es de ${country.poblacion}`);
})