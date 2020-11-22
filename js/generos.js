//volar esta pagina y hacerla dropdown(html)
window.addEventListener('load', function(){
    var detalleGen = document.querySelector('.listadoGeneros')
    var decripcion = document.querySelector('.descripcionGenero')
    var dropdown = document.querySelector('.dropdown-content')


        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES')
            .then(function(respuesta){
                return respuesta.json()

            })
                .then(function(listadoDeGeneros){
                //console.log(listadoDeGeneros.genres[0].name);
                listadoDeGeneros.genres.forEach(genero => {
                dropdown.innerHTML += ` <a class="gen" href="detalleGenero.html?id=${genero.id}&nombre=${genero.name}"><div class="tP2">${genero.name}</div></a>`
                
                
               

                 })
        })

})

