$(function () {
  /* Validacion Crear Cuenta */

  if (document.querySelector('.form-create')) {
    $('#guardar-registro').validate({
      rules: {
        nombre: {
          required: true
        },
        apellido: {
          required: true
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
  }

  /* Valida correo al crear cuenta */


  $('.validarCorreo').focusout(function (e) {
    e.preventDefault();
    if ($(this).val() != '') {
      let padreForm = $(this).parents('form').attr('action')
      let correo = this.value
      let tipo = $('#tipo').val();
      let info = {
        'correoV': correo,
        'registro': 'validar-correo',
        'tipo': tipo
      };

      $.ajax({
        type: "post",
        url: padreForm,
        data: info,
        dataType: "json",
        success: function (response) {
          if (response.respuesta == 'Ok') {
            if (correo.indexOf('@') > 0 && correo.indexOf('.') > 0) {
              $('#registro').val('nuevo');
            }
          } else {
            $('.existeCorreo').removeClass('d-none');
            $('#crear-cuenta').addClass('disabled');
            $('.existeCorreo').attr('data-error', correo);
            $('.validarCorreo').focus();
          }
        }
      });

    } else {
      $('#registro').val('');
    }
  }).keyup(function (e) {
    let dataErr = $('.existeCorreo').attr('data-error');
    if ($(this).val() != dataErr) {
      $('.existeCorreo').addClass('d-none');
      $('.existeCorreo').attr('data-error', '');
      $('#crear-cuenta').removeClass('disabled');
    }
  });


  /* promotion */
  $('button[data-bs-dismiss=promotion]').click(function (e) {
    e.preventDefault();
    $('.promotion').fadeOut();
  });


  /* -------------------------------------------Eventos-------------------------------------------  */

  /* guardar info base, crear usuarios*/
  $('#guardar-registro').on('submit', function (e) {
    e.preventDefault();
    const arrb = ($("#email").val().indexOf('@', 0) == -1)
    const puntoEm = ($("#email").val().indexOf('.', 0) == -1)

    let va = validar(this);
    if (va == false || arrb == true || puntoEm == true) {
      let vP = validator.equals( $('#password').val(),  $('#Cpassword').val())
        if ($('#email').val() !== '' && $('#password').val().length > 5 && $('#Cpassword').val().length > 5 && vP) {
          Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: 'Valida tus datos, reintenta nuevamente',
            timer: 2000,
            showConfirmButton: false,
            willClose: () => {
              $('#password').val('');
              $('#Cpassword').val('');
            }
          });
      }
    } else {

      if ($('#password').val() === $('#Cpassword').val()) {
        let datos = $(this).serializeArray();
        $.ajax({
          type: $(this).attr('method'),
          url: $(this).attr('action'),
          data: datos,
          dataType: "json",
          success: function (data) {
            if (data.respuesta === 'correcto') {
              Swal.fire({
                icon: 'success',
                title: 'Enhorabuena, tu cuenta ha sido creada.',
                showConfirmButton: false,
                timer: 3000,
                onClose: () => {
                  window.location.href = 'expediente.php'
                  $('.mainCont').addClass('animationfadeOut');
                }
              })
            }
          }
        });
      }
    }
  });
});

function validar(form) {
  const email = $(form.email).val();
  const pass = $(form.password).val();
  const passV = $(form.Cpassword).val();
  const name = $(form.nombre).val();
  const last = $(form.apellido).val();

  const vEmail = validator.isEmail(email);
  const vPass = validator.equals(pass, passV);
  const vPassE = validator.isEmpty(pass);
  const vCPassE = validator.isEmpty(passV);
  const vName = validator.isEmpty(name);
  const vLast = validator.isEmpty(last);
  const vpassN = validator.isLength(pass,{min:6});

  if (vEmail && vPass && !vCPassE && !vPassE && !vName && !vLast && vpassN) {
    return true
  } else {
    return false
  }
}