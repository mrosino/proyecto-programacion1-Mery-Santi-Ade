window.addEventListener('load', function () {
  let queryString = window.location.search
  let datoURL = new URLSearchParams(queryString);
  var id = datoURL.get('id');
// fetch para traer detalles de la serie 
  fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=es-ES`)
    .then(function (info) {
      return info.json()
    })
    .then(function (respuesta) {
      let title = respuesta.name
      let overview = respuesta.overview
      let puntuacion = respuesta.vote_average
      let lanzamiento = respuesta.first_air_date
      var atp = respuesta.adult
      let temporadas = respuesta.number_of_seasons
      let poster = "https://image.tmdb.org/t/p/w500" + respuesta.poster_path
      respuesta.tipo = "serie"


      document.querySelector(".descripcion").innerHTML = overview
      document.querySelector(".titulo").innerHTML = "<h2>" + title + "</h2>"
      document.querySelector(".poster").innerHTML = "<img src='" + poster + "'</img>"
      document.querySelector(".puntu").innerHTML = `Puntuación ${puntuacion} estrellas`
      document.querySelector(".lanza").innerHTML = lanzamiento
      document.querySelector(".temporadas").innerHTML = `Temporadas: ${temporadas}`


      if (atp == false) {
        document.querySelector(".atp").innerHTML = `La serie posee contenido apto para todo público`

      } else {
        document.querySelector(".atp").innerHTML = `La serie posee contenido no apto para todo público`
      }

      botFavo = document.querySelector(".favo")
      botFavo.addEventListener('click', function (e) {
        e.preventDefault()
        let favoritos = localStorage.getItem('favoritos')
        if (favoritos == null) {
          favoritos = []
        } else {
          favoritos = JSON.parse(favoritos)
        }
        var agregarAFavorito = true
        for (let i = 0; i < favoritos.length; i++) {
          if (favoritos[i].id == respuesta.id) {
            agregarAFavorito = false
            alert('Ya has agregado a favoritos')
            botFavo.innerHTML = `Agregado a favoritos`
          }
        }
        if (agregarAFavorito == true) {
          favoritos.push(respuesta)
          localStorage.setItem('favoritos', JSON.stringify(favoritos))
          botFavo.innerHTML = `Agregado a favoritos`
        }
      })



    })

//video

  fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=35c3a4bec2a3c008c9fa7737b86aadc1`)
    .then(function (videos) {
      return videos.json()

    })
    .then(function (respuesta1) {
      let key = respuesta1.results[0].key
      let video = "https://www.youtube.com/watch?v=" + key

      document.querySelector(".video").innerHTML = "<div class='videoQ'><iframe width='700' height='450' src='https://www.youtube.com/embed/" + key + "' frameborder='0' allowfullscreen></iframe></div>"
    })

// Recomendadas

  fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-ES&page=1`)
    .then(function (recommendations) {
      return recommendations.json()

    })
    .then(function (respuesta2) {
      let recommendations = ""
      for (i = 0; i < 14; i++) {
        console.log(respuesta2.results[i])
        let id = respuesta2.results[i].id
        let url = "https://image.tmdb.org/t/p/w500" + respuesta2.results[i].poster_path
        recommendations = `${recommendations}<a class="sliderItem" class="infoReco" href="detallesSeries.html?id=${id}"><img class="imagenesD" src="${url}" alt=""></a> `
      }
      document.querySelector(".seriesReco").innerHTML = recommendations
      console.log(recommendations)
      $(".seriesReco").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1400,
          settings: {
          slidesToShow: 4,
          }
        }]

      })

    })

// fetch para reviews
  let comenta = document.querySelector('.comenta');
 fetch(` https://api.themoviedb.org/3/tv/${id}/reviews?api_key=3b4640a2c0443153138c528fe0e85a7a`)
 
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(reviews){
        
      reviews.results.forEach(review => {
        if (reviews.results == 0) {
            comenta.innerHTML = `<div class="noReview"><h2>Sin reseña hasta el momento</h2></div>`

            
        }else{
            
             comenta.innerHTML = `
                <div class="parteCritica">
                <h2 class="rotulosRR">Reviews</h2>
                    <article class="datosCritica"><h3 class="dato1">Author:</h3><p class="dato2Critica">${review.author}</p></article>
                    <article class="datosCritica"><h3 class="dato1">Puntuation:</h3><p class="dato2Critica">${review.author_details.rating}</p></article>
                    <p class="infoCritica">${review.content}</p>
                </div>
                `
            
        }
      })
    })
  })