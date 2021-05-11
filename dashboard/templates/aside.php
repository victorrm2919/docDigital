<?php 

$prim_nombre = explode(' ',$_SESSION['nombre']);
$prim_apellido = explode(' ',$_SESSION['apellido']);
            
?>


<div class="sidebar" data-color="bluDoc" data-image="assets/img/curved-11.jpg">
    <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

        Tip 2: you can also add an image using data-image tag
    -->
    <div class="sidebar-wrapper">
        <div class="logo">
            <a href="#" class="simple-text logo-mini">
                <img src="../icon.png" alt="">
            </a>
            <a href="#" class="simple-text logo-normal">
                DocDigital
            </a>
        </div>
        <div class="user">
            <div class="photo">
                <img src="assets/img/fotos/default-avatar.png" />
            </div>
            <div class="info ">
                <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                    <span><?php echo $prim_nombre[0] . ' ' . $prim_apellido[0] ?>
                        <b class="caret"></b>
                    </span>
                </a>
                <div class="collapse" id="collapseExample">
                    <ul class="nav mt-3">
                        <li class="nav-item">
                            <a class="profile-dropdown nav-link" href="./perfil.php">
                                <span class="sidebar-mini"><i class="material-icons-outlined">person</i></span>
                                <p class="sidebar-normal">Mi perfil</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <ul class="nav navsid">
            <li class="nav-item">
                <a class="nav-link" href="./index.php">
                    <i class="material-icons-outlined">home</i>
                    <p>Inicio</p>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./pacientes.php">
                    <i class="material-icons-outlined">group</i>
                    <p>Pacientes</p>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link" href="./calendar.php">
                    <i class="material-icons-outlined">today</i>
                    <p>Calendario</p>
                </a>
            </li>

            <li class="nav-item ">
                <a class="nav-link" href="./notas.php">
                    <i class="material-icons-outlined">note_alt</i>
                    <p>Notas</p>
                </a>
            </li>

            <li class="nav-item ">
                <a class="nav-link" href="./doctores.php">
                    <i class="material-icons-outlined">contacts</i>
                    <p>Listado Doctores</p>
                </a>
            </li>

        </ul>
        <hr class="line bg-white">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#pagesExamples">
                    <i class="material-icons-outlined">bookmarks</i>
                    <p>
                        Ligas de interes
                        <b class="caret"></b>
                    </p>
                </a>
                <div class="collapse " id="pagesExamples">
                    <ul class="nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="https://www.vademecum.es/medicamentos-mx-a_1" target="_blank">
                                <span class="sidebar-mini">VDC</span>
                                <span class="sidebar-normal">Lista Medicamentos 1</span>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="https://www.medicamentosplm.com/Home/Medicamento/A/1" target="_blank">
                                <span class="sidebar-mini">PLM</span>
                                <span class="sidebar-normal">Lista Medicamentos 2</span>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="https://www.gob.mx/cofepris" target="_blank">
                                <span class="sidebar-mini">COF</span>
                                <span class="sidebar-normal">COFEPRIS</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>