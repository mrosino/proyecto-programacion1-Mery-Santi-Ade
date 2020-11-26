window.addEventListener('load', function () {
    let favoritos = JSON.parse(localStorage.getItem("favoritos"))
    let usuario = localStorage.getItem('nombre')
    let nombreUsuario = document.querySelector('.nombreUs')
    console.log(usuario);
    nombreUsuario.innerHTML = usuario
    let log = document.getElementById('log')
    if (usuario != undefined){
      log.style.display = 'none'
    }
    else{
      log.style.display = 'block'
    }
    let peliculas = ""
    for (i = 0; i < favoritos.length; i++) {
        let id = favoritos[i].id
        let url = "https://image.tmdb.org/t/p/w500" + favoritos[i].poster_path
        if (favoritos[i].tipo == "peli") {
            peliculas = `${peliculas}<div><a href="detallesPelis.html?id=${id}"> <div class="imagenes1"><img src="${url}" alt=""></div></a> <div> <button class="favo" onclick="sacarDeMiLista(${id})">Sacar de mi lista </button></div></div>`

        } else {
            peliculas = `${peliculas}<div><a href="detallesSeries.html?id=${id}"> <div class="imagenes1"><img src="${url}" alt=""></div></a> <div> <button class="favo" onclick="sacarDeMiLista(${id})">Sacar de mi lista </button></div></div>`

        }

    }
    document.querySelector(".peliculas").innerHTML = peliculas
})

function sacarDeMiLista(id) {
    let favoritas = JSON.parse(localStorage.getItem("favoritos"))
    favoritas = favoritas.filter(function (favorita) {
        return favorita.id != id
    })
    localStorage.setItem('favoritos', JSON.stringify(favoritas))
    location.href = 'favorito.html'

}

//solo aparece vaciar favoritos si elementos que eliminar


let remove = document.querySelector(".remover2")
let favoritosVacio = localStorage.getItem('favoritos')
if (!favoritosVacio) {
    remove.classList.add('vacio')
} else {
    remove.addEventListener('click', function () {
        localStorage.clear()
        location.href = 'favorito.html'

    })


}