<?php 
require "../functions/db_conexion.php";  /* archivo requerido, crea conexion */ 

$doc_x_pag = 8;

/* Conteo de datos para paginas */
try {
$sql = "SELECT * FROM perfiles";  /* query */
$datos = $conn->query($sql);  /* consulta a base de datos */
} catch (Exception $e) {
$error = $e->getMessage();  /* mensaje de error */
echo $error;
}

/* Calculo de paginas */
$num_result = $datos->num_rows;
$paginas = ceil($num_result/$doc_x_pag);

$val = filter_var($_GET['page'],FILTER_SANITIZE_NUMBER_INT);  /* Valida get */

if (!$val > 0 || !$_GET) {header('Location:doctores.php?page=1');}
if ($val > $paginas) {header("Location:doctores.php?page=$paginas");}

require 'templates/header.php';

?>


<div class="wrapper doctores">
    <?php require 'templates/aside.php' ?>
    <div class="main-panel">
        <?php require 'templates/navbar.php' ?>

        <div class="content animate animationfadeIn">
            <!-- Default box -->
            <div class="container-fluid">
                <div class="card card-solid">
                    <div class="card-header">
                        <?php
                        try {
                            $sql = 'SELECT clave, nombre FROM especialidades ORDER BY nombre';
                            $info = $conn->query($sql);
                        } catch (\Throwable $th) {
                            $error = $e->getMessage();
                            echo `<div class="info-box bg-danger"> Hubo un error!!: $error</div>`;
                        }
                        ?>
                        <select id="nombreEspecialidad" name="nombreEspecialidad" form="infoUsuario">
                            <?php while ($especialidad = $info->fetch_assoc()) : ?>
                            <option value="<?php echo $especialidad['clave'] ?>"><?php echo $especialidad['nombre'] ?>
                            </option>
                            <?php endwhile; ?>
                        </select>
                    </div>
                    <div class="w90">
                        <div class="card-body pb-0">

                            <div class="row">
                                <?php
                                $inicio = ($_GET['page']-1) * $doc_x_pag;

                                try {
                                    $sql = "SELECT doctor,nombres, apellidos, email, clave_esp, descr, foto FROM perfiles INNER JOIN doctor ON perfiles.doctor = doctor.id ORDER BY nombres LIMIT $inicio,$doc_x_pag";  /* query */
                                    $resultado = $conn->query($sql);  /* consulta a base de datos */
                                } catch (Exception $e) {
                                    $error = $e->getMessage();  /* mensaje de error */
                                    echo $error;
                                }
                                while ($doc = $resultado->fetch_assoc()):/* imprime resultados) el resultado de fetch_assoc se guarda en eventos como array*/  
                                    $sql = "SELECT nombre FROM especialidades WHERE clave = '$doc[clave_esp]'";  /* query */
                                    $nombreEsp = $conn->query($sql);  /* consulta a base de datos */
                                    $esp = $nombreEsp->fetch_assoc();
                                ?>
                                <div class="col-12 col-sm-4 col-xl-3">
                                    <div class="card card-user">
                                        <div class="card-header no-padding">
                                            <div class="card-image">
                                                <img src="assets/img/vector.jpg" alt="...">
                                            </div>
                                        </div>
                                        <div class="card-body ">
                                            <div class="author">
                                                <a href="#">
                                                    <img class="avatar border-gray" src="assets/img/<?php echo $doc['foto'] ?>" alt="...">
                                                    <h5 class="card-title"><?php echo $doc['nombres'] . ' ' . $doc['apellidos']?></h5>
                                                </a>
                                                <p class="card-description"> 
                                                    <?php if ($esp == '') {
                                                        echo 'Doctor general';
                                                    } else {
                                                        echo $esp['nombre'];
                                                    }
                                                    ?>
                                                </p>
                                            </div>
                                            <p class="card-description text-center">
                                                <?php echo $doc['descr'] ?>
                                            </p>
                                        </div>
                                        <div class="card-footer ">
                                            <hr>
                                            <div class="button-container text-center">
                                                <button href="#" class="btn btn-simple btn-link btn-icon">
                                                    <i class="fa fa-envelope"></i> <?php echo $doc['email'] ?>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php 

                            
                                endwhile;?>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    
                    <div class="card-footer">
                        <nav aria-label="Contacts Page Navigation">
                            <ul class="pagination justify-content-center m-0">   
                                <li class="page-item <?php echo $_GET['page'] <= 1 ? 'disabled' : '' ?>">
                                    <a class="page-link fl" href="doctores.php?page=<?php echo $_GET['page']-1?>">
                                        &larr; Anterior
                                    </a>
                                </li>
                                <?php for ($i=0; $i < $paginas ; $i++): ?>
                                <li class="page-item <?php echo $_GET['page']==$i+1 ? 'active' : '' ?>" >
                                    <a class="page-link" href="doctores.php?page=<?php echo $i+1?>"> 
                                        <?php echo $i+1?>   
                                    </a>
                                </li>
                                <?php endfor; ?>
                                <li class="page-item <?php echo $_GET['page'] >= $paginas ? 'disabled' : '' ?>">
                                    <a class="page-link fl" href="doctores.php?page=<?php echo $_GET['page']+1?>">
                                        Siguiente &rarr;
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <!-- /.card-footer -->
                </div>

            </div>
            <!-- /.card -->

        </div>




<?php require 'templates/footer.php' ?>