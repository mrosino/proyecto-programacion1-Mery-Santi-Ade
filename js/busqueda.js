window.addEventListener('load', function () {
  let queryString = location.search
  let datoURL = new URLSearchParams(queryString);
  let query = datoURL.get('busqueda');
  let listGen = document.querySelector('.despegableGen')


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

  // Logica para la busqueda
  var withGenres = new URLSearchParams(location.search).get("tipoGen");
  var orden = new URLSearchParams(location.search).get("orden");

  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&with_genres=${withGenres}&sort_by=${orden}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      var contenedorSeries = document.querySelector(".resultado");
      for (var i = 0; i < data.results.length; i++) {
        contenedorSeries.innerHTML += 
          `<a href="detallesSeries.html?id=${data.results[i].id}">
            <img class="imagenes" src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
          </a>`
      }
    })
})
