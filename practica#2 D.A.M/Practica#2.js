const libros = ["libro1","libro2"]

const btnAgregar = document.querySelector("#btnAgregar")

const libro = document.querySelector("#libro")

const ListaLibro = document.querySelector("#misLibros")

const btnBuscar = document.querySelector("#btnBuscar")

btnAgregar.addEventListener("click",() =>{
    if(libros.value ==='') return

    if(libros.includes(libro.value) === true) return

    libros.push(libro.value)
    libro.value =''
    mostrarLibros()
})

btnBuscar.addEventListener("click",()  =>{
    if(libros.value ==='') return
    mostrarLibros(libro.value)
})

function mostrarLibros(search = null){
    ListaLibro.innerHTML=null

    const result = (search !=='')? libros.filter(nombre =>{
        return search === nombre
    }) : ListaLibro

    libros.forEach((item, index)=>{
        ListaLibro.innerHTML +=
        `<li>${item} - <button type="button" 
        onclick="prestarLibro(${index})">Prestar</button></li>`
    })
 }

    function prestarLibro(index){
        libros.splice(index,1)
        console.log(libros)
        mostrarLibros()
        alert("Se presto un Libro")
    }

    mostrarLibros()

