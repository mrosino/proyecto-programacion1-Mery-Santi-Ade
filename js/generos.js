window.addEventListener('load', function(){
var sectionHtml1 = document.querySelector('.listadoGeneros')


fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b4640a2c0443153138c528fe0e85a7a&language=en-US')
.then(function(respuesta){
    return respuesta.json()

})
.then(function(listadoDeGeneros){
console.log(listadoDeGeneros.genres[0].name);
listadoDeGeneros.genres.forEach(genero => {
    sectionHtml1.innerHTML += `<h2> <a href="detallev2.html?id=${genero.id}">${genero.name}</a></h2>`
});
})

})