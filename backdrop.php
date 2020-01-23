<!DOCTYPE html>
<head>
</head>
    <div class="header">
        <?php
        include $_GET['page'].".html";
        if($_GET['page'] == 'main'){
            echo '<style type="text/css">
                .header {
                    position: absolute;
                }
                </style>'; 
            include 'aboutme.html';
        }
        else {
            echo '<style type="text/css">
                .header {
                    position: relative;
                }
                </style>'; 
        }
        ?>
    </div>
</html>