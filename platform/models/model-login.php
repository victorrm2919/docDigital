<?php 
require_once '../functions/db_conexion.php';  /* DataBase */
// if (!isset($_POST['usuario'])) {
//     die(header('Location: error.php'));
// }

$email = $_POST['email'];
$pass = $_POST['password'];
$tipo =$_POST['tipo'];


if (isset($_POST['tipo'])) {
    try {
         //Seleccionar el usurio en el base de datos
         $stmt = $conn->prepare("SELECT id, nombres, email, pass FROM doctor WHERE email = ?");
         $stmt->bind_param("s", $email);
         $stmt->execute();
         $stmt->bind_result($idDB, $nombresDB, $emailDB, $passDBB); //resultados de la consulta y asigna a variables declaradas
         $stmt->fetch();
         if ($emailDB) {
             //el usuario existe y verificara el password
             $passVerify = password_verify($pass, $passDBB);
             if ($passVerify) {
                 //iniciar la sesion
                 session_start();
                 $_SESSION['nombre'] = $nombresDB;
                 $_SESSION['email'] = $emailDB;
                 $_SESSION['nivel'] = $tipo;
                 $_SESSION['id'] = $idDB;
                 $_SESSION['login'] = true;
                 //login correcto
                 $respuesta = array(
                     'respuesta' => 'correcto',
                     'nombre' => $emailDB,
                     'tipo' => 'login'
                 );
             } else {
                 //login incorrecto
                 $respuesta = array(
                     'respuesta' => 'Password incorrecto',  /* 'Validar los datos ingresados' */
                     'veify' =>$passVerify 
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