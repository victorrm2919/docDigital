<?php 
//control para abrir paginas unicamente logeado
function usuario_autenticado() {

    if (!revisar_usuario()) {
        header('Location:login.php?user=paciente');
        exit();
    }
}

function revisar_usuario() {
    //valida que halla una sesion iniciada
    return isset($_SESSION['email']);  //valida que exista un email en session
}

session_start();  //arranca la sesion, sin necesidad de estar logenado en cualquier pagina

usuario_autenticado();



