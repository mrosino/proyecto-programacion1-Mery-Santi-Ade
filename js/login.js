window.addEventListener('load', function(){
    let formulario = document.querySelector('.formularioIS')
        function validateRegisterForm(){
            let { email, nombreUsuario} = formulario.elements
            if (!validateEmail(email)) return false;
            if (!validatenombreUsuario(nombreUsuario)) return false;
            return true;
        }
        function validateEmail(email) {
            let re = `!?¿*//$%·#-{}();:º`
            let error = document.getElementById('errorEmail');
      
      
            if (!re.test(email.value)){ 
              
              email.classList.add('is-invalid'); 
              console.log(errorEmail);
              error.innerHTML= "Debe colocar un email válido";
              error.classList.add('alert-danger');
              //errorEmail.classList.add('alert-danger');
             // email.addEventListener('change',cambioNombre);
            return false
          }else{
            error.innerHTML= "";
            error.classList.remove('alert-danger');
            email.classList.remove('is-invalid'); 
            email.classList.add('is-valid');
            return true;
          }}





          function validatenombreUsuario(nombreUsuario) {
            let errornombreUsuario = document.getElementById('errorNombreUsuario');
            if (nombreUsuario.value.length < 3){
              errornombreUsuario.innerHTML = "Nombre de usuario no puede tener menos de 3 digitos";
              errornombreUsuario.classList.add('alert-danger');
              nombreUsuario.classList.add('is-invalid');
              return false;
            } else{
              errornombreUsuario.innerHTML = "";
              errornombreUsuario.classList.remove('alert-danger');
              nombreUsuario.classList.remove('is-invalid');
              nombreUsuario.classList.add('is-valid');
              return true;
            }}
        
            formulario.onsubmit = function(evento) {
                if (!validateRegisterForm()) {
                  evento.preventDefault()
                }else{
                  fomulario.submit()
                  console.log('hola');
                  location.href = 'index.html'
                  alert('Bienvenido!')
                }}
        

        })