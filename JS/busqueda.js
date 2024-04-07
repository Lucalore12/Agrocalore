function queso(coleccion,respuesta){
    let busqueda=[];
    coleccion.forEach(elemento=> {
        const posicion = elemento.nombre.search(respuesta);
        if (posicion !== -1)
        {
            var objeto= new Object()
            objeto.nombre=elemento.nombre;
            objeto.ruta=elemento.ruta;
            objeto.contenido=elemento.contenido;
            objeto.descripcion=elemento.descripcion
            busqueda.push(objeto);
        }
    })
    return busqueda;
};

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    const resultados= [
        {
            nombre: 'Aceite para Transmisiones Manuales Krs 1L',
            ruta: 'pruebas-del-html/queso.html',
            contenido: 'MEDIA/productos/aceite-krs.jpg',
            descripcion: 'Es un lubricante mineral formulado con aceites básicos y aditivos de excelente calidad. Le confiere propiedades antidesgaste, antiherrumbrantes, antioxidantes y de extrema presión. '
          },
          {
            nombre: 'LMV 4 TIEMPOS ACEITE MINERAL MOTO-PRO',
            ruta: 'pruebas-del-html/camion.html',
            contenido: 'MEDIA/productos/lmv-lubricante.jpg',
            descripcion: 'Aceite para motocicletas 4 tiempos LMV MOTO PRO SAE 20W50 MINERAL, lubricante premiun a nivel mundial.'
          },
          {
            nombre: 'ACEITE TRANSMISION LMV SINCRONICA 80W90',
            ruta: 'pruebas-del-html/camion.html',
            contenido: 'MEDIA/productos/aceite-lmv.jpg',
            descripcion: 'Son lubricantes de bases minerales altamente refinadas y con aditivos de extrema presión (EP) para uso en transmisiones con engranajes sometidos a altos torques y velocidades variables'
          },
          {
            nombre: 'Aceite lubricante para motores 20W50 Mineral',
            ruta: 'pruebas-del-html/camion.html',
            contenido: 'MEDIA/productos/paila-lmv.webp',
            descripcion: 'Aceite especialmente formulado para automóviles con más de 100 000 kilómetros'
          }
    ];
    const busqueda= queso(resultados,query)
    searchResults.innerHTML = busqueda.map(elemento=> `<div class="resultado">
    <img src="${elemento.contenido}" alt="">
    <div class="caracteres">
        <h2>${elemento.nombre}</h2>
        <p>${elemento.descripcion}</p>
    </div>
</div>`).join(``)
});

