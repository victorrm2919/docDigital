<?php 
include 'functions/functions.php';

$pagina = obtenerPaginaActual();
// if($pagina !== 'login' && $pagina !== 'create-account') {
//   include 'functions/sessions.php';
// }
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Formulario</title>
  <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="styles/site.css" />
  <link rel="stylesheet" href="styles/Form.css" />
  <link rel="stylesheet" href="../styles/animations.css">


  
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-bootstrap-4/bootstrap-4.css" id="theme-styles">


  <script src="lib/bootstrap/dist/js/bootstrap.js"></script>
  <script src="js/modernizr-2.8.3.js"></script>
  <script src="js/granim.min.js"></script>
</head>

<body class="animate animationfadeIn">
  <header>
    <nav
      class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3 NavSact wrapper"
      id="second">
      <div class="container">
        <a class="navbar-brand">
          <img class="navimg" src="img/Sactiva_Final_Positivo.png" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
              <a class="nav-link text-dark sepa ">Alta</a>
            </li>
          </ul>
        </div>
        <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul class="navbar-nav float-right">
            <li class="nav-item">
              <a class="nav-link TextS closeSession">Cerrar sesión</a> <!-- login.php?user=doctor -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div class="container">
    <main role="main" class="pb-3">
      <!-- Cuerpo Formulario -->
      <div class="container body-content">
        <div class="row">
          <div class="col-md-12">
            <p class="Titulo1subin">Registro de Doctores</p>
          </div>
        </div>

        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
              aria-controls="pills-home" aria-selected="true">Datos Doctor</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
              aria-controls="pills-profile" aria-selected="false">Datos de pago</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
              aria-controls="pills-contact" aria-selected="false">Confirmación</a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="col-md-12" style="height:50px;"></div>
            <div class="row">
              <div class="col-md-6">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="nombre">
                  <label for="nombre" title="Nombre completo" data-title="Nombre completo"></label>
                </div>
                <span id="lblCONombre" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
              <div class="col-md-6">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="Cedula" maxlength="12" onkeyup="Cleantext(this)"
                    onchange="Cleantext(this)">
                  <label for="Cedula" title="Cédula" data-title="Cédula"></label>
                  <script>
                    function Cleantext(obj) {
                      obj.value = obj.value.replace(/\D/g, '');
                    }

                  </script>
                </div>
                <span id="lblCONombre" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="Curp">
                  <label for="Curp" title="Curp" data-title="Curp"></label>
                </div>
                <span id="lblCONombre" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
              <div class="col-md-6">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="RFC">
                  <label for="RFC" title="RFC" data-title="RFC"></label>
                </div>
                <span id="lblCONombre" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6" style="margin-top:17px;">
                <div class="custom-select">
                  <select id="Especialidad">
                    <option value="Especialidad" style="color:#8c8c8c;">Especialidad</option>
                    <option value="Dermatología">Dermatología</option>
                    <option value="Ginecología y obstetricia o tocología">Ginecología y obstetricia
                      o tocología</option>
                    <option value="Medicina de Urgencias">Medicina de Urgencias</option>
                    <option value="Oftalmología">Oftalmología</option>
                    <option value="Otorrinolaringología">Otorrinolaringología</option>
                    <option value="Traumatología">Traumatología</option>
                    <option value="Urología">Urología</option>
                    <option value="Medico general">Medico general</option>
                  </select>
                  <!--scrip fomulario y funcionalidad estilos-->
                  <script>
                    var x, i, j, selElmnt, a, b, c;

                    x = document.getElementsByClassName("custom-select");
                    for (i = 0; i < x.length; i++) {
                      selElmnt = x[i].getElementsByTagName("select")[0];

                      a = document.createElement("DIV");
                      a.setAttribute("class", "select-selected");
                      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                      x[i].appendChild(a);

                      b = document.createElement("DIV");
                      b.setAttribute("class", "select-items select-hide");
                      for (j = 1; j < selElmnt.length; j++) {

                        c = document.createElement("DIV");
                        c.setAttribute("class", "item");
                        c.innerHTML = selElmnt.options[j].innerHTML;
                        c.addEventListener("click", function (e) {

                          var y, i, k, s, h;
                          s = this.parentNode.parentNode.getElementsByTagName(
                            "select")[0];
                          h = this.parentNode.previousSibling;
                          for (i = 0; i < s.length; i++) {
                            if (s.options[i].innerHTML == this.innerHTML) {
                              s.selectedIndex = i;
                              h.innerHTML = this.innerHTML;
                              y = this.parentNode.getElementsByClassName(
                                "same-as-selected");
                              for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                              }
                              this.setAttribute("class", "same-as-selected");
                              break;
                            }
                          }
                          h.click();
                        });
                        b.appendChild(c);
                      }
                      x[i].appendChild(b);
                      a.addEventListener("click", function (e) {

                        e.stopPropagation();
                        closeAllSelect(this);
                        this.nextSibling.classList.toggle("select-hide");
                        this.classList.toggle("select-arrow-active");
                      });
                    }

                    function closeAllSelect(elmnt) {

                      var x, y, i, arrNo = [];
                      x = document.getElementsByClassName("select-items");
                      y = document.getElementsByClassName("select-selected");
                      for (i = 0; i < y.length; i++) {
                        if (elmnt == y[i]) {
                          arrNo.push(i)
                        } else {
                          y[i].classList.remove("select-arrow-active");
                        }
                      }
                      for (i = 0; i < x.length; i++) {
                        if (arrNo.indexOf(i)) {
                          x[i].classList.add("select-hide");
                        }
                      }

                      if ($("#Especialidad").val() != 'Especialidad') {
                        $("#lblCOEspecialidad").hide();
                      }

                    }

                    document.addEventListener("click", closeAllSelect);

                  </script>
                </div>
                <span id="lblCOEspecialidad" class="textoObligatorio"
                  style="margin-top: 15px!important; display:none;">Campo obligatorio</span>
              </div>
              <div class="col-md-6 d-block d-sm-block d-md-none" style="height:20px;"></div>
              <div class="col-md-6">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="CEspecialidad" maxlength="12"
                    onkeyup="Cleantext(this)" onchange="Cleantext(this)">
                  <label for="CEspecialidad" title="Cédula Especialidad" data-title="Cédula Especialidad"></label>
                  <script>
                    function Cleantext(obj) {
                      obj.value = obj.value.replace(/\D/g, '');
                    }

                  </script>
                </div>
                <span id="lblCONombre" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6" style="margin-top:10px;">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="Direccion">
                  <label for="Direccion" title="Dirección" data-title="Dirección"></label>
                </div>
                <span id="lblCODireccion" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
              <div class="col-md-6 " style="margin-top:10px;">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="telefono" maxlength="12" onkeyup="Cleantext(this)"
                    onchange="Cleantext(this)">
                  <label for="telefono" title="Número teléfonico" data-title="Número teléfonico"></label>
                  <script>
                    function Cleantext(obj) {
                      obj.value = obj.value.replace(/\D/g, '');
                    }

                  </script>
                </div>
                <span id="lblCOTelefono" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="nombreu">
                  <label for="nombreu" title="Nombre de la universidad" data-title="NNombre de la universidad"></label>
                </div>
                <span id="lblCONombre" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
              <div class="col-md-6">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="telefono2" maxlength="12" onkeyup="Cleantext(this)"
                    onchange="Cleantext(this)">
                  <label for="telefono2" title="Número teléfonico 2" data-title="Número teléfonico 2"></label>
                  <script>
                    function Cleantext(obj) {
                      obj.value = obj.value.replace(/\D/g, '');
                    }

                  </script>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="col-md-12" style="height:50px;"></div>
            <div class="row">
              <div class="col-md-6" style="margin-top:10px;">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="Firm">
                  <label for="Firm" title="Firma digital" data-title="Firma digital"></label>
                </div>
                <span id="lblCOFirmdig" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
              <div class="col-md-6" style="margin-top:10px;">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="Cons" maxlength="12" onkeyup="Cleantext(this)"
                    onchange="Cleantext(this)">
                  <label for="Cons" title="Costo de sus consultas" data-title="Costo de sus consultas"></label>
                  <script>
                    function Cleantext(obj) {
                      obj.value = obj.value.replace(/\D/g, '');
                    }

                  </script>
                </div>
                <span id="lblCOCons" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6" style="margin-top:8px;">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="Num" maxlength="18" onkeyup="Cleantext(this)"
                    onchange="Cleantext(this)">
                  <label for="Num" title="Numero" data-title="Numero"></label>
                  <script>
                    function Cleantext(obj) {
                      obj.value = obj.value.replace(/\D/g, '');
                    }

                  </script>
                </div>
                <span id="lblCONum" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
              <div class="col-md-6" style="margin-top:17px;">
                <div class="custom-select-medio">
                  <select id="Mediodepago">
                    <option value="" style="color:#8c8c8c;">Medios de pago</option>
                    <option value="Tarjeta bancaria">Tarjeta bancaria</option>
                    <option value="CLABE">CLABE</option>
                    <option value="PayPal">PayPal</option>
                  </select>

                </div>
                <span id="lblCOMediodepago" class="textoObligatorio"
                  style="margin-top: 20px !important; display:none;">Campo obligatorio</span>
              </div>
              <div class="col-md-6 d-block d-sm-block d-md-none" style="height:20px;"></div>
            </div>
            <div class="row">
              <div class="col-md-6" style="margin-top:17px;">
                <div class="custom-select-medio">
                  <select id="Banco">
                    <option value="" style="color:#8c8c8c;">Banco</option>
                    <option value="BANAMEX">BANAMEX</option>
                    <option value="BBVA BANCOMER">BBVA BANCOMER</option>
                    <option value="SANTANDER">SANTANDER</option>
                    <option value="HSBC">HSBC</option>
                    <option value="IXE">IXE</option>
                    <option value="INBURSA">INBURSA</option>
                    <option value="AFIRME">AFIRME</option>
                    <option value="BANORTE/IXE">BANORTE/IXE</option>
                  </select>
                  <!--scrip fomulario y funcionalidad estilos-->
                  <script>
                    var x, i, j, selElmnt, a, b, c;

                    x = document.getElementsByClassName("custom-select-medio");
                    for (i = 0; i < x.length; i++) {
                      selElmnt = x[i].getElementsByTagName("select")[0];

                      a = document.createElement("DIV");
                      a.setAttribute("class", "select-selected");
                      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                      x[i].appendChild(a);

                      b = document.createElement("DIV");
                      b.setAttribute("class", "select-items select-hide");
                      for (j = 1; j < selElmnt.length; j++) {

                        c = document.createElement("DIV");
                        c.setAttribute("class", "item");
                        c.innerHTML = selElmnt.options[j].innerHTML;
                        c.addEventListener("click", function (e) {

                          var y, i, k, s, h;
                          s = this.parentNode.parentNode.getElementsByTagName(
                            "select")[0];
                          h = this.parentNode.previousSibling;
                          for (i = 0; i < s.length; i++) {
                            if (s.options[i].innerHTML == this.innerHTML) {
                              s.selectedIndex = i;
                              h.innerHTML = this.innerHTML;
                              y = this.parentNode.getElementsByClassName(
                                "same-as-selected");
                              for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                              }
                              this.setAttribute("class", "same-as-selected");
                              break;
                            }
                          }
                          h.click();
                        });
                        b.appendChild(c);
                      }
                      x[i].appendChild(b);
                      a.addEventListener("click", function (e) {

                        e.stopPropagation();
                        closeAllSelect(this);
                        this.nextSibling.classList.toggle("select-hide");
                        this.classList.toggle("select-arrow-active");
                      });
                    }

                    function closeAllSelect(elmnt) {

                      var x, y, i, arrNo = [];
                      x = document.getElementsByClassName("select-items");
                      y = document.getElementsByClassName("select-selected");
                      for (i = 0; i < y.length; i++) {
                        if (elmnt == y[i]) {
                          arrNo.push(i)
                        } else {
                          y[i].classList.remove("select-arrow-active");
                        }
                      }
                      for (i = 0; i < x.length; i++) {
                        if (arrNo.indexOf(i)) {
                          x[i].classList.add("select-hide");
                        }
                      }

                      if ($("#medio").val() != '') {
                        $("#lblCOMedio").hide();
                      }

                    }

                    document.addEventListener("click", closeAllSelect);

                  </script>
                </div>
                <span id="lblCOBanco" class="textoObligatorio" style="margin-top: 20px !important; display:none;">Campo
                  obligatorio</span>
              </div>
              <div class="col-md-6" style="margin-top:8px;">
                <div class="field Ajusttex">
                  <input type="text" required autocomplete="off" id="Consep" maxlength="12" onkeyup="Cleantext(this)"
                    onchange="Cleantext(this)">
                  <label for="Consep" title="Concepto de pago" data-title="Concepto de pago"></label>
                  <script>
                    function Cleantext(obj) {
                      obj.value = obj.value.replace(/\D/g, '');
                    }

                  </script>
                </div>
                <span id="lblCOConsep" class="textoObligatorio" style="display:none;">Campo
                  obligatorio</span>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div class="col-md-12" style="height:50px;"></div>
          </div>
        </div>
      </div>
      <div class="col-md-12" style="height:50px;"></div>

    </main>
  </div>

  <footer class="border-top footer text-muted">
    <div class="container text-center Ftext">
      &copy; <a class="Ftext">Privacy</a>
    </div>
  </footer>
  <script src="lib/jquery/dist/jquery.min.js"></script>
  <script src="lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="http://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js"></script>
  <script src="js/main.js"></script>
</body>

</html>
