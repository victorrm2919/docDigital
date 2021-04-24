  <!--datos paciente-->
  <div class="tab-pane show active animate animationfadeIn mb-3" id="infoPaciente" role="tabpanel"
    aria-labelledby="infoPaciente-tab">
    <div class="row">
      <div class="col-md-4">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="nombreC" name="nombreC" placeholder="Nombre Completo" require
            autocomplete="off" value="<?php echo $nombreC ?>">
          <label for="nombreC" title="Nombre Completo" data-title="Nombre Completo">Nombre Completo</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating text-muted field Ajusttex">
          <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" require
            autocomplete="off" value="<?php echo $_SESSION['email'] ?>">
          <label for="email" title="Email" data-title="Email">Email</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="curp" name="curp" placeholder="Curp" require maxlength="18"
            autocomplete="off" onkeyup="javascript:this.value=this.value.toUpperCase();">
          <label for="curp" title="CURP" data-title="CURP">CURP</label>
        </div>
      </div>

    </div>

    <div class="row mt-3">
      <div class="col-md-3">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="RFC" name="RFC" placeholder="RFC" require maxlength="10"
            autocomplete="off" onkeyup="javascript:this.value=this.value.toUpperCase();">
          <label for="RFC" title="RFC" data-title="RFC">RFC</label>
        </div>
      </div>

      <div class="col-md-2">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="homoC" name="homoC" placeholder="Homoclave" require maxlength="3"
            autocomplete="off" onkeyup="javascript:this.value=this.value.toUpperCase();">
          <label for="homoC" title="Homoclave" data-title="Homoclave">Homoclave</label>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="numeroPersonal" name="numeroPersonal"
            placeholder="Telefono o Celular" require autocomplete="off" maxlength="10"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57">
          <label class="d-lg-block d-none" for="numeroPersonal" title="Telefono o Celular"
            data-title="Telefono o Celular">Telefono
            o Celular</label>
          <label class="d-lg-none d-block" for="numeroPersonal" title="Telefono" data-title="Telefono">Telefono</label>
        </div>

      </div>

    </div>


    <!-- Domicilio -->
    <div class="row mt-3">
      <legend>Domicilio Consultorio</legend>
      <div class="col-md-5">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="direccion" name="direccion" placeholder="Direccion" require
            autocomplete="off">
          <label for="direccion" title="Dirección" data-title="Dirección">Calle y Número</label>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="cp" name="cp" placeholder="C.P." require autocomplete="off"
            maxlength="5" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
          <label class="d-lg-block d-none" for="cp" title="Codigo Postal" data-title="Codigo Postal">Código
            Postal</label>
          <label class="d-lg-none d-block" for="cp" title="C.P." data-title="C.P.">C.P.</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="custom-select">
          <select id="colonia" name="colonia" require>
            <option></option>
            <option disabled>Digita tu C.P.</option>
          </select>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="estadoDom" name="estadoDom" placeholder="Estado" require
            autocomplete="off">
          <label for="estadoDom" title="Estado" data-title="Estado">Estado</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="municipioDom" name="municipioDom" placeholder="Municipio" require
            autocomplete="off">
          <label for="municipioDom" title="Municipio" data-title="Municipio">Municipio</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="numeroConsult" name="numeroConsult"
            placeholder="Telefono o Celular" require autocomplete="off" maxlength="10"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57">
          <label class="d-lg-block d-none" for="numeroConsult" title="Tel. Consultorio"
            data-title="Tel. Consultorio">Tel. Consultorio</label>
        </div>
      </div>
    </div>

    <!-- Info Estudios -->

    <div class="row mt-3">
      <legend>Estudios</legend>

      <div class="col-md-4">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="nomUni" name="nomUni" placeholder="Nombre Universidad" require
            autocomplete="off">
          <label for="nomUni" title="Nombre Universidad" data-title="Nombre Universidad">Nombre Universidad</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="carrera" name="carrera" placeholder="Titulo" require
            autocomplete="off">
          <label for="carrera" title="Titulo" data-title="Titulo">Titulo</label>
        </div>
      </div>


      <div class="col-md-3">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control" id="cedProf" name="cedProf" placeholder="Ced. Profesional" require
            autocomplete="off" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="8">
          <label for="cedProf" title="Ced. Profesional" data-title="Ced. Profesional">Ced. Profesional</label>
        </div>
      </div>

      <div class="col-md-2 col-lg-1 m-auto checkEsp">
        <div class="form-check form-check-inline containerCheck text-center">

          <div class="form-group checkGroup m-2">
            <input class="form-check-input" type="checkbox" id="especialidad" name="especialidad" value="true">
            <label class="form-check-label" for="especialidad">Especialidad</label>
          </div>

          <div class="formEspecialidad">
            <div class="px-3">
              <?php
                 require_once 'functions/db_conexion.php';  /* archivo requerido, crea conexion */ 
                try {
                  $sql = 'SELECT clave, nombre FROM especialidades';
                  $info = $conn->query($sql);
                } catch (\Throwable $th) {
                  $error = $e->getMessage();
                  echo `<div class="info-box bg-danger"> Hubo un error!!: $error</div>`;
                }
                ?>
              <div class="custom-select">
                <select id="nombreEspecialidad" name="nombreEspecialidad" require>
                  <option></option>
                  <?php while ($especialidad = $info->fetch_assoc()): ?>
                  <option value="<?php echo $especialidad['clave'] ?>"><?php echo $especialidad['nombre'] ?></option>
                  <?php endwhile; ?>
                </select>
              </div>
            </div>
            <div class="px-3">
              <div class="form-floating text-muted field Ajusttex">
                <input type="text" class="form-control" id="cedProfEsp" name="cedProfEsp" placeholder="Ced. Profesional"
                  require autocomplete="off" onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  maxlength="8">
                <label for="cedProfEsp" title="Ced. Especialidad" data-title="Ced. Especialidad">Ced.
                  Especialidad</label>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>


  <div class="tab-pane animate animationfadeIn" id="infoConsulta" role="tabpanel" aria-labelledby="infoConsulta-tab">

    <!-- subir img -->

    <div class="row mt-3">
      <div class="card">
        <div class="imgUpload d-flex">
          <div class="form-img col-md-6">
            <label for="formFile" class="form-label m-3">Firma</label>
            <div class="input-group card-body">
              <a class="input-group-text" id="Foto" class="btn btn-secondary"><i class="fas fa-camera"></i></a>
              <input class="form-control" type="file" id="formFile" name="imgFirma">
            </div>
          </div>

          <div class="imgView col-md-6">
          </div>
        </div>

        <div class="card-footer">
          <div class="row justify-content-between align-items-center">
            <div class="col-8">
              <p class="form-text m-0 p-0">Por favor presiona digitalizar para convertir tu firma al formato requerido
              </p>
            </div>
            <button type="button" class="btn btn-primary col-2 d-block" id="dig">Digitalizar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4 m-3">
      <div class="form-floating text-muted field Ajusttex">
        <input type="text" class="form-control" id="costoCons" name="costoCons" placeholder="Costo de Consulta" require
          autocomplete="off" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
        <label for="costoCons" title="Costo de Consulta" data-title="Costo de Consulta">Costo de Consulta</label>
      </div>
    </div>

  </div>