$(function () {
    $('.index .sidebar .sidebar-wrapper .navsid li:nth-child(1)').addClass('active');
    $('.pacientes .sidebar .sidebar-wrapper .navsid li:nth-child(2)').addClass('active');
    $('.calendario .sidebar .sidebar-wrapper .navsid li:nth-child(3)').addClass('active');

    $('#p1').addClass('active show');
    $('#p1-tab').addClass('active');


    /* Cerrar Sesion */

//   $('.closeSession').click(function (e) {
//     Swal.fire({
//       title: 'Cerrando Sesion ...',
//       position: 'center',
//       showConfirmButton: false,
//       timer: 4000,
//       didOpen: () => {
//         Swal.showLoading()
//       },
//       willClose: () => {
//         window.location.href = './platform/logout.php';
//       }
//     })
//   });
    
});