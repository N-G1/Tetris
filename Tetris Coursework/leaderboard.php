<html>
    <head>
        <link rel="stylesheet" href="css/indexstyles.css">
    </head>
    <?php
    session_start();
    require_once "sqlConnect.php";
    include 'navbar.html';
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $username = $_SESSION['user'];
        $score = $_POST['score'];
        $sqlinsert = "INSERT INTO Scores VALUES ('$username', '$score')";
        mysqli_query($conn, $sqlinsert);
    }
    ?>
    <div class="main">
    <div class="content">
        <table> 
            <tr>
                <td bgcolor="blue">Username</td>
                <td bgcolor="blue">Score</td>
            </tr>
            <?php
            echo "this functions outside of inputting scores to the database for display, when they are manually entered it displays correctly";
            $sqlinsert = "SELECT a.* FROM Scores a WHERE a.UserName IN (SELECT b.UserName FROM Users b WHERE b.Display = 1)";
            $query= mysqli_query($conn, $sqlinsert);
               while($row = $query->fetch_assoc()){
                    echo "<tr><td>".$row["Username"]."</td><td>".$row["Score"]."</td><td></tr>";
                }
            ?>
        </table>
    </div>
    </div>
</html>