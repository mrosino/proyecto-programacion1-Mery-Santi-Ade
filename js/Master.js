window.addEventListener('load',function(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=en-US&page=1')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(informacion){
        console.log(informacion.results)
        var populares = informacion.results
        var contenidoMejoresPuntuadas = ""
        for (i = 0 ; i < 20 ; i++){
            console.log(informacion.results[i])
            var url= "https://image.tmdb.org/t/p/w500" +informacion.results[i].poster_path 
            contenidoMejoresPuntuadas = contenidoMejoresPuntuadas+ '<div class="imagenes1"><img src="'+ url+'" alt=""></div>'
        }
        document.querySelector(".mejoresPuntuadas").innerHTML= contenidoMejoresPuntuadas
        console.log(contenidoMejoresPuntuadas)
    })
   











})
            /*var titulo =  populares[i].original_title
            var sinopsis = populares[i].overview
            var lanzamiento = populares[i].release_date
            var puntuacion = populares[i].vote_average */