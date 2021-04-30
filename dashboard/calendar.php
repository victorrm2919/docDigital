<?php 

require 'templates/header.php';
require 'templates/aside.php' ;
?>
    <div class="main-panel">
        <?php require 'templates/navbar.php' ?>
        
        <div class="content">
            <div class="container-fluid">
                <div class="header text-center">
                    <h3 class="title">FullCalendar.io</h3>
                    <small class="category">Handcrafted by our friends from
                        <a target="_blank" href="https://fullcalendar.io/">FullCalendar.io</a>. Please checkout
                        their
                        <a href="https://fullcalendar.io/docs/" target="_blank">full documentation.</a>
                    </small>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-10 ml-auto mr-auto">
                        <div class="card card-calendar">
                            <div class="card-body ">
                                <div id="fullCalendar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<?php require 'templates/footer.php' ?>