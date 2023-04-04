<html>
    <head>
        <link rel="stylesheet" href="css/indexstyles.css">
    </head>
    <?php
        session_start();
        include 'navbar.html';
        require_once "sqlConnect.php";
        $checkerrors = 0;
        $username = $name = $sname = $password = $confirmpassword = "";
        $display = 0; //0 for False 1 for true as to be handled by int in SQL
       
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            if (!empty($_POST['register'])) {
                if($_POST['password'] !== $_POST['confirm-password']){
                    $checkerrors + 1;
                }
                else{
                    $password = $_POST['password'];
                }
                $username = $_POST['username'];
                $name = $_POST['name'];
                $sname = $_POST['sname'];
                $display = $_POST['display'];
                if($checkerrors == 0){
                    $sqlinsert = "INSERT INTO Users VALUES ('$username', '$name', '$sname', '$password', '$display')";
                    mysqli_query($conn, $sqlinsert);
                }
                else{
                    header('Location: register.php');
                }
            }
            else {
                $passCheck  = $_POST['password'];
                $sqlinsert = "SELECT UserName FROM Users WHERE Password = '$passCheck'";
                $query= mysqli_query($conn, $sqlinsert);
                if(mysqli_num_rows($query) == 0){
                    echo '<p align=center> Password or UserName not matched in system </p>';     
                } 
                else {
                    $result = mysqli_fetch_assoc($query);;
                    $resultstring = $result['UserName'];
                    if ($resultstring == $_POST['username']){
                        $_SESSION['user'] = $_POST['username'];
                        $_SESSION['pass'] = $_POST['password'];
                    }
                }        
            }          
        }     
    ?>
    <div class="main">
    <div class='content'>
        <?php if (isset($_SESSION['user'])) { ?>
            <p> Welcome to Tetris <a href="logout.php">Log out</a></p>
            <form action="tetris.php">
            <input type="submit" value="Click here to play" />
            </form>
            
        <?php } else { ?>
            <p> Welcome to Tetris</p>
            <form action="index.php" method="post">
                <div class="login-info">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="username"><br/>

                    <label>Password</label>
                    <input type="password" name="password"><br/>

                    <label>Submit</label>
                    <input type="submit" name = "submit"> 
                </div>
                <p> Don’t have a user account? <a href="register.php">Register now</a></p>
            </form>
        <?php } ?>
    </div>
    </div>
</html>