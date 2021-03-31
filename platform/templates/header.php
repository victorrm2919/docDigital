<?php 
$tipo = $_GET['user'];

$pagina = obtenerPaginaActual();
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
  <link rel="apple-touch-icon" href="../icon.png">

  <!-- Font Karla -->
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&amp;display=swap" rel="stylesheet">


  <!-- Icons Material -->
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
  <!-- BootStrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
  <!-- SweetAlert2 -->
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js"></script>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-bootstrap-4/bootstrap-4.css" id="theme-styles">


  <!-- CSS Custom -->
  <link rel="stylesheet" href="styles/login.css">
  <link rel="stylesheet" href="../styles/animations.css">
</head>

<body>
  <main class="mainCont">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-5 intro-section content">
          <div class="brand-wrapper">
            <img src="img/logo-invertido.png" alt="" class="logo">
          </div>
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Bienvenido a DocDigital</h1>
            <div class="infoResp col-12 d-sm-none text-center">
              <i class="fas fa-chevron-down"></i>
            </div>
            <?php if($tipo == 'paciente'): ?>
            <p class="intro-text propositos d-sm-block">
              Praesent faucibus pulvinar consequat. Duis quis convallis nibh. Mauris volutpat
              malesuada lorem, a mattis mauris aliquam a. Cras ullamcorper felis viverra dolor commodo dictum. Fusce sed
              bibendum quam. In hac habitasse platea dictumst. Sed eu dictum ipsum. Sed porta, sem ut maximus tristique,
              nulla ex suscipit ligula, ac dapibus metus nulla porttitor turpis.
            </p>
            <button type="submit" id="read-more" class="btn btn-read-more">Saber Más</button>
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

          </div>
          <div class="intro-section-footer d-none d-sm-block">
            <p>&copy;Copyright 2021 Sactiva-DocDigital</p>
          </div>
        </div>
