window.addEventListener('load',function(){



  //populares pelis
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=en-US&page=1')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(informacion){
        console.log(informacion.results)

        let pelisPopulares = ""
        for (i = 0 ; i < 7 ; i++){
            console.log(informacion.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +informacion.results[i].poster_path
            let id= informacion.results[i].id
            pelisPopulares = pelisPopulares+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes"><img src="'+url+'" alt=""></div></a> '
        }
        document.querySelector(".popularesPelis").innerHTML= pelisPopulares
        console.log(pelisPopulares)
    })
   // populares series
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=3b4640a2c0443153138c528fe0e85a7a&language=en-US&page=1')
    .then(function(respuesta1){
      return respuesta1.json()
      
    })
    .then(function(informacion1){
        console.log(informacion1.results)

        let seriesPopulares = ""
        for (i = 0 ; i < 7 ; i++){
            console.log(informacion1.results[i])
            let id= informacion1.results[i].id
            let url= "https://image.tmdb.org/t/p/w500" +informacion1.results[i].poster_path
            seriesPopulares = seriesPopulares+ '<a href="detallesSeries.html?id='+id+'"> <div class="imagenes"><img src="'+url+'" alt=""></div></a> '
        }
        document.querySelector(".popularesSeries").innerHTML= seriesPopulares
        console.log(seriesPopulares)



    })

//Mejores puntuadas pelis
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3b4640a2c0443153138c528fe0e85a7a&language=en-US&page=2')
.then(function(respuesta2){
  return respuesta2.json()
  
})
.then(function(informacion2){
    console.log(informacion2.results)
 
    let pelisMejoresPuntuadas = ""
    for (i = 0 ; i < 7 ; i++){
        console.log(informacion2.results[i])
        let id= informacion2.results[i].id
        let url= "https://image.tmdb.org/t/p/w500" +informacion2.results[i].poster_path
        pelisMejoresPuntuadas = pelisMejoresPuntuadas+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes"><img src="'+ url+'" alt=""></div></a> '
                                                        
    } 

    document.querySelector(".mejoresPuntuadasPelis").innerHTML= pelisMejoresPuntuadas
    console.log(pelisMejoresPuntuadas)
})

//mejores puntuadas Series


fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=3b4640a2c0443153138c528fe0e85a7a&language=en-US&page=2')
.then(function(respuesta3){
  return respuesta3.json()
  
})
.then(function(informacion3){
    console.log(informacion3.results)
 
    let seriesMejoresPuntuadas = ""
    for (i = 0 ; i < 7 ; i++){
        console.log(informacion3.results[i])
        let id= informacion3.results[i].id
        let url= "https://image.tmdb.org/t/p/w500" +informacion3.results[i].poster_path
        seriesMejoresPuntuadas = seriesMejoresPuntuadas+ '<a href="detallesSeries.html?id='+id+'"> <div class="imagenes"><img src="'+url+'" alt=""></div></a> '
      
    }
    document.querySelector(".mejoresPuntuadasSeries").innerHTML= seriesMejoresPuntuadas
    console.log(seriesMejoresPuntuadas)
})

//añadidas recientemente Pelis
fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3b4640a2c0443153138c528fe0e85a7a&language=en-US&page=3')
.then(function(respuesta4){
  return respuesta4.json()
  
})
.then(function(informacion4){
    console.log(informacion4.results)
    
    let pelisAñadidasRecientemente = ""
    for (i = 0 ; i < 7 ; i++){
        console.log(informacion4.results[i])
        let id= informacion4.results[i].id
        let url= "https://image.tmdb.org/t/p/w500" +informacion4.results[i].poster_path
        pelisAñadidasRecientemente = pelisAñadidasRecientemente+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes"><img src="'+url+'" alt=""></div></a> '
    }
    document.querySelector(".añadidasRecientementePelis").innerHTML= pelisAñadidasRecientemente
    console.log(pelisAñadidasRecientemente)
})

//añadidas recientemente Series
fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=3b4640a2c0443153138c528fe0e85a7a&language=en-US&page=1')
.then(function(respuesta5){
  return respuesta5.json()
  
})
.then(function(informacion5){
    console.log(informacion5.results)
    
    let seriesAñadidasRecientemente = ""
    for (i = 0 ; i < 7 ; i++){
        console.log(informacion5.results[i])
        let id= informacion5.results[i].id
        let url= "https://image.tmdb.org/t/p/w500" +informacion5.results[i].poster_path
        seriesAñadidasRecientemente = seriesAñadidasRecientemente+ '<a href="detallesSeries.html?id='+id+'"> <div class="imagenes"><img src="'+url+'" alt=""></div></a> '
      
    }
    document.querySelector(".añadidasRecientementeSeries").innerHTML= seriesAñadidasRecientemente
    console.log(seriesAñadidasRecientemente)
})


})
