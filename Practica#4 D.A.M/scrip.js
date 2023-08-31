const bitacora =[
    {
        id: 1,
        titulo:'Registro',
        detalles: {
            hora: '10:00am',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual:{
                    id: 1,
                    nombres: 'Juan',
                    apellidos:'Hernandez',
                }
            },
        },
        descripcion: 'se ingresaron nuevos datos a la tabla personas'
    },
    {
        id: 2,
        titulo:'Modificacion',
        detalles: {
            hora: '11:00am',
            fecha: '12 de agosto de 2023',
            campos: {
                anterior: [
                    {
                    id: 1,
                    nombres: 'Juan',
                    apellidos:'Hernandez',
                }
                ],
            actual:{
                id: 1,
                    nombres: 'Juan Carlos',
                    apellidos:'Hernandez',
                }
            },
        },
        descripcion: 'se modificaron nuevos datos a la tabla personas'
    },
]

/* 1 FUNCION*/

/*for (const {titulo, detalles: {hora, fecha}, descripcion} of bitacora){
    console.log(titulo);
    console.log(fecha);
    console.log(hora);
    console.log(descripcion);
}*/

/* 2 FUNCION*/

/*function desempacar([{
    titulo,
    descripcion,
    detalles: {
        hora,fecha
        }
    }])
{
    return`
    ${titulo}
    ${descripcion}
    ${fecha}
    ${hora}`
}

console.log(desempacar(bitacora))*/

/* 3 FUNCION*/

/*let[, {detalles:{campos: {anterior , actual}}
}
] = bitacora

console.log(anterior)
console.log(actual)*/