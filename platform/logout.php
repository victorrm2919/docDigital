<?php
$tipo = $_SESSION['tipo'];
@session_start();
session_destroy();
header("Location: login.php?user=" . $tipo);