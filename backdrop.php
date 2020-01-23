<!DOCTYPE html>
<head>
</head>
    <div class="header">
        <?php
        include $_GET['page'].".html";
        if($_GET['page'] == 'main'){
            include 'aboutme.html';
        }
        ?>
    </header>
</html>