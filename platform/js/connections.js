$(function () {
 

    /* -------------------------------------------Eventos-------------------------------------------  */
  
    /* guardar info base, crear usuarios*/
    $('#guardar-registro').on('submit', function (e) {
      e.preventDefault();
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
                window.location.href = 'registro-'+ data.tipo + '.php'
                $('.mainCont').addClass('animationfadeOut');
              }
            })
          }
        }
      });
    });
  
  
  });