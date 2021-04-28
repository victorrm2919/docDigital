$(function () {
    
    $('.closeSession').click(function (e) {
        Swal.fire({
          title: 'Cerrando Sesion ...',
          position: 'center',
          showConfirmButton: false,
          timer: 3000,
          didOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
            window.location.href = '/DocDigital/platform/logout.php';
          }

        })
        // Location.href = '/platform/logout.php';
      });

});