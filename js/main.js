window.addEventListener("load", function() {

    document.querySelector('.closeSession').addEventListener('click', () =>{
        Swal.fire({
            title: 'Cerrando Sesion ...',
            position: 'center',
            showConfirmButton: false,
            timer: 4000,
            didOpen: () => {
                Swal.showLoading()
            }
          })
    })



});