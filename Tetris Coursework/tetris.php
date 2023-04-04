<html>
    <head>
        <link rel="stylesheet" href="css/indexstyles.css">
        <script src="tetris.js"></script> 
    </head>
    <?php include "navbar.html" ?>
    <div class="main">
    <div class="content">
        <input type="button" id="start" onclick="hideButton('start'); createGrid();" value="Start the game" />
        <div class="grid" id="tetris-bg">
            
        </div>
    </div>
    </div>
</html>