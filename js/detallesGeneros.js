window.addEventListener('load', function(){

    let queryString= location.search 
    let datoURL = new URLSearchParams(queryString);
    let id = datoURL.get('id'); 
    console.log(id);
    let nombre1 =datoURL.get('nombre')
    console.log(nombre1);
    let detalle =document.querySelector('.detalleInfo')
    let detalle1 =document.querySelector('.detalleInfo1')
    let nombreGen = document.querySelector('.nombreGenero')

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=es-ES')
    .then(function(respuesta){
        return respuesta.json()

    })
        .then(function(listadoDeGeneros){
            console.log(listadoDeGeneros)
        nombreGen.innerHTML=`<div class="contiName"><h2 class="contiName2">A continuación podrás ver peliculas y series de ${nombre1}</h2></div>`
})



   fetch(`http://api.themoviedb.org/3/discover/movie?api_key=3b4640a2c0443153138c528fe0e85a7a&with_genres=${id}`)
    .then(function(info){
        return info.json()
      })
    .then(function(respuesta){
       
        for (i = 0 ; i < 20 ; i++){
            let newId = respuesta.results[i].id            
            let url= "https://image.tmdb.org/t/p/w500" +respuesta.results[i].poster_path
            let nombre= respuesta.results[i].original_title
            detalle.innerHTML+= `<div class="contGen"><a class="aGen" href="detallesPelis.html?id=${newId}"><div class="imagenesGen"><img src="${url}" alt=""></div></a></div> `
        } 

    })

    fetch(`http://api.themoviedb.org/3/discover/tv?api_key=ad5d026c61e51047e5dd51e17f8086dd&with_genres=${id}`)
    .then(function(info1){
        return info1.json()
      })
    .then(function(respuesta1){
        console.log(respuesta1);
       
        for (i = 0 ; i < 20 ; i++){
            let newId1 = respuesta1.results[i].id            
            let url1= "https://image.tmdb.org/t/p/w500" +respuesta1.results[i].poster_path
            let nombre1= respuesta1.results[i].original_name
            detalle1.innerHTML+= `<div class="contGen"><a class="aGen" href="detallesSeries.html?id=${newId1}"><div class="imagenesGen"><img src="${url1}" alt=""></div></a></div> `
        } 

    })

//replicar pero para discover tv


   


      


})