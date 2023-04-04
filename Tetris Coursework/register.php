<html>
    <!DOCTYPE html>
    <head>
        <link rel="stylesheet" href="css/indexstyles.css">
    </head>
    <?php
        include 'navbar.html';
    ?>
    <div class = "main">
        <div class = "content">
            <form action="index.php" method="post">
                <div class="registration-info">
                    <label for="username">Username</label><input type="text" name="username" id="username"><br/>

                    <label for="name">First Name</label><input type="text" name="name" id="name"><br/>

                    <label for="sname">Second Name</label><input type="text" name="sname" id="sname"><br/>

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"><br/>

                    <label for="password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password"><br/>

                    <label for="display">Display</label>
                    <input type="radio" id="display" name="display" value=1>Yes</input>
                    <input type="radio" id="display" name="display" checked="checked" value=0>No</input><br/>

                    <input type="hidden" name="register" value="1">
                    <label for="submit">Submit</label>
                    <input type="submit" id="submit" name = "submit">
                </div>
            </form>
        </div>
    </div>
</html>

