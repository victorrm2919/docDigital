$(function () {
 

    /* -------------------------------------------Eventos-------------------------------------------  */
  
    /* guardar info base, crear usuarios*/
     $('#guardar-registro').on('submit', function (e) {
      e.preventDefault();
      const arrb = ($("#email").val().indexOf('@', 0) == -1)
      const puntoEm = ($("#email").val().indexOf('.', 0) == -1)
  
  
      if ($('#nombre').val() == '' || $('#apellido').val() == '' || $('#email').val() == '' || $('#password').val().length < 6 || arrb == true || puntoEm == true) {
        if (arrb == true || puntoEm == true) {
          if ($('#email').val() !== '' && $('#password').val().length > 5) {
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
        }
      } else {

      let datos = $(this).serializeArray();
      $.ajax({
        type: $(this).attr('method'),
        url:  $(this).attr('action'),
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
    });
  
  
  });