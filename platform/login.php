<?php 
session_start();
include '../functions/functions.php';
include 'templates/login/header.php'; 

if ($tipo == "paciente") {
 $tipoR = 'doctor';
}else {
  $tipoR = 'paciente';
}
?>



  <div class="col-sm-7 form-section animate animationfadeIn">
    <p class="login-wrapper-signup-text">
      <?php 
      
      if ($tipo == 'paciente'):
        echo '¿Necesitas una cuenta?';     
      elseif ($tipo == 'doctor'):
        echo '¿Quieres colaborar?';
      endif
      
      ?>
      <a href="create-account.php?user=<?php echo $tipo ?>" class="alert-link">Ingresa aquí</a></p>

    <div class="login-wrapper h-75">
      <div class="iconB mb-1">
        <?php
        if ($tipo == 'paciente') {
          echo '<i class="fas fa-user"></i>';
        } else {
          echo '<i class="fas fa-user-md"></i>';
        }
        ?>
      </div>

      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a href="login.php?user=paciente" class="nav-link nav-paciente">Soy Paciente</a>
        <a href="login.php?user=doctor" class="nav-link nav-doctor">Soy Doctor</a>
      </div>  

      <div class="tab-content mt-4">
        <form class="col-12 col-sm-11 col-lg-10 m-auto" id="login-user" method="post" action="models/model-login.php"
          name="login-user-form">

          <div class="form-floating text-muted">
            <input type="email" class="form-control " id="email" name="email" placeholder="name@example.com" require
              autocomplete="off">
            <label for="email" title="Email" data-title="Email">Email</label>
          </div>

          <div class="form-floating text-muted pass">
            <input type="password" class="form-control password" id="password" name="password" placeholder="********"
              require autocomplete="off">
            <label for="password">Password</label>
            <i class="fas fa-eye password-view show-password"></i>
          </div>

          <div class="d-flex justify-content-between align-items-center flex-wrap mt-2 mb-5">
            <input type="hidden" name="tipo" value="<?php echo $_GET['user'] ?>">
            <input type="submit" class="btn login-btn" id="login" value="Entrar">
            <a href="#!" class="forgot-password-link">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>

    </div>
  </div>


<?php include 'templates/login/footer.php'; ?>
