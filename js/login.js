  window.addEventListener('load', function(){
    let datos = location.search
    let datosObjetos = new URLSearchParams(datos)
    console.log(datos);
    let nombre = datosObjetos.get('uNombre')
    let usuario = localStorage.getItem('uNombre')
    let logU = document.getElementById('logU')
    logU.style.display = 'none'
    if (nombre && !usuario){ 
      localStorage.setItem('uNombre',nombre)
      console.log(usuario);
      let nombreUsuario = document.querySelector('.nombreUs')
      nombreUsuario.innerHTML = usuario
      let log = document.getElementById('log')
        log.style.display = 'none' 
        let logU = document.getElementById('logU')
        logU.style.display = 'block' 
        location.reload() 
    }else if(usuario) {
      let nombreUsuario = document.querySelector('.nombreUs')
      nombreUsuario.innerHTML = usuario
      let log = document.getElementById('log')
        log.style.display = 'none'  
        let logU = document.getElementById('logU')
        logU.style.display = 'block'
    }
    logU.addEventListener('click',function(){
      if (usuario){
        localStorage.removeItem('uNombre')
        location.href = 'index.html'
      }
    })
  
  


})