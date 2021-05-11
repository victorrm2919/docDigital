<?php 
include '../functions/sessions.php' 
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="../icon.png">
  <title>Formulario</title>


  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

  <!-- DatePicker -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.css"
    integrity="sha512-YdYyWQf8AS4WSB0WWdc3FbQ3Ypdm0QCWD2k4hgfqbQbRCJBEgX0iAegkl2S1Evma5ImaVXLBeUkIlP6hQ1eYKQ=="
    crossorigin="anonymous" />

  <!-- SweetAlert2 -->
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js"></script>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-bootstrap-4/bootstrap-4.css" id="theme-styles">

  <!-- Select2 -->
  <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="assets/styles/select2-bootstrap4.min.css" />

  <!-- remodal -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.css" integrity="sha512-LVOzFPLcBUppn3NOx8FXJkh2TawWu/jk9ynbntKID6cjynQsfqmHlUbH72mjAwZXsu0LOLw26JoiC0qHJde70Q==" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css" integrity="sha512-jRxwiuoe3nt8lMSnOzNEuQ7ckDrLl31dwVYFWS6jklXQ6Nzl7b05rrWF9gjSxgOow5nFerdoN6CBB4gY5m5nDw==" crossorigin="anonymous" />

  <!--Section style-->
  <link rel="stylesheet" href="../assets/styles/animations.css" />
  <link rel="stylesheet" href="assets/styles/exp.css" />

</head>

<body class="animate animationfadeIn">
  <header>
    <nav class="navbar navbar-expand navbar-light bg-white border-bottom shadow-sm">
      <div class="container">
        <a class="navbar-brand m-0">
          <img class="navimg" src="assets/img/Logo-SAC.png">
        </a>

        <div class="d-flex w-100 justify-content-between align-items-center">
          <a class="nav-link text-dark text-start">Información del Usuario</a>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link TextS closeSession" id="cerrar-sesion" href="javascript:;" title="Cerrar Sesión">
                <span class="d-md-inline d-none">Cerrar Sesión</span> <i class="fas fa-sign-out-alt"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>

  </header>