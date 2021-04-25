$(function () {

    /* Select2 */
    $('#nombreEspecialidad').select2({
        placeholder: 'Especialidad',
        theme: 'bootstrap4',
        language: 'es'
    });



    /* especialidad */

    $("#especialidad").change(function () {
        if (this.checked) {
            $('.formEspecialidad').addClass('showEspecialida');
        } else {
            $('.formEspecialidad').removeClass('showEspecialida');
        }
    });

    //********************DOCTOR***************************************** */

    // Btn siguiente

    $('#btnSig').click(function (e) {
        e.preventDefault();
        $('#infoConsulta').addClass('active show');
        $('#infoPaciente').removeClass('active show');
        $('#infoPaciente-tab').removeClass('active');
        $('#infoConsulta-tab').addClass('active');

    });


});