window.addEventListener('load', function(){
    let favoritos = JSON.parse(localStorage.getItem("favoritos"))
    
    let peliculas = ""
    for (i = 0 ; i < favoritos.length ; i++){
        let id = favoritos[i].id
        let url= "https://image.tmdb.org/t/p/w500" + favoritos[i].poster_path
        if (favoritos[i].tipo=="peli"){
            peliculas = `${peliculas}<div><a href="detallesPelis.html?id=${id}"> <div class="imagenes1"><img src="${url}" alt=""></div></a> <div> <button class="favo" onclick="sacarDeMiLista(${id})">Sacar de mi lista </button></div></div>`

        }
        else {
            peliculas = `${peliculas}<div><a href="detallesSeries.html?id=${id}"> <div class="imagenes1"><img src="${url}" alt=""></div></a> <div> <button class="favo" onclick="sacarDeMiLista(${id})">Sacar de mi lista </button></div></div>`

        }
       
    }
    document.querySelector(".peliculas").innerHTML= peliculas
})

function sacarDeMiLista(id){
    let favoritas = JSON.parse(localStorage.getItem("favoritos"))
    favoritas = favoritas.filter(function(favorita){
        return favorita.id != id
    })
    localStorage.setItem('favoritos', JSON.stringify(favoritas))
    location.href = 'favorito.html'

}

let remove = document.querySelector(".remover")
remove.addEventListener('click', function(){    

    localStorage.clear()
    location.href='favorito.html'


})