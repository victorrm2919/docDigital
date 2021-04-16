$(function () {
  /* Responsive */

  $('.infoResp i').click(function (e) {
    e.preventDefault();
    $('.propositos').slideToggle();
  });

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
            minlength: "Tu contraseña debe tener al menos 6 caracteres"
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
        },
      });
    });

  }


  /* AJAX login */
  $('#login-user').on('submit', function (e) {
    e.preventDefault();

    const arrb = ($("#email").val().indexOf('@', 0) == -1)
    const puntoEm = ($("#email").val().indexOf('.', 0) == -1)


    if ($('#email').val() == '' || $('#password').val().length < 6 || arrb == true || puntoEm == true) {
      if (arrb == true || puntoEm == true) {
        if ($('#email').val() !== '' && $('#password').val().length > 5) {
          Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: 'Valida los datos de inicio de sesión',
            timer: 2000,
            showConfirmButton: false,
            willClose: () => {
              $('#password').val('');
            }
          });
        }
      }
    } else {
      const datos = $(this).serializeArray();
      Swal.fire({
        title: 'Iniciando Sesión',
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading()
          setTimeout(function () {
            $.ajax({
              type: $('#login-user').attr('method'),
              url: $('#login-user').attr('action'),
              data: datos,
              dataType: "json",
              success: function (data) {
                if (data.respuesta === 'correcto') {

                  Swal.fire({
                    icon: 'success',
                    title: 'Inicio Correcto',
                    text: `Bienvenido ${data.nombre}`,
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    willClose: () => {
                      window.location.href = '../dashboard';
                      // $('.login-box').removeClass('animate__zoomIn');
                      // $('.login-box').addClass('animate__zoomOut');
                    }
                  })
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error',
                    text: 'Valida los datos de inicio de sesión',
                    timer: 2000,
                    showConfirmButton: false,
                    willClose: () => {
                      $('#password').val('');
                    }
                  });
                }
              }
            });
            Swal.close()
          }, 2000)
        }
      })

    }

  });

  /* Validacion Crear Cuenta */

  if (document.querySelector('.form-create')) {
    $(function () {
      $('#guardar-registro').validate({
        rules: {
          nombre: {
            required : true
          },
          apellido: {
            required : true
          },
          email: {
            required: true,
            email: true,
          },
          password: {
            required: true,
            minlength: 6
          },
          Cpassword: {
            required: true,
            minlength: 6,
            equalTo: "#password"
          }
        },
        messages: {
          nombre: {
            required: "Por favor ingresa tu(s) nombre(s)",
          },
          apellido: {
            required: "Por favor ingresa tus apellidos",
          },
          email: {
            required: "Por favor ingresa tu dirección de correo",
            email: "Ingresa un correo electrónico válido"
          },
          password: {
            required: "Por favor ingrese su contraseña",
            minlength: "Tu contraseña debe tener al menos 6 caracteres"
          },
          Cpassword: {
            required: "Por favor ingrese nuevamente su contraseña",
            minlength: "Tu contraseña debe tener al menos 6 caracteres",
            equalTo: "Ingresa nuevamente tu contraseña, no coincide"
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
        },
      });
    });

  }



});