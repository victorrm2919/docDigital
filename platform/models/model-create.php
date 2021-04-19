<?php 
require_once '../functions/db_conexion.php';  /* DataBase */

// if (!isset($_POST['registro'])) {
//     die(header('Location: create-account.php?user=paciente'));
// }

if ($_POST['registro'] == 'nuevo') {
    $email = $_POST['email'];
    $nombre = $_POST['nombre'];
    $apellido =$_POST['apellido'];
    $pass = $_POST['password'];
    $tipo = $_POST['tipo'];
    

    $opciones = array('costo' => 12);
    $password = password_hash($pass, PASSWORD_BCRYPT, $opciones);

    try {

        if ($tipo == 'doctor') {
            $stmt = $conn->prepare("INSERT INTO doctor (nombres, apellidos, email, password) VALUES (?, ?, ?, ?)");
        }elseif ($tipo == 'paciente') {
            $stmt = $conn->prepare("INSERT INTO paciente (nombres, apellidos, email, password) VALUES (?, ?, ?, ?)");
        }

        $stmt->bind_param("ssss", $nombre, $apellido, $email, $password);
        $stmt->execute();
        if($stmt->affected_rows > 0 ){
            session_start();
            $_SESSION['email'] = $email;
            $_SESSION['nombre'] = $nombre;
            $_SESSION['apellido'] = $apellido;
            $_SESSION['id'] = $stmt->insert_id;
            $_SESSION['tipo'] = $tipo;
            $_SESSION['login'] = true;


            $respuesta = array(
                'respuesta' => 'correcto',
                'tipo' => 'Doctor',
                'registro' => 'Nuevo'
            );
        }else {
            $respuesta = array(
                'respuesta' => 'Error',
                'tipo' => 'Doctor',
                'registro' => 'Nuevo',
                'info' =>$stmt->error
            );
        }
        $stmt->close();
        $conn->close();
    } catch (Exception $e) {
        echo "Error.." . $e->getMessage();
    }

    die(json_encode($respuesta));
}



/* Validacion de correo al ingresar */
if ($_POST['registro'] == 'validar-correo') {
    $email = $_POST['correoV'];
    $tipo = $_POST['tipo'];

    try {
        $sql = "SELECT id FROM `$tipo` WHERE email = '$email'";
        $resultado = $conn->query($sql);
    } catch (Exception $e) {
        echo "Error.." . $e->getMessage();
    }

    if ($resultado->fetch_assoc() == null) {
        $respuesta = array(
            'respuesta' => 'Ok',
        );
    }else {
        $respuesta = array(
            'respuesta' => 'existe',
        );
    }
    
    die(json_encode($respuesta));
}
