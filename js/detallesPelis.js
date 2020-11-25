window.addEventListener('load', function(){
    let queryString= window.location.search 
    let datoURL = new URLSearchParams(queryString);
    let id = datoURL.get('id');  
    
    // Detalle pelicula
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
      respuesta.tipo="peli"
      document.querySelector(".descripcion").innerHTML= overview
      document.querySelector(".titulo").innerHTML="<h2>"+title+"</h2>"
      document.querySelector(".poster").innerHTML="<img src='"+poster+"'</img>"
      document.querySelector(".puntu").innerHTML=`Puntuación ${puntuacion} estrellas`
      document.querySelector(".lanza").innerHTML=lanzamiento
   
     if (atp == false){
      document.querySelector(".atp").innerHTML=`La pelicula posee contenido apto para todo público`
        
      }
      else{        
        document.querySelector(".atp").innerHTML=`La pelicula posee contenido no-apto para todo público`
      }
  // boton favorito

      botFavo = document.querySelector(".favo")
      botFavo.addEventListener('click', function(e){
        e.preventDefault()
        let favoritos = localStorage.getItem('favoritos')
        if( favoritos == null ){
          favoritos = []
        } else {
          favoritos = JSON.parse(favoritos)
        }
        var agregarAFavorito=true
        for (let i=0; i<favoritos.length; i++){ 
         if (favoritos[i].id==respuesta.id){
          agregarAFavorito=false
          alert('Ya has agregado a favoritos')
          botFavo.innerHTML= `Agregado a favoritos`
         }
        }
        if (agregarAFavorito==true){
          favoritos.push(respuesta)
          localStorage.setItem('favoritos', JSON.stringify(favoritos))
          botFavo.innerHTML= `Agregado a favoritos`
        }
      })




})

    // Video
    fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-ES`)
    .then(function(videos){
        return videos.json()

    })
    .then(function (respuesta1){
        let key= respuesta1.results[0].key
        let video= "https://www.youtube.com/watch?v=" + key
        document.querySelector(".video").innerHTML=`<iframe width='700' height='450' src='https://www.youtube.com/embed/${key}'></iframe>`
    })

    // RECOMENDADAS 
    fetch (`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-Es&page=1`)
    .then (function(recommendations){
      return recommendations.json()

    })
    .then(function(respuesta2){
      let recommendations = ""
        for (i = 0 ; i < 14 ; i++){
            
            let id= respuesta2.results[i].id
            let url= "https://image.tmdb.org/t/p/w500" +respuesta2.results[i].poster_path
            recommendations = `${recommendations}<a class="sliderItem" class="infoReco" href="detallesPelis.html?id=${id}"><div class="imagenesD" <img src="${url}" alt=""></div></a> `
        }
        document.querySelector(".seriesReco").innerHTML= recommendations
        $(".seriesReco").slick({
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 1

        })
       

    })
  })