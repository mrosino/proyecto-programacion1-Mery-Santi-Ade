window.addEventListener('load', function(){
    let queryString= location.search 
    let datoURL = new URLSearchParams(queryString);
    let query = datoURL.get('query'); 
   


    fetch(`https://api.themoviedb.org/3/search/multi?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES&query=${query}&include_adult=false`)
    .then(function(infoSearch){
        return infoSearch.json()
      })
    .then(function(respuestaSearch){
        console.log(respuestaSearch);
    })
})