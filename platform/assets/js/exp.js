window.addEventListener("load", function () {

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

  /* DatePicker */

  $('[data-toggle="datepicker"]').datepicker({
    language: 'es-ES',
    autoHide: true,
    format: 'dd-mm-yyyy'
  });

  /* Select2 */
  $('#sexo').select2({
    placeholder: 'Sexo',
    minimumResultsForSearch: Infinity,
    theme: 'bootstrap4',
    language: 'es'
  });

  $('#estadoCivil').select2({
    placeholder: 'Estado Civil',
    minimumResultsForSearch: Infinity,
    theme: 'bootstrap4',
    language: 'es'
  });

  $('#estadoNacimiento').select2({
    placeholder: 'Estado',
    theme: 'bootstrap4',
    language: 'es'
  });
  $('#municipioNacimiento').select2({
    placeholder: 'Municipio',
    theme: 'bootstrap4',
    language: 'es'
  });

  $('#colonia').select2({
    placeholder: 'Colonia',
    theme: 'bootstrap4',
    language: 'es'
  });

  $('#escolaridad').select2({
    placeholder: 'Escolaridad',
    theme: 'bootstrap4',
    language: 'es',
    minimumResultsForSearch: Infinity
  });

  $('#ocupacion').select2({
    placeholder: 'Ocupación',
    theme: 'bootstrap4',
    language: 'es',
    minimumResultsForSearch: Infinity
  });

  $('#nombreEspecialidad').select2({
    placeholder: 'Especialidad',
    theme: 'bootstrap4',
    language: 'es'
  });

  /* Select's Estado y municipio */


  $.get('assets/json/estados.json', function (data) {
    for (const estado of data) {
      let optiondiv = `<option value="${estado.clave}">${estado.nombre}</option>`
      $('#estadoNacimiento').append(optiondiv);
    }
  });


  $('#estadoNacimiento').change(function () {
    let estado = $(this).val();
    $("#municipioNacimiento option").each(function () {
      $(this).remove();
    });

    $('#municipioNacimiento').append('<option></option>');

    $.getJSON('assets/json/municipios.json', function (data) {
      for (const municipio of data[estado]) {
        let mun = municipio.toUpperCase();
        let optiondiv = `<option value="${mun}">${mun}</option>`
        $('#municipioNacimiento').append(optiondiv);
      }
    });

  });

  /* Calculo Edad */
  $('input#edad').focus(function (e) {
    e.preventDefault();
    if ($('#fechaNacimiento').val() !== '') {
      let str = $('#fechaNacimiento').val();
      let edad = calcular_edad(str);
      $('input#edad').val(edad);
    }
  });

  /* Colonia */
  $('input#cp').change(function () {
    let codPost = $(this).val();
    $("#colonia option").each(function () {
      $(this).remove();
    });

    $('#municipioDom').val('');
    $('#estadoDom').val('');


    $('#colonia').append('<option></option>');

    colonia(codPost);
  });

  $('#colonia').change(function (e) {
    e.preventDefault();
    let estado = $('option:selected', this).attr('data-estado');
    let municipio = $('option:selected', this).attr('data-municipio');
    $('#municipioDom').val(municipio);
    $('#estadoDom').val(estado);
  });


  /* Listeners Buttons */

  $('#sig1').click(function (e) {
    e.preventDefault();
    let a = $(this).attr('data-active');
    let b = $(this).attr('data-page');

    let acti = '#' + a;
    let nextAct = '#' + b;

    let activeTab = `${acti}-tab`
    let nextActTab = `${nextAct}-tab`

    $(activeTab).removeClass('active');
    $(acti).removeClass('active show');

    $(nextActTab).addClass('active');
    $(nextAct).addClass('active show');

    if (a == 'confirmacion') {
      document.formInfo.submit();
    } else {
      $(this).attr('data-active', b);
      $(this).attr('data-page', 'confirmacion');
    }
  });


  /* especialidad */

  $("#especialidad").change(function () {
    if (this.checked) {
      $('.formEspecialidad').addClass('showEspecialida');
    } else {
      $('.formEspecialidad').removeClass('showEspecialida');
    }
  });


  //almacenando el div y el boton en unas variables
  let div = document.getElementById('formEspecialidad');
  let but = document.getElementById('especialidad');

  //la funcion que oculta y muestra
  function showHide(e){
  e.preventDefault();
  e.stopPropagation();
    if (especialidad.checked) {
      $('.formEspecialidad').addClass('showEspecialida');
    } else {
      $('.formEspecialidad').removeClass('showEspecialida');
    }
  }

  //al hacer click en el boton
  $(but).change(function (e) {
    showHide(e);
    $('#cedProfEsp').val('');
    $('#nombreEspecialidad').val(null).trigger('change');
  });

  //funcion para cualquier clic en el documento
  document.addEventListener("click", function (e) {
    //obtiendo informacion del DOM 
    let clic = e.target;
    let existe = document.querySelector('.showEspecialida')
    let valSelect =  $('#nombreEspecialidad').find(':selected').val();
    let valCed = $('#cedProfEsp').val();
    
    if (existe && clic != div && valSelect != '' && valCed != '') {
      $('.formEspecialidad').removeClass('showEspecialida');
    }
  }, false);

  

  /* CURP RFC */
  $('#RFC').focus(function (e) { 
    e.preventDefault();
    let curp =$('#curp').val()
    if (curp != '') {
      let rfc = curp.substring(0,10)
      $(this).val(rfc);
    }
  });

  /* ajax img */

  $('#dig').click(function (e) { 
    e.preventDefault();
    let img = new FormData(document.querySelector('#infoUsuario'));

    $.ajax({
      type: 'post',
      url: 'functions/eliminar_fondo.php',
      data: img,
      dataType: "json",
      contentType: false,
      processData: false,
      async: true,
      cache: false,
      success: function (response) {
        console.log(response);
      }
    });
  });


});


function calcular_edad(fecha) {
  hoy = new Date()

  var array_fecha = fecha.split("-")

  if (array_fecha.length != 3) {
    return false
  }
  var ano
  ano = parseInt(array_fecha[2]);

  if (isNaN(ano)) {
    return false
  }
  var mes
  mes = parseInt(array_fecha[1]);
  if (isNaN(mes)) {
    return false
  }
  var dia
  dia = parseInt(array_fecha[0]);
  if (isNaN(dia)) {
    return false
  }
  if (ano <= 99) {
    ano += 1900
  }
  edad = hoy.getFullYear() - ano - 1;

  if (hoy.getMonth() + 1 - mes < 0) {
    return edad
  }
  if (hoy.getMonth() + 1 - mes > 0) {
    return edad + 1
  }

  if (hoy.getUTCDate() - dia >= 0)
    return edad + 1

  return edad
}


function colonia(codp) {
  let endpoint_sepomex = "https://api-sepomex.hckdrk.mx/query/";
  let method_sepomex = 'info_cp/';
  let cp = codp;
  let variable_string = '?token=';
  let token = '69c0ce69-354e-4ed3-937f-83ffa416e37b'
  let url = endpoint_sepomex + method_sepomex + cp + variable_string + token;

  $.getJSON(url,
    function (data) {
      console.log(data);
      if (data.error) {
        console.log('Hubo un error!!');
      } else {
        for (const colonia of data) {
          let nColonia = colonia.response.asentamiento.toUpperCase();
          let nEstado = colonia.response.estado.toUpperCase();
          let nMunicipio = colonia.response.municipio.toUpperCase();
          let optiondiv = `<option value="${nColonia}" data-estado="${nEstado}" data-municipio="${nMunicipio}">${nColonia}</option>`;
          $('#colonia').append(optiondiv);
        }
      }
    }
  );
}