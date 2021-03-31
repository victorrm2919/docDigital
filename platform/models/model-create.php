<?php 
require_once '../functions/db_conexion.php';  /* DataBase */

// if (!isset($_POST['registro'])) {
//     die(header('Location: create-account.php?user=paciente'));
// }

if ($_POST['registro'] == 'nuevo') {
    $nombres = $_POST['name'];
    $apellido = $_POST['last'];
    $email = $_POST['email'];
    $pass = $_POST{'password'};
    $tipo = $_POST{'tipo'};

    $opciones = [
        'costo' => 12,
    ];
    $password = password_hash($pass, PASSWORD_BCRYPT, $opciones);

    try {
        if ($tipo == 'doctor') {
            $stmt = $conn->prepare("INSERT INTO doctor (nombres, apellidos, email, pass) VALUES (?, ?, ?, ?)");
        }elseif ($tipo == 'paciente') {
            $stmt = $conn->prepare("INSERT INTO paciente (nombres, apellidos, email, pass) VALUES (?, ?, ?, ?)");
        }
        $stmt->bind_param("ssss", $nombres, $apellido, $email, $password);
        $stmt->execute();
        if($stmt->affected_rows > 0 ){
            $respuesta = array(
                'respuesta' => 'correcto',
                'tipo' => $tipo,
                'registro' => 'Nuevo'
            );
        }else {
            $respuesta = array(
                'respuesta' => 'Error',
                'tipo' => tipo,
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
