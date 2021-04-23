<?php 
require_once '../functions/db_conexion.php';  /* DataBase */

// if (!isset($_POST['registro'])) {
//     die(header('Location: create-account.php?user=paciente'));
// }

if ($_POST['registro'] == 'guardar') {
    try {
    
    if ($_POST['tipo'] == 'paciente') {
        $sexo = $_POST['sexo'];
        $estadoCivil = $_POST['estadoCivil'];
        $fechaN = $_POST['fechaNacimiento'];
        $edad = $_POST['edad'];
        $edoNac = $_POST['estadoNacimiento'];
        $munNac = $_POST['municipioNacimiento'];
        $direcion = $_POST['direccion'];
        $cp = $_POST['cp'];
        $col = $_POST['colonia'];
        $edo = $_POST['estadoDom'];
        $mun = $_POST['municipioNacimiento'];
        $telP = $_POST['numeroPersonal'];
        $eduPro = $_POST['escolaridad'];
        $ocu = $_POST['ocupacion'];
        $prof = $_POST['profesion'];
        $relig = $_POST['religion'];
        $refPer = $_POST['referencia'];
        $telRefP = $_POST['numRef'];
        $user = $_POST['user'];

        $stmt = $conn->prepare("INSERT INTO expedientes_pac(sexo,estadoCivil,fechaNac,edad,edoNac,munNac,dir,cp,col,edo,mun,telP,eduPro,ocu,prof,relig,refPer,telRefP,id_pac) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("sssisssisssisssssii", $sexo,$estadoCivil,$fechaN,$edad,$edoNac,$munNac,$direcion,$cp,$col,$edo,$mun,$telP,$eduPro,$ocu,$prof,$relig,$refPer,$telRefP,$user);
        
    }
    
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
                'tipo' => $_POST['tipo']
            );
        }else {
            $respuesta = array(
                'respuesta' => 'Error',
                'error' => $stmt->error
            );
        }
        $stmt->close();
        $conn->close();
    } catch (Exception $e) {
        echo "Error.." . $e->getMessage();
        $respuesta = array(
            'error' => $e
        );
    }

    die(json_encode($respuesta));
    
}