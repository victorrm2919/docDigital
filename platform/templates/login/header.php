<?php 
$pagina = obtenerPaginaActual();


if (!revisar_pagina_login()) {
  header("Location:${pagina}.php?user=paciente");
  exit();
}

$tipo = $_GET['user'];


if($pagina !== 'login' && $pagina !== 'create-account') {
  include 'functions/sessions.php';
}
?>

<!DOCTYPE HTML>
<html class="no-js" lang="es">

<head>
  <meta charset="utf-8">
  <title>Iniciar Sesión</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="manifest" href="../site.webmanifest">
  <link rel="shortcut icon" href="../icon.png">

  <!-- Font Karla -->
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&amp;display=swap" rel="stylesheet">

  <!-- BootStrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
  <!-- SweetAlert2 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-bootstrap-4/bootstrap-4.css" id="theme-styles">
  <!-- CSS Custom -->
  <link rel="stylesheet" href="assets/styles/login.css">
  <link rel="stylesheet" href="../assets/styles/animations.css">
</head>

<body>
  <main class="mainCont animate animationfadeIn">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-5 intro-section content intro-<?php echo $tipo ?>">
          <div class="brand-wrapper">
            <a href="../"><img src="assets/img/logo-invertido.png" alt="" class="logo"></a>
          </div>
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Bienvenido a DocDigital</h1>
            <?php if($tipo == 'paciente'): ?>
            <p class="intro-text propositos d-sm-block">
            Si queremos que la salud para todos sea una realidad, necesitamos: personas y comunidades que tengan acceso a servicios de salud de alta calidad para que puedan cuidar de su propia salud y de la salud de sus familiares; profesionales sanitarios cualificados que proporcionen una atención de calidad centrada en las personas; y responsables de la formulación de políticas comprometidos a invertir en la atención primaria de la salud. (ONU, 2019)
            </p>
            <a href="../" id="read-more" class="btn btn-read-more">Saber Más</a>
            <?php endif ?>


            <?php if($tipo == 'doctor'): ?>
            <div class="propositos d-sm-block">
              <div class="obj">
                <div class="icon col-2"><i class="far fa-calendar-alt"></i></div>
                <p class="intro-text col-10">Administre sus propias consultas.</p>
              </div>
              <div class="obj">
                <div class="icon col-2"><i class="fas fa-file-medical-alt"></i></div>
                <p class="intro-text col-10"> Registro completo de su paciente.</p>
              </div>
              <div class="obj">
                <div class="icon col-2"><i class="fas fa-video"></i></div>
                <p class="intro-text col-10"> Servicio por videollamada, no se preocupe por salir.</p>
              </div>
              <div class="obj">
                <div class="icon col-2"><i class="fas fa-globe-americas"></i></div>
                <p class="intro-text col-10"> Extienda el alcance de su servicio.</p>
              </div>
            </div>
            <?php endif ?>

            <div class="infoResp col-12 d-sm-none text-center">
              <i class="fas fa-chevron-down"></i>
            </div>

          </div>
          <div class="intro-section-footer d-none d-sm-block">
            <p>&copy;Copyright 2021 Sactiva-DocDigital</p>
          </div>
        </div>
