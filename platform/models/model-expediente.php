<?php 
require_once '../../functions/db_conexion.php';  /* DataBase */

// if (!isset($_POST['registro'])) {
//     die(header('Location: create-account.php?user=paciente'));
// }

if ($_POST['registro'] == 'guardar') {
    try {
        if ($_POST['tipo'] == 'paciente') {
            $user = $_POST['user'];
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

            $stmt = $conn->prepare("INSERT INTO expedientes_pac(sexo,estadoCivil,fechaNac,edad,edoNac,munNac,dir,cp,col,edo,mun,telP,eduPro,ocu,prof,relig,refPer,telRefP,id_pac) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
            $stmt->bind_param("sssisssisssisssssii", $sexo,$estadoCivil,$fechaN,$edad,$edoNac,$munNac,$direcion,$cp,$col,$edo,$mun,$telP,$eduPro,$ocu,$prof,$relig,$refPer,$telRefP,$user);
            $stmt->execute();
            if($stmt->affected_rows > 0 ){
                $respuesta = array(
                    'respuesta' => 'correcto',
                    'registro' => 'Nuevo'
                );
            }else {
                $respuesta = array(
                    'respuesta' => 'Error',
                    'stmt' => $stmt->error
                );
            }
            $stmt->close();
            $conn->close();
        }else if ($_POST['tipo'] == 'doctor') {

            $user = $_POST['user'];
            $curp = $_POST['curp'];
            $rfc = $_POST['RFC'];
            $hc = $_POST['homoC'];
            $telPer = $_POST['numeroPersonal'];
            $direc = $_POST['direccion'];
            $cp = $_POST['cp'];
            $col = $_POST['colonia'];
            $edo = $_POST['estadoDom'];
            $mun = $_POST['municipioDom'];
            $telCons = $_POST['numeroConsult'];
            $uni = $_POST['nomUni'];
            $titulo = $_POST['carrera'];
            $cedProf = $_POST['cedProf'];
            $esp = $_POST['nombreEspecialidad'];
            $cedEsp = $_POST['cedProfEsp'];
            $costoCons = $_POST['costoCons'];
            $clabe = $_POST['clabe'];
            
            /* Nombre firma */
            $nombre = $_POST['nombreC'];
            $arryNombre = explode(' ',$nombre);
            $nombreImg = substr($arryNombre[0],0,3).substr($arryNombre[1],0,3).'-'.$user.'.jpg';


            /* Sube img modificada */
            $subir = uploadImgBase64($_POST['firmaDig'], $nombreImg);

            $stmt = $conn->prepare("INSERT INTO expedientes_doc(curp,rfc,hc,telPer,direc,cp,col,edo,mun,telCons,uni,titulo,cedProf,esp,cedEsp,costoCons,clabe,url_firma,id_doc) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
            $stmt->bind_param("sssisisssissisisisi", $curp,$rfc,$hc,$telPer,$direc,$cp,$col,$edo,$mun,$telCons,$uni,$titulo,$cedProf,$esp,$cedEsp,$costoCons,$clabe,$nombreImg,$user);
            $stmt->execute();
            if($stmt->affected_rows > 0 ){

                $respuesta = array(
                    'respuesta' => 'correcto',
                    'img_resultado' => $subir,
                    'registro' => 'Nuevo'
                );
            }else {
                $respuesta = array(
                    'respuesta' => 'Error',
                    'stmt' => $stmt->error
                );
            }
            $stmt->close();
            $conn->close();
        }
    } catch (Exception $e) {
        echo "Error.." . $e->getMessage();
        $respuesta = array(
            'error' => $e
        );
    }

    die(json_encode($respuesta));
}

if ($_POST['registro'] == 'perfil') {
    $usuario = $_POST['user'];
    $claveEsp = $_POST['nombreEspecialidad'];


    try {
    $stmt2 = $conn->prepare("INSERT INTO perfiles (doctor, clave_esp) VALUES (?, ?)");
    $stmt2->bind_param("is", $usuario,$claveEsp);
    $stmt2->execute();

    if($stmt2->affected_rows > 0 ){
        session_start();
        $_SESSION['foto'] = 'default-avatar.png';

        $respuesta = array(
            'respuesta' => 'correcto',
            'registro' => 'Perfil'
        );
    }else {
        $respuesta = array(
            'respuesta' => 'Error',
            'stmt' => $stmt2->error
        );
    }
    $stmt2->close();
    $conn->close();

    } catch (Exception $e) {
        echo "Error.." . $e->getMessage();
        $respuesta = array(
            'error' => $e
        );
    }

    die(json_encode($respuesta));
}



function uploadImgBase64 ($base64, $name){
    $directorio ='../../assets/contents/firmas/';
    
    if(!is_dir($directorio)) {   /* Valida direcctorio */
        mkdir($directorio, 0755, true);  /* crea directorio con permisos en caso de no estar */
    }

    // decodificamos el base64

    $datosBase64 = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64));

    $im = imagecreatefromstring($datosBase64);  //convertir a imagen

    if ($im !== false) {
        imagejpeg($im, $directorio.$name); //guardar a la carpeta
        imagedestroy($im); //liberar memoria
        return 'Ok';
    }
    else {
        return 'Error';
    }


}