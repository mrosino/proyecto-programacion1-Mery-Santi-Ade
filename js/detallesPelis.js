window.addEventListener('load', function(){
    let queryString= window.location.search 
    let datoURL = new URLSearchParams(queryString);
    let id = datoURL.get('id');  
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=es-ES`)
    .then(function(info){
      return info.json()
    })
    .then (function(respuesta){
      let title= respuesta.title
      let overview= respuesta.overview
      let poster= "https://image.tmdb.org/t/p/w500" + respuesta.poster_path
      let puntuacion=respuesta.vote_average
      let lanzamiento= respuesta.release_date
      var atp =respuesta.adult
      var botonLista = JSON.stringify('respuesta')
      document.querySelector(".descripcion").innerHTML= overview
      document.querySelector(".titulo").innerHTML="<h2>"+title+"</h2>"
      document.querySelector(".poster").innerHTML="<img src='"+poster+"'</img>"
      document.querySelector(".puntu").innerHTML=`Puntuación ${puntuacion} estrellas`
      document.querySelector(".lanza").innerHTML=lanzamiento
      /*
      //agregar a mi lista
      
      document.querySelector(".añadirLista").innerHTML= `<a id="${JSON.stringify(botonLista)}" href="#" class=""btn-black botonLista> Agregar a mi lista </a>`
      */

      console.log(overview)
      
      
      
     
   
     if (atp == false){
      document.querySelector(".atp").innerHTML=`La pelicula posee contenido apto para todo público`
        
      }
      else{        
        document.querySelector(".atp").innerHTML=`La pelicula posee contenido no-apto para todo público`
      }

    })
   
    fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-ES`)
    .then(function(videos){
        return videos.json()

    })
    .then(function (respuesta1){
        let key= respuesta1.results[0].key
        let video= "https://www.youtube.com/watch?v=" + key
        document.querySelector(".video").innerHTML="<iframe width='966' height='596' src='https://www.youtube.com/embed/"+key+"'></iframe>"
    })


    fetch (`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-Es&page=1`)
    .then (function(recommendations){
      return recommendations.json()

    })
    .then(function(respuesta2){
      let recommendations = ""
        for (i = 0 ; i < 14 ; i++){
            
            let id= respuesta2.results[i].id
            let url= "https://image.tmdb.org/t/p/w500" +respuesta2.results[i].poster_path
            recommendations = recommendations+ '<a class="sliderItem" class="infoReco" href="detallesPelis.html?id='+id+'"><img src="'+url+'" alt=""></a> '
        }
        document.querySelector(".seriesReco").innerHTML= recommendations
        $(".seriesReco").slick({
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 1

        })
       

    })

    //.then(function(datellesDePeliculas){
    //console.log(detallesDePeliculas.//genres[0].name);
    //detallesDePeliculas.//genres.forEach(detalle => {
     //   informacion.innerHTML += `//<h2> <a href="detallev2.html?id=${genero.id}">${genero.name}</a></h2>`
    
    
    })


   /* Detalle de Movie
        Imagen de Portada
        Nombre
        Promedio de votos 
         HARD:  Reviews de la película
        Detalle de Serie
        Imagen de la serie 
        Nombre de la serie
        Nombre del género (hipervínculo al detalle del genero)
        Fecha de salida
        Detalle Genero
        Nombre del género 
        10 películas o series que pertenezcan a ese género (hipervínculo al detalle de la pelicula o serie) 
         */