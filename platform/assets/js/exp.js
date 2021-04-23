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
    format: 'yyyy/mm/dd'
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

    colonia(codPost, this);
  });

  $('#colonia').change(function (e) {
    e.preventDefault();
    let estado = $('option:selected', this).attr('data-estado');
    let municipio = $('option:selected', this).attr('data-municipio');
    $('#municipioDom').val(municipio);
    $('#estadoDom').val(estado);
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
  function showHide(e) {
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
    let valSelect = $('#nombreEspecialidad').find(':selected').val();
    let valCed = $('#cedProfEsp').val();

    if (existe && clic != div && valSelect != '' && valCed != '') {
      $('.formEspecialidad').removeClass('showEspecialida');
    }
  }, false);



  /* CURP RFC */
  $('#RFC').focus(function (e) {
    e.preventDefault();
    let curp = $('#curp').val()
    if (curp != '') {
      let rfc = curp.substring(0, 10)
      $(this).val(rfc);
    }
  });

  // Check de modal

  $('.modal-footer button').click(function (e) {
    e.preventDefault();
    let origen = $(this).attr('data-origen');
    let ch = document.querySelector(origen).checked
    if (!ch) {
      $(origen).click();
    }
  });


  // Validacion de formulario
  $('.paciente').validate({
    rules: {
      nombreC: {
        required: true
      },
      email: {
        required: true,
        email: true,
      },
      fechaNacimiento: {
        required: true
      },
      edad: {
        required: true
      },
      estadoNacimiento: {
        required: true
      },
      municipioNacimiento: {
        required: true
      },
      numeroPersonal: {
        required: true,
        minlength: 10
      },
      referencia: {
        required: true
      },
      numRef: {
        required: true,
        minlength: 10
      }


    },
    messages: {
      nombreC: {
        required: "Ingrese tu nombre completo",
      },
      email: {
        required: "Ingrese tu dirección de correo",
        email: "Ingrese un correo electrónico válido"
      },
      fechaNacimiento: {
        required: "Ingrese su fecha de nacimiento",
      },
      edad: {
        required: "Ingrese su fecha de nacimiento",
      },
      estadoNacimiento: {
        required: "Selecciona tu estado de nacimiento",
      },
      municipioNacimiento: {
        required: "Selecciona tu municipio de nacimiento",
      },
      numeroPersonal: {
        required: 'Ingrese tu numero telefonico personal',
        minlength: 'Ingresa el numero a 10 digitos'
      },
      referencia: {
        required: 'Ingrese una referencia personal'
      },
      numRef: {
        required: 'Ingrese el numero telefonico de su referencia',
        minlength: 'Ingresa el numero a 10 digitos'
      }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback m-2');
      element.closest('.validForm').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid mb-2');
      $('#btnFin').attr('type', 'button');

    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid mb-2');
      $('#btnFin').attr('type', 'submit');
    },
  });


  /* Conexion Ajax */
  $('#infoUsuario').on('submit', function (e) {
    e.preventDefault();

    if (!document.querySelector('.is-invalid')) {
      $('#guardar-registro').val('guardar');

      const datos = $(this).serializeArray();
    
      // console.log(datos);
      $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: datos,
        dataType: "json",
        success: function (data) {
          console.log(data);
          if (data.respuesta === 'correcto') {
            window.location.href = '../dashboard';
          }
        }
      });
    }

  });

});


function calcular_edad(fecha) {
  hoy = new Date()

  var array_fecha = fecha.split("/")

  if (array_fecha.length != 3) {
    return false
  }
  var ano
  ano = parseInt(array_fecha[0]);

  if (isNaN(ano)) {
    return false
  }
  var mes
  mes = parseInt(array_fecha[1]);
  if (isNaN(mes)) {
    return false
  }
  var dia
  dia = parseInt(array_fecha[2]);
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
  ).fail(function (textStatus ) {
    $(obj).addClass('is-invalid');
  });

}