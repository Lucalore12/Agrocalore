let imagenes = [
    {
        "url": "MEDIA/carrusel/lmv-16-9.png",
        "nombre": "LMV",
        "descripcion": "Distribuidora Oficial de la Marca LMV Nro 1 del Pais"

    },
    {
        "url": "MEDIA/carrusel/KRS-16-9.png",
        "nombre": "KRS",
        "descripcion": "Distribuidora Oficial de la Marca KRS Nro 1 del Pais"

    },
    {
        "url": "MEDIA/carrusel/logo-16-9.png",
        "nombre": "Agrocalore",
        "descripcion": "Empresa dedicada a la Distribucion de Productos Escenciales Para el Sector Agropecuario"

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}