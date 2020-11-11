window.addEventListener('load', function(){
    let queryString= window.location.search 
    let datoURL = new URLSearchParams(queryString);
    let id = datoURL.get('id');  
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US`)
    .then(function(info){
      return info.json()
    })
    .then (function(respuesta){
      let title= respuesta.title
      let overview= respuesta.overview
      let poster= "https://image.tmdb.org/t/p/w500" + respuesta.poster_path
      let puntuacion=respuesta.vote_average
      let lanzamiento= respuesta.release_date
      var atp =respuesta.adult
      document.querySelector(".descripcion").innerHTML= overview
      document.querySelector(".titulo").innerHTML="<h2>"+title+"</h2>"
      document.querySelector(".poster").innerHTML="<img src='"+poster+"'/>"
      document.querySelector(".puntu").innerHTML=puntuacion
      document.querySelector(".lanza").innerHTML=lanzamiento
    //preguntar por que no funciona
     if (atp == "false"){
      document.querySelector(".atp").innerHTML=`La pelicula posee contenido apto para público`
        
      }
      else{
        
        document.querySelector(".atp").innerHTML=`La pelicula posee contenido no- apto para público`
      }

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