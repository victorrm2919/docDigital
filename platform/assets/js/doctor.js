$(function () {

    /* Select2 */
    $('#nombreEspecialidad').select2({
        placeholder: 'Especialidad',
        theme: 'bootstrap4',
        language: 'es'
    });



    /* especialidad */

    $('#butModal').click(function (e) {
        let esp = $('#nombreEspecialidad').val();
        let cedEsp = $('#cedProfEsp').val();
        if (esp == '' || cedEsp == '') {
            $("#especialidad").prop("checked", false);
        } else {
            $(".checkMo").attr('data-bs-toggle', '');
        }
    });

    $("#especialidad").change(function (e) {
        if (!this.checked) {
            $(".checkMo").attr('data-bs-toggle', 'modal');
            $('#nombreEspecialidad').val(null).trigger('change');
            $('#cedProfEsp').val('');
        }
    });

    //********************DOCTOR***************************************** */

    // Validacion de formulario
    $('.doctor').validate({
        rules: {
            nombreC: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            curp: {
                required: true,
                minlength: 18
            },
            RFC: {
                required: true,
                minlength: 10
            },
            homoC: {
                required: true,
                minlength: 3
            },
            numeroPersonal: {
                required: true,
                minlength: 10
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
            numeroConsult: {
                required: true,
                minlength: 10
            },
            nomUni: {
                required: true
            },
            carrera: {
                required: true
            },
            cedProf: {
                required: true,
                minlength: 7
            },
            costoCons: {
                required: true,
                number: true
            },
            tituloConsu: {
                required: true
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
            curp: {
                required: "Ingrese su CURP",
                minlength: "Ingrese su CURP correctamente"
            },
            RFC: {
                required: "Ingrese su RFC",
                minlength: "Ingrese su RFC correctamente"
            },
            homoC: {
                required: "Ingrese su homoclave",
                minlength: "Ingrese su homoclave a 3 digitos"
            },
            numeroPersonal: {
                required: 'Ingrese su numero telefonico personal',
                minlength: 'Ingrese el numero a 10 digitos'
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
            numeroConsult: {
                required: 'Ingrese el numero de contacto del consultorio',
                minlength: 'Ingrese el numero a 10 digitos'
            },
            nomUni: {
                required: "Este campo es requerido"
            },
            carrera: {
                required: "Este campo es requerido"
            },
            cedProf: {
                required: 'Ingrese su cedula profesional',
                minlength: 'Valide su cedula profesional'
            },
            costoCons: {
                required: "Coloque el precio de su consulta",
                number: "Solo numeros"
            },
            tituloConsu: {
                required: "Este campo es requerido"
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
            $(element).removeClass('is-invalid mb-2');
        }
    });


    /* Conexion Ajax Doctor */
    $('#infoUsuario').on('submit', function (e) {
        e.preventDefault();

        if (!document.querySelector('.is-invalid')) {
            $('#guardar-registro').val('guardar');

            const datos = new FormData(this);

            // console.log(datos);
            $.ajax({
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                data: datos,
                dataType: "json",
                contentType: false,
                processData: false,
                async: true,
                cache: false,
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