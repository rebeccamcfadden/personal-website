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
                    height: 100%;
                }
                @media only screen and (max-width: 800px){
                    .overlay {
                        background-color: rgb(228, 228, 228);
                    }
                    .backdrop {
                        height: fit-contents;
                    }
                }
                </style>'; 
        }
        ?>
    </div>
</html>