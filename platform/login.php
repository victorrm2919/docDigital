<?php 
include 'functions/functions.php';
include 'templates/header.php'; 
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
      <a href="create-account.php?user=<?php echo $tipo ?>">Ingresa aquí</a></p>
    <div class="login-wrapper">
      <h2 class="login-title">Iniciar Sesión</h2>


      <form class="col-12 col-sm-11 col-lg-10" id="login-user" method="post" action="models/model-login.php" name="login-user-form">
  
        <div class="form-floating text-muted">
          <input type="email" class="form-control " id="email" name="email" placeholder="name@example.com" require autocomplete="off">
          <label for="email" title="Email" data-title="Email">Email</label>
        </div>
  
        <div class="form-floating text-muted pass">
          <input type="password" class="form-control password" id="password" name="password" placeholder="********" require autocomplete="off">
          <label for="password">Password</label>
          <i class="fas fa-eye password-view show-password"></i>
        </div>
  
        <div class="d-flex justify-content-between align-items-center flex-wrap mt-2">
          <input type="hidden" name="tipo" value="<?php echo $_GET['user'] ?>">
          <input type="submit" class="btn login-btn" id="login" value="Entrar" >
          <a href="#!" class="forgot-password-link">¿Olvidaste tu contraseña?</a>
        </div>
      </form>

    </div>
  </div>


<?php include 'templates/footer.php'; ?>
