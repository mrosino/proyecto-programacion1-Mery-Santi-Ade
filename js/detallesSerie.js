window.addEventListener('load', function(){
    let queryString= window.location.search 
    let datoURL = new URLSearchParams(queryString);
    let id = datoURL.get('id');  
    
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=es-ES`)
    .then(function(info){
      return info.json()
    })
    .then (function(respuesta){
      let title= respuesta.name
      let overview= respuesta.overview
      let puntuacion=respuesta.vote_average
      let lanzamiento= respuesta.first_air_date
      let temporadas= respuesta.number_of_seasons
      let poster= "https://image.tmdb.org/t/p/w500" + respuesta.poster_path
      
      
      document.querySelector(".descripcion").innerHTML= overview
      document.querySelector(".titulo").innerHTML="<h2>"+title+"</h2>"
      document.querySelector(".poster").innerHTML="<img src='"+poster+"'</img>"
      document.querySelector(".puntu").innerHTML=`Puntuación ${puntuacion} estrellas`
      document.querySelector(".lanza").innerHTML=lanzamiento
      document.querySelector(".temporadas").innerHTML=temporadas

      document.querySelector(".favo").addEventListener('click', function(e){
        e.preventDefault()
        let favoritos = localStorage.getItem('favoritos')
        if( favoritos == null ){
          favoritos = []
        } else {
          favoritos = JSON.parse(favoritos)
        }
        favoritos.push(respuesta)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
      })



    })

    fetch (`https://api.themoviedb.org/3/tv/${id}/videos?api_key=35c3a4bec2a3c008c9fa7737b86aadc1`)
    .then(function(videos){
        return videos.json()

    })
    .then(function (respuesta1){
        let key= respuesta1.results[0].key
        let video= "https://www.youtube.com/watch?v=" + key
        document.querySelector(".video").innerHTML="<iframe width='966' height='596' src='https://www.youtube.com/embed/"+key+"'></iframe>"
    })

    fetch (`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-ES&page=1`)
    .then (function(recommendations){
      return recommendations.json()

    })
    .then(function(respuesta2){
      let recommendations = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(respuesta2.results[i])
            let id= respuesta2.results[i].id
            let url= "https://image.tmdb.org/t/p/w500" +respuesta2.results[i].poster_path
            recommendations = recommendations+ '<a class="sliderItem" class="infoReco" href="detallesSeries.html?id='+id+'"><img src="'+url+'" alt=""></a> '
        }
        document.querySelector(".seriesReco").innerHTML= recommendations
        console.log(recommendations)
        $(".seriesReco").slick({
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 1

        })

    })

    })

    