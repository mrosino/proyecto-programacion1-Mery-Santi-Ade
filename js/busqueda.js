window.addEventListener('load', function () {
  let queryString = location.search
  let datoURL = new URLSearchParams(queryString);
  let query = datoURL.get('busqueda');
  let listGen = document.querySelector('.despegableGen')
  //let tipo = document.querySelector('#prueba')
  //let tipo2 = document.querySelector('#prueba2')
  let search = document.querySelector('.favo2')

//window.addEventListener('click')
//boton se llama favo2



  // Fetch del listados de generos disponibles
  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES')
    .then(function (respuesta) {
      return respuesta.json()

    })
    .then(function (listadoDeGeneros) {

      listadoDeGeneros.genres.forEach(genero => {
        listGen.innerHTML += `<option class="valores" value="${genero.id}">${genero.name}</option>`
        
      })
    })
    //para que funcione al apretar buscar
    search.addEventListener('click', function(e){
      e.preventDefault()
  // Logica para la busqueda
  
  var withGenres = new URLSearchParams(location.search).get("tipoGen")
  var orden = new URLSearchParams(location.search).get("orden")

  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&with_genres=${withGenres}&sort_by=${orden}`)
    .then(function (response) {
      return response.json()
      
    })
    .then(function (data) {
      var contenedorPelis = document.querySelector(".resultado1")
      /*tipo.classList.remove('rotulosC')
      tipo.classList.add('rotulosB')
      tipo.innerHTML=`Peliculas`*/

      for (var i = 0; i < 14; i++) {
        
          contenedorPelis.innerHTML += `<a href="detallesPelis.html?id=${data.results[i].id}">
            <img class="imagenesA" src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
          </a>`
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
  
  var contenedorSeries = document.querySelector(".resultado2")
/*
  tipo2.classList.remove('rotulosD')
  tipo2.classList.add('rotulosB')
  tipo2.innerHTML=`Series`*/

  for (var i = 0; i < 14; i++) {
    console.log(data)
    contenedorSeries.innerHTML +=`<a href="detallesSeries.html?id=${data.results[i].id}">
        <img class="imagenesA" src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
      </a>`
  }
})
})
