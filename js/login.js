  window.addEventListener('load', function(){
    let datos = location.search
    let datosObjetos = new URLSearchParams(datos)
    console.log(datos);
    let nombre = datosObjetos.get('uNombre')
    let usuario = localStorage.getItem('uNombre')
    let logU = document.getElementById('logU')
    logU.style.display = 'none'
    //si tengo un dato que viene de la URL y no tengo nada en el local storage 
    // es por que se esta iniciando sesion 
    if (nombre && !usuario){
    //guardo el dato que me viene en la  url en el local storage 
    //estoy indicando que inicio sesion y guardo el nombre   
      localStorage.setItem('uNombre',nombre)
      console.log(usuario);
      //pongo el nombre de usuario en el boton nombreUs
      let nombreUsuario = document.querySelector('.nombreUs')
      nombreUsuario.innerHTML = usuario
      let log = document.getElementById('log')
      //oculto el boton de log in 
        log.style.display = 'none' 
        let logU = document.getElementById('logU')
        //muenstro el boton de cerrar sesion y recargo la pagina
        logU.style.display = 'block' 
        location.reload()

      // si ya tengo algo en el local storage es porque ya inicio sesion antes   
    }else if(usuario) {

    //Pongo el nombre usuario que esta en el local storage en el nombreUs  
      let nombreUsuario = document.querySelector('.nombreUs')
      nombreUsuario.innerHTML = usuario

     //oculto el log in  
      let log = document.getElementById('log')
        log.style.display = 'none'

      // muestro el cerrar sesion   
        let logU = document.getElementById('logU')
        logU.style.display = 'block'
    }
    //  cuando cierro sesion se borra todo y queda log in de nuevo 
    logU.addEventListener('click',function(){
      if (usuario){
        localStorage.removeItem('uNombre')
        location.href = 'index.html'
      }
    })
  
  


})