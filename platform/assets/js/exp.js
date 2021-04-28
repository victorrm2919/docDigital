$(function () {
  /* Expediente*/


  /* Cerrar Sesion */

  $('.closeSession').click(function (e) {
    Swal.fire({
      title: 'Cerrando Sesion ...',
      position: 'center',
      showConfirmButton: false,
      timer: 4000,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    Location.href = 'logout.php';
  });

  /* Select2 */
  $('#colonia').select2({
    placeholder: 'Colonia',
    theme: 'bootstrap4',
    language: 'es'
  });

  /* Colonia */
  $('input#cp').focusout(function () {
    let codPost = $(this).val();
    $('#colonia').prop("disabled", true);
    $('.loading').removeClass('d-none');
    setTimeout(() => {
      $("#colonia option").each(function () {
        $(this).remove();
      });

      $('#municipioDom').val('');
      $('#estadoDom').val('');

      $('#colonia').append('<option></option>');

      colonia(codPost, this);
      $('.loading').addClass('d-none');
      $('#colonia').prop("disabled", false);
    }, 1000)
  });

  $('#colonia').change(function (e) {
    e.preventDefault();
    let estado = $('option:selected', this).attr('data-estado');
    let municipio = $('option:selected', this).attr('data-municipio');
    $('#municipioDom').val(municipio);
    $('#estadoDom').val(estado);
  });


  /* CURP RFC */
  $('#RFC').focus(function (e) {
    e.preventDefault();
    let curp = $('#curp').val()
    if (curp != '') {
      let rfc = curp.substring(0, 10)
      $(this).val(rfc);
    }
  });

});



function colonia(codp, obj) {
  let endpoint_sepomex = "https://api-sepomex.hckdrk.mx/query/";
  let method_sepomex = 'info_cp/';
  let cp = codp;
  let variable_string = '?token=';
  let token = '69c0ce69-354e-4ed3-937f-83ffa416e37b'
  let url = endpoint_sepomex + method_sepomex + cp + variable_string + token;

  $.getJSON(url,
    function (data, textStatus) {
      if (!textStatus) {
        console.log('Hubo un error!!');
      } else {
        for (const colonia of data) {
          let nColonia = colonia.response.asentamiento.toUpperCase();
          let nEstado = colonia.response.estado.toUpperCase();
          let nMunicipio = colonia.response.municipio.toUpperCase();
          let optiondiv = `<option value="${nColonia}" data-estado="${nEstado}" data-municipio="${nMunicipio}">${nColonia}</option>`;
          $('#colonia').append(optiondiv);
          $(obj).removeClass('is-invalid');
        }
      }
    }
  ).fail(function (textStatus) {
    $(obj).addClass('is-invalid');
  });

}