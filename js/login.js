window.addEventListener('load', function(){
  let datos = location.search
  let datosObjetos = new URLSearchParams(datos)
  console.log(datos);
  let usNombre = datosObjetos.get('nombre')
  if (usNombre){
    localStorage.setItem('nombre',usNombre)
    let usuario = localStorage.getItem('nombre')
    console.log(usuario);
    let nombreUsuario = document.querySelector('.nombreUs')
    nombreUsuario.innerHTML = usuario
    let log = document.getElementById('log')
    if (usuario != undefined){
      log.style.display = 'none'
    }
    else{
      log.style.display = 'block'
    }
    
  }
  let logU = document.getElementById('logU')
    if (usuario != undefined){
      logU.style.display = 'none'
    }
    else{
      logU.style.display = 'block'
    }
  
  


})