<?php 
require_once '../functions/db_conexion.php';  /* DataBase */
// if (!isset($_POST['usuario'])) {
//     die(header('Location: error.php'));
// }

$usuario = $_POST['email'];
$pass = $_POST['password'];

if (isset($_POST['tipo'])) {
    try {
         //Seleccionar el usurio en el base de datos
         if ($_POST['tipo'] == 'doctor') {
            $stmt = $conn->prepare("SELECT id, nombres, apellidos, email, password FROM doctor WHERE email = ?");
         }elseif ($_POST['tipo'] == 'paciente') {
            $stmt = $conn->prepare("SELECT id, nombres, apellidos, email, password FROM paciente WHERE email = ?");
         }
         $stmt->bind_param("s", $usuario);
         $stmt->execute();
         $stmt->bind_result($id_usuarioDB, $nombreBD, $apellidoBD, $emailBD, $pass_usuarioDB); //resultados de la consulta y asigna a variables declaradas
         $stmt->fetch();
         if ($emailBD) {
             //el usuario existe y verificara el password
             if (password_verify($pass, $pass_usuarioDB)) {
                 //iniciar la sesion
                 session_start();
                 $_SESSION['email'] = $emailBD;
                 $_SESSION['nombre'] = $nombreBD;
                 $_SESSION['apellido'] = $apellidoBD;
                 $_SESSION['id'] = $id_usuarioDB;
                 $_SESSION['login'] = true;
                 $_SESSION['tipo'] = $_POST['tipo'];
                 //login correcto
                 $respuesta = array(
                     'respuesta' => 'correcto',
                     'nombre' => $nombreBD . ' ' . $apellidoBD,
                     'tipo' => $_POST['tipo']
                 );
             } else {
                 //login incorrecto
                 $respuesta = array(
                     'respuesta' => 'Password incorrecto'
                 );
             }
             
         } else {
             $respuesta = array(
                 'error' => 'Usuario no existe'
             );
         }
        $stmt->close();
        $conn->close();
    } catch (Exception $e) {
        echo "Error.." . $e->getMessage();
    }

    die(json_encode($respuesta));
}