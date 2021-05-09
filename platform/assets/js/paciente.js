$(function () {
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


    //********************PACIENTE***************************************** */
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
            sexo: {
                required: true
            },
            estadoCivil: {
                required: true
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
            direccion: {
                required: true
            },
            cp: {
                required: true
            },
            colonia: {
                required: true
            },
            estadoDom: {
                required: true
            },
            municipioDom: {
                required: true
            },
            numeroPersonal: {
                required: true,
                minlength: 10
            },
            escolaridad: {
                required: true
            },
            ocupacion: {
                required: true
            },
            profesion: {
                required: true
            },
            religion: {
                required: true
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
            sexo: {
                required: "Seleccione un opción"
            },
            estadoCivil: {
                required: "Seleccione un opción"
            },
            fechaNacimiento: {
                required: "Ingrese su fecha de nacimiento",
            },
            edad: {
                required: "Ingrese su fecha de nacimiento",
            },
            estadoNacimiento: {
                required: "Seleccione su estado de nacimiento",
            },
            municipioNacimiento: {
                required: "Seleccione su municipio de nacimiento",
            },
            direccion: {
                required: "Ingrese su domicilio."
            },
            colonia: {
                required: "Seleccione una opción"
            },
            estadoDom: {
                required: "Este campo es requerido"
            },
            municipioDom: {
                required: "Este campo es requerido"
            },
            numeroPersonal: {
                required: 'Ingrese su numero telefonico personal',
                minlength: 'Ingrese el numero a 10 digitos'
            },
            escolaridad: {
                required: "Seleccione una opción"
            },
            ocupacion: {
                required: "Seleccione una opción"
            },
            profesion: {
                required: "Este campo es requerido"
            },
            religion: {
                required: "Este campo es requerido"
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
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid mb-2');;
        }
    });



    /* Conexion Ajax Paciente*/
    $('#infoUsuario').on('submit', function (e) {
        e.preventDefault();

        if (!document.querySelector('.is-invalid')) {
            $('#guardar-registro').val('guardar');

            const datos = $(this).serializeArray();

            $.ajax({
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                data: datos,
                dataType: "json",
                success: function (data) {
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

    var array_fecha = fecha.split("-")

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