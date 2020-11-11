window.addEventListener('load', function(){

    let queryString= window.location.search 
    let datoURL = new URLSearchParams(queryString);
    let id = datoURL.get('id'); 
    let detalle =document.querySelector('.detalleInfo')
    let nombreGen = document.querySelector('.nombreGenero')

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=en-US')
    .then(function(respuesta){
        return respuesta.json()

    })
        .then(function(listadoDeGeneros){
            console.log(listadoDeGeneros)
        nombreGen.innerHTML=`A continuación podrás ver peliculas y series de ${id}`
})



   fetch(`http://api.themoviedb.org/3/discover/movie?api_key=3b4640a2c0443153138c528fe0e85a7a&with_genres=${id}`)
    .then(function(info){
        return info.json()
      })
    .then(function(respuesta){
       
        for (i = 0 ; i < 10 ; i++){
            let newId = respuesta.results[i].id            
            let url= "https://image.tmdb.org/t/p/w500" +respuesta.results[i].poster_path
            let nombre= respuesta.results[i].original_title
            detalle.innerHTML+= `<a href="detallesPelis.html?id=${newId}"><h2> ${nombre}</h2> <div class="imagenes"><img src="${url}" alt=""></div></a> `
        } 

    })
//replicar pero para discover tv


   


      


})