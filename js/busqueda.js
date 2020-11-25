window.addEventListener('load', function () {
  let queryString = location.search
  let withGenres = new URLSearchParams(location.search).get("tipoGen")
  let orden = new URLSearchParams(location.search).get("orden")
  let listGen = document.querySelector('.despegableGen')
  
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES')
    .then(function(respuesta){
        return respuesta.json()

    })

    .then(function (listadoDeGeneros) {

      listadoDeGeneros.genres.forEach(genero => {
        
        listGen.innerHTML += `<option class="valores" value="${genero.id}">${genero.name}</option>`
        
      })
    })
 

  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&with_genres=${withGenres}&sort_by=${orden}`)
    .then(function (response) {
      return response.json()
      
    })
    .then(function (data) {
      
      console.log(data);

      for (var i = 0; i < 14; i++) {
        var contenedorPelis = document.querySelector(".resultado1")
        if(data.results[i].backdrop_path==null){
          let id= data.results[i].id

          contenedorPelis.innerHTML +=`<a href="detallesPelis.html?id=${data.results[i].id}">
            <img class="imagenesA" src='assets/img/3.png'>
          </a>`
          
        }
        else{        
          contenedorPelis.innerHTML +=`<a href="detallesPelis.html?id=${data.results[i].id}">
            <img class="imagenesA" src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
          </a>`
        }
    }
    })
  
})
var withGenres = new URLSearchParams(location.search).get("tipoGen")
var orden = new URLSearchParams(location.search).get("orden")
//para series
fetch(`https://api.themoviedb.org/3/discover/tv?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES&sort_by=${orden}&page=1&with_genres=${withGenres}`)
.then(function (response) {
  return response.json()
  
})
.then(function (data) {
  
  for (var i = 0; i < 14; i++) {
    var contenedorSeries = document.querySelector(".resultado2")
    if(data.results[i].backdrop_path==null){
      let id= data.results[i].id
  
      contenedorSeries.innerHTML +=`<a href="detallesPelis.html?id=${data.results[i].id}">
        <img class="imagenesA" src='assets/img/3.png'>
      </a>`
      
    }
    else{        
      contenedorSeries.innerHTML +=`<a href="detallesPelis.html?id=${data.results[i].id}">
        <img class="imagenesA" src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
      </a>`
    }
  }
})

