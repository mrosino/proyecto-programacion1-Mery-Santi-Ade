window.addEventListener('load',function(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=en-US&page=1')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(informacion){
        console.log(informacion.results)
        var populares = informacion.results
        for (i = 0 ; i < 1 ; i++){
            var url=informacion.results[i].poster_path
            var titulo =  populares[i].original_title
            var sinopsis = populares[i].overview
            var lanzamiento = populares[i].release_date
            var puntuacion = populares[i].vote_average 
            var mP = document.querySelector('.mejoresPuntuadas')
            
        }
        mP.innerHTML += `Las peliculas mas puntuadas son ${titulo}`
    })
   











})
