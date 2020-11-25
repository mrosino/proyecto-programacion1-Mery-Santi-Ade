window.addEventListener('load', function(){
    let formulario = document.querySelector('form')
    console.log(formulario);
    formulario.addEventListener('submit', function(evento){
        if(!validaciones()){
            evento.preventDefault()
        }else{
            formulario.submit()
        }

    })
    let name = document.getElementById('nombreU')
    let contraseñaUsuario = document.getElementById('contraseñaU')
    function validaciones(){
        if(!validacionName(name)) return false
        return true

    }
    function validacionName(name){
        let errorName = document.getElementById('error')
        if (name.value == ""){
            errorName.innerHTML = 'Campo vacio'
            return false
        }else{
            return true
        }
    }





})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*formulario.elements.nombreUsuario.focus()
    console.log(formulario);
    formulario.addEventListener('.botonIS', function(evento){
        if(!validaciones()){
            evento.preventDefault();
        }else{
            formulario.submit()
        }


    })
    let nombreUsuario = document.getElementById('nombreU')
    let contraseñaU = document.getElementById('contraseñaU')
    function validaciones(){
        if(!validacionNombreUsuario()) return false
        return true

    }
    function validacionNombreUsuario(nombreUsuario){
        let errorNombreUsuario = document.getElementById('errorN');
        console.log(errorNombreUsuario);
        if(nombreUsuario.value == ""){
            errorNombreUsuario.innerHTML = 'Campo vacio';
            errorNombreUsuario.classList.add('alert-danger')
            NombreUsuario.classList.add('is-invalid')
            return false;
        }else{
            errorNombreUsuario.innerHTML = "";
            errorNombreUsuario.classList.remove('alert-danger')
            nombreUsuario.classList.remove('is-invalid')
            nombreUsuario.classList.add('is-valid')
            return false;
        }
    }


})*/