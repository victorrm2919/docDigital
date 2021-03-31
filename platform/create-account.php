<?php 
include 'functions/functions.php';
include 'templates/header.php'; 
?>

<div class="col-sm-7 form-section animate animationfadeIn">
  <p class="login-wrapper-signup-text">¿Ya tienes una cuenta? <a href="login.php?user=<?php echo $tipo ?>">Inicia Sesión</a></p>
  <div class="login-wrapper">
    <h2 class="login-title">Crea una cuenta</h2>

    <form class="col-12 col-sm-11 col-lg-10" name="crear-registro" id="guardar-registro" method="post" action="models/model-create.php">

      <div class="form-group d-xl-flex justify-content-between">
        <div class="form-floating text-muted col-xl-6 col-12 w49">
          <input type="text" class="form-control" id="floatingInput" name="name" placeholder="Juan Perez">
          <label for="floatingInput" title="Nombre(s)" data-title="Nombre(s)">Nombre(s)</label>
        </div>

        <div class="form-floating text-muted col-xl-6 col-12 w49">
          <input type="text" class="form-control" id="floatingInput" name="last" placeholder="Juan Perez">
          <label for="floatingInput" title="Apellidos" data-title="Apellidos">Apellidos</label>
        </div>
      </div>

      <div class="form-floating mb-3 text-muted">
        <input type="email" class="form-control" id="floatingInput" name="email" placeholder="name@example.com">
        <label for="floatingInput" title="Email" data-title="Email">Email</label>
      </div>

      <div class="form-floating text-muted pass">
        <input type="password" class="form-control password" id="floatingPassword" name="pass" placeholder="Password">
        <label for="floatingPassword">Password</label>
        <i class="fas fa-eye password-view show-password"></i>
      </div>

      <div class="form-floating text-muted pass">
        <input type="password" class="form-control rpassword" id="floatingPassword" placeholder="Repite tu Password">
        <label for="floatingPassword">Repite tu Password</label>
      </div>

      <div class="">
        <input type="hidden" name="registro" value="nuevo">
        <input type="hidden" name="tipo" value="<?php echo $_GET['user'] ?>">
        <input type="submit" name="login" id="login" class="btn login-btn" value="Crear Cuenta">
      </div>

    </form>

  </div>
</div>


<?php include 'templates/footer.php'; ?>
