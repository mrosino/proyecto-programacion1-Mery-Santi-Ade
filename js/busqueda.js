window.addEventListener('load', function(){
    let queryString= location.search 
    let datoURL = new URLSearchParams(queryString);
    let query = datoURL.get('busqueda'); 
    

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES&query=${query}&include_adult=false`)
    .then(function(infoSearch){
        return infoSearch.json()
      })
    .then(function(respuestaSearch){
      let respuestaArray = respuestaSearch.results
      let resultados = document.querySelector('.resultadosB')
     
        for (let i = 0; i < respuestaArray.length; i++) {
         
          const e = respuestaArray[i];
          console.log(e);
         //no funciona la api con las imagenes, probe con texto y funca
          resultados.innerHTML += `<a href="detallesPelis.html?id=${e.id}"> <div class="imagenes"><h2>${e.original_name}</h2><img src="${e.poster_path}" alt=""></div></a>`
        }
    })
})


