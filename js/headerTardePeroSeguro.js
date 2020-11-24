

//buscador normal del header
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
      let poster= "https://image.tmdb.org/t/p/w500" + respuestaSearch.poster_path

        for (let i = 0; i < respuestaArray.length; i++) {
         
          const elementosArray = respuestaArray[i];
         // console.log(elementosArray);
       
          resultados.innerHTML += `<a href="detallesPelis.html?id=${elementosArray.id}"> <div class="imagenesC"><img class="imagenesB" src="https://image.tmdb.org/t/p/w500${elementosArray.poster_path}" alt=""></div></a>`
        }
    })
})