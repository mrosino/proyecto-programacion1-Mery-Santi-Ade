window.addEventListener('load', function () {
  let queryString = location.search //devuelve un string con todos los parametros
  let datoURL = new URLSearchParams(queryString); //me da los parametros
  let id = datoURL.get('id'); //busco el que me interesa
  let nombre1 = datoURL.get('nombre')//same
  let detalle = document.querySelector('.detalleInfo')
  let detalle1 = document.querySelector('.detalleInfo1')
  let nombreGen = document.querySelector('.nombreGenero')
  //spinner
  var cargando = document.querySelector('.cargando')

  cargando.classList.add('loading')
  cargando.style.display = "block"


  nombreGen.innerHTML = `<div class="contiName"><h2 class="contiName2">A continuación podrás ver peliculas y series de ${nombre1}</h2></div>`



  fetch(`http://api.themoviedb.org/3/discover/movie?api_key=3b4640a2c0443153138c528fe0e85a7a&with_genres=${id}`)
    .then(function (info) {
      return info.json()
    })
    .then(function (respuesta) {

      for (i = 0; i < 20; i++) {
        let newId = respuesta.results[i].id
        let url = `https://image.tmdb.org/t/p/w500${respuesta.results[i].poster_path}`
        if (respuesta.results[i].poster_path == null) {
          detalle.innerHTML += `<div class="contGen"><a class="aGen" href="detallesPelis.html?id=${newId}">
          <img class="imagenesD" src="assets/img/3.png" alt="vidrio roto">
        </a>`    
    
        } else {       
          detalle.innerHTML += `<div class="contGen"><a class="aGen" href="detallesPelis.html?id=${newId}"><img class="imagenesD" src="${url}" alt=""></a> `
    
        }
    
      }

    })

  fetch(`http://api.themoviedb.org/3/discover/tv?api_key=ad5d026c61e51047e5dd51e17f8086dd&with_genres=${id}`)
    .then(function (info1) {
      return info1.json()
    })
    .then(function (respuesta1) {
      //console.log(respuesta1);
      cargando.style.display = "none"
      for (i = 0; i < 20; i++) {
        let newId1 = respuesta1.results[i].id
        let url1 = "https://image.tmdb.org/t/p/w500" + respuesta1.results[i].poster_path
        if (respuesta1.results[i].poster_path == null) {
          detalle1.innerHTML += `<div class="contGen"><a class="aGen" href="detallesSeries.html?id=${newId1}">
          <img class="imagenesD" src="assets/img/3.png" alt="vidrio roto">
        </a>`    
    
        } else {       
          detalle1.innerHTML += `<div class="contGen"><a class="aGen" href="detallesSeries.html?id=${newId1}"><img class="imagenesD" src="${url1}" alt=""></a> `
    
        }
      }

    })









})