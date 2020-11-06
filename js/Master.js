window.addEventListener('load',function(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=en-US&page=1')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(informacion){
        console.log(informacion.results)
        let populares = informacion.results
        let contenidoMejoresPuntuadas = ""
        for (i = 0 ; i < 20 ; i++){
            console.log(informacion.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +informacion.results[i].poster_path 
            contenidoMejoresPuntuadas = contenidoMejoresPuntuadas+ '<div class="imagenes1"><img src="'+ url+'" alt=""></div>'
        }
        document.querySelector(".mejoresPuntuadas").innerHTML= contenidoMejoresPuntuadas
        console.log(contenidoMejoresPuntuadas)
    })
   
//declarar variables, llamar apis. hacer las funciones 
//separar el eventListener load por funciones, asi van llamandose de a una.









})
            /*let titulo =  populares[i].original_title
            let sinopsis = populares[i].overview
            let lanzamiento = populares[i].release_date
            let puntuacion = populares[i].vote_average */