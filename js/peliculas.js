window.addEventListener('load',function(){

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=1')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoPelis){
        console.log(infoPelis.results)

        let peliculas = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoPelis.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoPelis.results[i].poster_path
            let id= infoPelis.results[i].id
            peliculas = peliculas+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes1"><img src="'+url+'" alt=""></div></a> '
        }
        document.querySelector(".peliculas").innerHTML= peliculas
        console.log(peliculas)
        $(".peliculas").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1
      
          })
          
    })

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=2')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoPelis1){
        console.log(infoPelis1.results)

        let peliculas = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoPelis1.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoPelis1.results[i].poster_path
            let id= infoPelis1.results[i].id
            peliculas = peliculas+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes1"><img src="'+url+'" alt=""></div></a> '
        }
        document.querySelector(".peliculas1").innerHTML= peliculas
        console.log(peliculas)
        $(".peliculas1").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1
      
          })
          
    })

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=3')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoPelis2){
        console.log(infoPelis2.results)

        let peliculas = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoPelis2.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoPelis2.results[i].poster_path
            let id= infoPelis2.results[i].id
            peliculas = peliculas+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes1"><img src="'+url+'" alt=""></div></a> '
        }
        document.querySelector(".peliculas2").innerHTML= peliculas
        console.log(peliculas)
        $(".peliculas2").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1
      
          })
         
    })

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=4')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoPelis3){
        console.log(infoPelis3.results)

        let peliculas = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoPelis3.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoPelis3.results[i].poster_path
            let id= infoPelis3.results[i].id
            peliculas = peliculas+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes1"><img src="'+url+'" alt=""></div></a> '
        }
        document.querySelector(".peliculas3").innerHTML= peliculas
        console.log(peliculas)
        $(".peliculas3").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1
      
          })
          
    })

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=5')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoPelis4){
        console.log(infoPelis4.results)

        let peliculas = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoPelis4.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoPelis4.results[i].poster_path
            let id= infoPelis4.results[i].id
            peliculas = peliculas+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes1"><img src="'+url+'" alt=""></div></a> '
        }
        document.querySelector(".peliculas4").innerHTML= peliculas
        console.log(peliculas)
        $(".peliculas4").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1
      
          })
         
    })

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=6')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoPelis5){
        console.log(infoPelis5.results)

        let peliculas = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoPelis5.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoPelis5.results[i].poster_path
            let id= infoPelis5.results[i].id
            peliculas = peliculas+ '<a href="detallesPelis.html?id='+id+'"> <div class="imagenes1"><img src="'+url+'" alt=""></div></a> '
        }
        document.querySelector(".peliculas5").innerHTML= peliculas
        console.log(peliculas)
        $(".peliculas5").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1
      
          })
         
    })

})