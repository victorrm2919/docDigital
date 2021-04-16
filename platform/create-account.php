<?php 
session_start();
include 'functions/functions.php';
include 'templates/login/header.php'; 
?>

<div class="col-sm-7 form-section animate animationfadeIn">
  <p class="login-wrapper-signup-text">¿Ya tienes una cuenta? <a href="login.php?user=<?php echo $tipo ?>">Inicia Sesión</a></p>
  <div class="login-wrapper">
    <h2 class="login-title">Crea una cuenta</h2>

    <form class="col-12 col-sm-11 col-lg-10 form-create" name="crear-registro" id="guardar-registro" method="post" action="models/model-create.php">

      <div class="form-group d-xl-flex justify-content-between">
        <div class="form-floating text-muted col-xl-6 col-12 w49">
          <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Juan Perez" require autocomplete="off">
          <label for="nombre">Nombre(s)</label>
        </div>

        <div class="form-floating text-muted col-xl-6 col-12 w49">
          <input type="text" class="form-control" id="apellido" name="apellido" placeholder="Juan Perez" require autocomplete="off">
          <label for="apellido">Apellidos</label>
        </div>
      </div>

      <div class="form-floating mb-3 text-muted">
        <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" require autocomplete="off">
        <label for="email">Email</label>
      </div>

      <div class="form-floating text-muted pass">
        <input type="password" class="form-control password" id="password" name="password" placeholder="Password" require autocomplete="off">
        <label for="password">Password</label>
        <i class="fas fa-eye password-view show-password"></i>
      </div>

      <div class="form-floating text-muted pass">
        <input type="password" class="form-control rpassword" id="Cpassword" name="Cpassword"  placeholder="Repite tu Password" require autocomplete="off">
        <label for="Cpassword">Repite tu Password</label>
      </div>

      <div class="">
        <input type="hidden" name="registro" value="nuevo">
        <input type="hidden" name="tipo" value="<?php echo $_GET['user'] ?>">
        <input type="submit" name="login" id="login" class="btn login-btn" value="Crear Cuenta">
      </div>

    </form>

  </div>
</div>


<?php include 'templates/login/footer.php'; ?>
