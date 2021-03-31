$(function () {

       $('#login-user').on('submit', function (e) {
         e.preventDefault();
         if ($('#usuario').val() !== '' || $('#password').val() > 6) {
            let datos = $(this).serializeArray();
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
                      console.log(data);
                      if (data.respuesta === 'correcto') {
                      
                        Swal.fire({
                          icon: 'success',
                          title: 'Inicio Correcto',
                          text: `Bienvenido ${data.nombre}`,
                          showConfirmButton: false,
                          timer: 1500,
                          timerProgressBar: true,
                          willClose: () => {
                            // window.location.href = 'index.php';
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
      
      
      
        // $('#cerrar-sesion').click(function (e) {
        //   window.location.href = 'login.php?cerrar_sesion=true';
        // })
  });