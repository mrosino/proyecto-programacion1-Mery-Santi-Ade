//volar esta pagina y hacerla dropdown(html)
window.addEventListener('load', function(){
    var detalleGen = document.querySelector('.listadoGeneros')
    var decripcion = document.querySelector('.descripcionGenero')
   


        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES')
            .then(function(respuesta){
                return respuesta.json()

            })
                .then(function(listadoDeGeneros){
                console.log(listadoDeGeneros.genres[0].name);
                listadoDeGeneros.genres.forEach(genero => {
                detalleGen.innerHTML += ` <a href="detalleGenero.html?id=${genero.id}&nombre=${genero.name}"><div class="tP2">${genero.name}</div></a>`
                
                
               

                 })
        })

})


     /*
    else if (adventure) {
        descripcion.innerHTML=`Estas películas y series cuentan historias interesantes y excitantes en contextos
        normalmente exóticos, y con un contenido similar al de las películas de acción. Suelen ocurrir en el
        desierto, la selva, montaña o en el mar. Los personajes pueden estar en búsqueda de cumplir una misión.`
    }
    else if (comedy) {
        descripcion.innerHTML=`Las comedias son películas y series divertidas, construidas para que el espectador pase
        un rato divertido y no deje de reír. Suele ocurrir en multitud de contextos, pero, a diferencia de las
        películas normales, las comedias exageran la situación para que el público se ría a carcajadas.`
        
    }
    else if (drama) {
        descripcion.innerHTML=`Son películas y series serias, con personajes y situaciones muy realistas, parecidas a la
        vida cotidiana, que incluyen situaciones tensas y dramáticas, y que pueden acabar mal o no.`
    }

    else if (drama) {
        descripcion.innerHTML=`hola`
    }*/