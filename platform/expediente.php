<?php 


include 'templates/exp/header.php' ;

// echo $_SESSION['nombre'];
$nombreC= $_SESSION['nombre'] . ' '. $_SESSION['apellido']

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
              <button class="nav-link active" id="infoPaciente-tab" type="button">Información Personal</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="datosPago-tab" type="button">Información de Pago</button>
            </li>
          </ul>
          <!-- Fin llenado -->

          <!-- Formularios de captura -->
          <form class="tab-content pt-2" id="infoUsuario" action="" method="post" name="formInfo">

            <?php 
              if($_SESSION['tipo']== 'doctor') {
                include 'templates/exp/doctor.php';
              }elseif($_SESSION['tipo']== 'paciente') {
                include 'templates/exp/paciente.php';
              }
              ?>

          </form>

          <div class="row">
            <input type="hidden" name="tipo" value="<?php echo $_SESSION['tipo']?>" form="formInfo">

            <div class="col-6 mt-4 mb-3 text-start d-none divA">
              <button class="btn btn-primary" id="ant1" data-page="infoPaciente"
                data-active="datosPago">Anterior</button>
            </div>

            <div class="col-12 mt-4 mb-3 text-end divS">
              <button class="btn btn-primary" id="sig1" data-page="datosPago" data-active="infoPaciente"
                form="formInfo">Siguiente</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</main>


<?php include 'templates/exp/footer.php' ?>