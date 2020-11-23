window.addEventListener('load', function(){
    let queryString= location.search 
    let datoURL = new URLSearchParams(queryString);
    let query = datoURL.get('busqueda'); 
    let listGen = document.querySelector('.despegableGen')
    
    

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES')
            .then(function(respuesta){
                return respuesta.json()

            })
                .then(function(listadoDeGeneros){
              
                listadoDeGeneros.genres.forEach(genero => {
                listGen.innerHTML += `<option class="valores" value="${genero.id}">${genero.name}</option>`
                
                
                
               

                 })
        })
        var withGenres = new URLSearchParams(location.search).get("buscados");
        var orden = new URLSearchParams(location.search).get("orden") ;
        var year = new URLSearchParams(location.search).get("year");
    console.log(`https://api.themoviedb.org/3/discover/movie?api_key=ad5d026c61e51047e5dd51e17f8086dd&page=1
    `);
         fetch(`https://api.themoviedb.org/3/discover/tv?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=en-US&sort_by=${orden}&page=1&with_genres=${withGenres}&include_null_first_air_dates=false`)
         .then(function(response) {
           return response.json()
         })
         .then(function(data) {
           console.log(data)
           var contenedorSeries = document.querySelector(".resultado");
           for (var i = 0; i < 15; i++) {
             contenedorSeries.innerHTML +=
             `<li>
             <img src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}'>
            </li>`
           }
         })
    

         let boton = document.querySelector('.btn')
         fetch(``)
      })
