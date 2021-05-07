<?php 


include 'templates/exp/header.php' ;

// echo $_SESSION['nombre'];
$nombreC= $_SESSION['nombre'] . ' '. $_SESSION['apellido'];
?>



<main role="main" class="pb-3 container-md">
  <!-- Cuerpo Formulario -->
  <div class="container body-content">
    <div class="tab-content pt-3">
      <!--Encanezados pestañas formularios-->
      <div class="tab-pane show active" id="paciente" role="tabpanel" aria-labelledby="paciente-tab">
        <div class="container">
          <!-- Secuencia Llenado -->
          <ul class="nav nav-pills mb-3 n-cursor" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="infoPaciente-tab" type="button">Información General</button>
            </li>
          </ul>
          <!-- Fin llenado -->

          <!-- Formularios de captura -->
          <form class="tab-content pt-2 <?php echo $_SESSION['tipo']?>" id="infoUsuario" action="models/model-expediente.php" method="post" name="formInfo">

            <?php 
              if($_SESSION['tipo']== 'doctor') {
                include 'templates/exp/doctor.php';
              }elseif($_SESSION['tipo']== 'paciente') {
                include 'templates/exp/paciente.php';
              }
              ?>
          </form>

          <div class="row justify-content-end mt-5">
            <div class="col-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="aviPriva" required>
                <label class="form-check-label" for="aviPriva">
                  He leido el <a href="" data-remodal-target="privacy">Aviso de Privacidad</a>.
                </label>
              </div>
            </div>
            <!-- Modal -->
            <div class="remodal" data-remodal-id="privacy">
              <button data-remodal-action="close" class="remodal-close"></button>
              <h2>Aviso de Privacidad</h2>
              <p class="hP">
                <?php require 'assets/docs/PRIVACY_SACTIVA' ?>
              </p>
              <div class="mfooter text-end">
                <button type="button" class="btn btn-primary" data-remodal-action="confirm" class="remodal-confirm" data-origen="#aviPriva">Aceptar</button>
              </div>  
            </div>
          </div>




          <div class="row">
            <input type="hidden" name="user" value="<?php echo $_SESSION['id']?>" form="infoUsuario">
            <input type="hidden" name="tipo" value="<?php echo $_SESSION['tipo']?>" form="infoUsuario">
            <input type="hidden" id="guardar-registro" name="registro" value ="" form="infoUsuario">
            <div class="col-12 mt-4 mb-3 text-end divS">
  
              <button class="btn btn-success" id="btnFin" form="infoUsuario" type="submit">Guardar</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</main>



<?php include 'templates/exp/footer.php' ?>