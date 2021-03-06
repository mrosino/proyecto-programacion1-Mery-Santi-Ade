window.addEventListener('load', function () {
  let withGenres = new URLSearchParams(location.search).get("tipoGen")
  let orden = new URLSearchParams(location.search).get("popularidad")
  let orden1 = new URLSearchParams(location.search).get("puntuacion")
  let orden2 = new URLSearchParams(location.search).get("fechas")
  let listGen = document.querySelector('.despegableGen')
  var cargando = document.querySelector('.cargando')
  let usuario = localStorage.getItem('nombre')
  let nombreUsuario = document.querySelector('.nombreUs')
  console.log(usuario);
  nombreUsuario.innerHTML = usuario
  let log = document.getElementById('log')
  if (usuario != undefined){
    log.style.display = 'none'
  }
  else{
    log.style.display = 'block'
  }

  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES')
    .then(function (respuesta) {
      return respuesta.json()

    })

    .then(function (listadoDeGeneros) {

      listadoDeGeneros.genres.forEach(genero => {

        listGen.innerHTML += `<option class="valores" value="${genero.id}">${genero.name}</option>`

      })
    })

  cargando.classList.add('loading')
  cargando.style.display = "block"


  //discover peliculas
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&with_genres=${withGenres}&sort_by=${orden}&sort_by=${orden1}&sort_by=${orden2}`)
    .then(function (response) {
      return response.json()

    })

    .then(function (data) {

      // console.log(data);

      for (var i = 0; i < 14; i++) {
        var contenedorPelis = document.querySelector(".resultado1")
        if (data.results[i].poster_path == null) {

          contenedorPelis.innerHTML += `<a href="detallesPelis.html?id=${data.results[i].id}">
            <img class="imagenesD" src="assets/img/3.png" alt="vidrio roto">
          </a>`

        } else {
          contenedorPelis.innerHTML += `<a href="detallesPelis.html?id=${data.results[i].id}">
            <img class="imagenesD" src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
          </a>`
        }
      }
    })


  //para series
  fetch(`https://api.themoviedb.org/3/discover/tv?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES&sort_by=${orden}&page=1&with_genres=${withGenres}`)
    .then(function (response) {
      return response.json()

    })
    .then(function (data) {
      cargando.style.display = "none"
      for (var i = 0; i < 14; i++) {
        var contenedorSeries = document.querySelector(".resultado2")
        if (data.results[i].poster_path == null) {

          contenedorSeries.innerHTML += `<a href="detallesPelis.html?id=${data.results[i].id}">
        <img class="imagenesD" src="assets/img/3.png" alt="vidrio roto">
      </a>`

        } else {
          contenedorSeries.innerHTML += `<a href="detallesPelis.html?id=${data.results[i].id}">
        <img class="imagenesD" src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
      </a>`
        }
      }
    })

})