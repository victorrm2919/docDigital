    </div>
    </div>
    </main>

    <?php if ($pagina == 'create-account'): ?>
    <div class="promotion slideDown" id="promotion">
      <div class="conte">
        <div class="contBody">
          <div class="row justify-content-between">
            <h4 class="col-10">Aprovecha hoy. Prueba la plataforma por 1 mes gratis.</h4>
            <button type="button" class="btn-close btn-close-white col-2 mt-2" data-bs-dismiss="promotion"
              aria-label="Close"></button>
          </div>
        </div>
        <p class="pt-lg-2">Solo para usuarios nuevos. Después de este período, se aplica una tarifa mensual</p>
      </div>
    </div>
    <?php endif; ?>



    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
      crossorigin="anonymous"></script>
    <!--  BootStrap JS  -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"
      integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
      integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous">
    </script>
    <!-- jQuery Validations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"
      integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg=="
      crossorigin="anonymous"></script>
    <!-- Validator -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/validator/13.6.0/validator.min.js" integrity="sha512-xYHcfaQeUiKHs9YsHqjpyLaHnh+q7y8kYuOGdh5FkJeK7Z+dZct7Yoa7h+PtsrKRh03t8eJZuSeCN7b0dkrFwA==" crossorigin="anonymous"></script>
    <!-- Sweetalert2 -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js"></script>


    <!-- Custom -->
    <?php if ($pagina == 'create-account'): ?>
    <script src="assets/js/create-account.js"></script>
    <?php endif; ?>

    <?php if ($pagina == 'login'): ?>
      <script src="assets/js/login.js"></script>
    <?php endif; ?>

    </body>

    </html>