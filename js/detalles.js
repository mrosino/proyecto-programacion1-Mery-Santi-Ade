window.addEventListener('load', function(){
    var informacion = document.querySelector('.detalleInfo')
    let datoURL = new URLSearchParams(queryString);
    let id = datoURL.get('id');   
    
    fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=3b4640a2c0443153138c528fe0e85a7a&language=en-US')
    .then(function(respuesta){
        //return respuesta.json()
    console.log(respuesta);
    })
    //.then(function(datellesDePeliculas){
    //console.log(detallesDePeliculas.//genres[0].name);
    //detallesDePeliculas.//genres.forEach(detalle => {
     //   informacion.innerHTML += `//<h2> <a href="detallev2.html?id=${genero.id}">${genero.name}</a></h2>`
    
    
    })


   /* Detalle de Movie
        Imagen de Portada
        Nombre
        Promedio de votos 
         HARD:  Reviews de la película
        Detalle de Serie
        Imagen de la serie 
        Nombre de la serie
        Nombre del género (hipervínculo al detalle del genero)
        Fecha de salida
        Detalle Genero
        Nombre del género 
        10 películas o series que pertenezcan a ese género (hipervínculo al detalle de la pelicula o serie) 
         */