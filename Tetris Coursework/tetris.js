var shapes = [[[1,1],[1,2],[1,3],[2,3]],[[1,1],[2,1],[2,2],[2,3]],[[1,2],[2,1],[2,2],[3,1]]
            ,[[1,1],[2,1],[2,2],[3,1]],[[1,1],[1,2],[2,1],[2,2]],[[1,1],[1,2],[1,3],[1,4]]]
var gridArr = new Array(10);
var ids = ["setL","setZ","setS","setT","setO","setI"]
var colour;
var id;
var currentBlock;
var interval =  setInterval(function(){downMov()}, 1000);
var score = 0;
var newPosX = new Array(), newPosY = new Array(), oldPosX = new Array(), oldPosY = new Array();
function hideButton(ID){
    document.getElementById(ID).style.display="none";
}
function createGrid(){
    for(var i = 0; i < 21; i++) {
        gridArr[i] = new Array();
        for(var x = 0; x < 10; x++) {
            var tempDiv = document.createElement("div");
            var lineBreak = document.createElement("br");
            tempDiv.setAttribute("id", "null")
            tempDiv.setAttribute("name", "null")
            document.getElementById("tetris-bg").appendChild(tempDiv);
            gridArr[i][x] = tempDiv;

        }
    }
    console.log(gridArr);
    generatePiece();

}

function generatePiece(){
    currentBlock = shapes[Math.floor(Math.random()*shapes.length)];
    console.log(currentBlock)
    if (shapes[0] == currentBlock){
        id = "L";
        colour = 'red';
    } else if (shapes[1] == currentBlock){
        id = "Z";
        colour = 'yellow';
    } else if (shapes[2] == currentBlock){
        id = "S";
        colour = 'blue';
    } else if (shapes[3] == currentBlock){
        id = "T";
        colour = 'purple';
    } else if (shapes[4] == currentBlock){
        id = "O";
        colour = 'black';
    } else if (shapes[5] == currentBlock){
        id = "I";
        colour = 'white';
    } 
    play(currentBlock, id, colour);
}
function play(currentBlock, id){
    for(var i = 0; i < currentBlock.length; i++) {
        for (var x = 0; x < ids.length; x++){
            if(gridArr[currentBlock[i][1]- 1][currentBlock[i][0]+3].getAttribute("name") == ids[x]){
               post();
            }
        }
        gridArr[currentBlock[i][1]- 1][currentBlock[i][0]+3].setAttribute("name", id);
    }
    checkColours(id);
    document.onkeydown = function(e){
        if(e.key == "ArrowDown"){
            downMov();
        }
        else if(e.key == "ArrowLeft"){
            leftMov();
        }
        else if(e.key == "ArrowRight"){
            rightMov();
        }
    };
}
function post(){
    var form = document.createElement("form");
    var inputScore = document.createElement("input");

    document.body.innerHTML += `<form id="leadersubmit" action="leaderboard.php" method="POST"><input type="hidden" name="score" value=${score}></form>`;
    document.getElementById("leadersubmit").submit();
    window.location.href = "leaderboard.php"

}
function leftMov(){
    newPosX = new Array() 
    newPosY = new Array() 
    oldPosX = new Array() 
    oldPosY = new Array()
    var collide = false;
                for(var i = 0; i < 20; i++) {
                    for(var x = 0; x < 10; x++) {
                        console.log(gridArr[i][x]);
                        try {
                            if (gridArr[i][x].getAttribute('name') == id) {
                                for (var t = 0; t < ids.length; t++){
                                    if (gridArr[i][x-1].getAttribute('name') == ids[t]){
                                        collide = true;
                                    }
                                }
                                    newPosY.push(i); 
                                    newPosX.push(x -1);
                                    oldPosY.push(i);
                                    oldPosX.push(x);  
                            }   
                        } catch (e) {
                            if(e instanceof TypeError){
                                collide = true;
                            }
                            else{
                                console.log(e);
                            }
                        }
                                                   
                    } 
                }
            setPos(collide, newPosX, newPosY, oldPosX, oldPosY)
}
function rightMov(){
    newPosX = new Array() 
    newPosY = new Array() 
    oldPosX = new Array() 
    oldPosY = new Array()
    var collide = false;
                for(var i = 0; i < 20; i++) {
                    for(var x = 0; x < 10; x++) {
                        console.log(gridArr[i][x]);
                        try {
                            if (gridArr[i][x].getAttribute('name') == id) {
                                for (var t = 0; t < ids.length; t++){
                                    if (gridArr[i][x+1].getAttribute('name') == ids[t]){
                                        collide = true;
                                    }
                                }
                                    newPosY.push(i); 
                                    newPosX.push(x+1);
                                    oldPosY.push(i);
                                    oldPosX.push(x);  
                            }   
                        } catch (e) {
                            if(e instanceof TypeError){
                                collide = true;
                            }
                            else{
                                console.log(e);
                            }
                        }
                                                   
                    } 
                }
            setPos(collide, newPosX, newPosY, oldPosX, oldPosY)
}
function downMov(){
    newPosX = new Array() 
    newPosY = new Array() 
    oldPosX = new Array() 
    oldPosY = new Array()
    var collide = false;
                for(var i = 0; i < 20; i++) {
                    for(var x = 0; x < 10; x++) {
                        console.log(gridArr[i][x]);
                        try {
                            if (gridArr[i][x].getAttribute('name') == id) {
                                for (var t = 0; t < ids.length; t++){
                                    if (gridArr[i+2][x].getAttribute('name') == ids[t]){
                                        collide = true;
                                    }
                                }
                                    newPosY.push(i+1); 
                                    newPosX.push(x);
                                    oldPosY.push(i);
                                    oldPosX.push(x);  
                            }   
                        } catch (e) {
                            if(e instanceof TypeError){
                                collide = true;
                            }
                            else{
                                console.log(e);
                            }
                        }
                                                   
                    } 
                }
            setPos(collide, newPosX, newPosY, oldPosX, oldPosY)
            
}
function setPos(collide, newPosX, newPosY, oldPosX, oldPosY){
    if (collide == false){
        for(var i = 0; i < newPosX.length; i++) {
            gridArr[oldPosY[i]][oldPosX[i]].setAttribute("name", "null")
        }
        for(var i = 0; i < newPosX.length; i++) {
            gridArr[newPosY[i]][newPosX[i]].setAttribute("name", id)
        }
        checkColours(id); 
    } else {
        for(var i = 0; i < newPosX.length; i++) {
            gridArr[newPosY[i]][newPosX[i]].setAttribute("name", "set".concat(id))
        }
        score += 1;
        generatePiece();
    }
}
function checkColours(id){
    var div = document.getElementsByName(id)
    var otherDiv = document.getElementsByName("null")
    for(var i = 0; i < div.length; i++){
        div[i].style.backgroundColor = colour;
    }
    for(var i = 0; i < otherDiv.length; i++){
        otherDiv[i].style.backgroundColor = '';
    }
}

