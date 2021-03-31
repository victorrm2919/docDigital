window.addEventListener("load", function () {

  // icono para mostrar contraseña
  let showPassword = document.querySelector('.show-password');
  showPassword.addEventListener('click', () => {

    // elementos input de tipo clave
    let iconPass = document.querySelector('.password');
    let iconPass1 = document.querySelector('.rpassword');
    if (iconPass.type === "text") {
      iconPass.type = "password"
      if (iconPass1) {
        iconPass1.type = "password"
      }
      showPassword.classList.remove('fa-eye-slash');
    } else {
      iconPass.type = "text"
      if (iconPass1) {
        iconPass1.type = "text"
      }
      showPassword.classList.toggle("fa-eye-slash");
    }

  })

  /* Validacion Login */
  if (document.querySelector('.login-wrapper')) {
    $(function () {
      $('#login-user').validate({
        rules: {
          email: {
            required: true,
            email: true,
          },
          password: {
            required: true,
            minlength: 6
          }
        },
        messages: {
          email: {
            required: "Por favor ingresa tu direccion de correo",
            email: "Ingresa un correo electronico válido"
          },
          password: {
            required: "Por favor ingrese su contraseña",
            minlength: "Tu contraseña debe tener al menos 5 caracteres"
          }
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
          error.addClass('invalid-feedback m-2');
          element.closest('.form-floating').append(error);
        },
        highlight: function (element, errorClass, validClass) {
          $(element).addClass('is-invalid mb-2');
          if ($(element).attr('name') == 'password') {
            $('.show-password').hide();
          }
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('is-invalid mb-2');
          if ($(element).attr('name') == 'password') {
            $('.show-password').css('display', 'block');
          }
        }
      });
    });
  }

  /* Responsive */

  $('.infoResp i').click(function (e) {
    e.preventDefault();
    $('.propositos').slideToggle();
  });



  /* Cerrar Sesion */

  $('.closeSession').click(function (e) { 
    e.preventDefault();
    
  });


});
