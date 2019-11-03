

var marker = "X"
var board = document.querySelectorAll("td")
var restart = document.querySelector('#b');

function turn() {
    if (marker === "X") {
        marker = "O";
    }
    else marker = 'X';
    return marker
}

function isWon() {
    var rowOne = document.querySelectorAll("tr")[0];
    var cellOne = rowOne.querySelectorAll("td")[0].textContent;
    var cellTwo = rowOne.querySelectorAll("td")[1].textContent;
    var cellThree = rowOne.querySelectorAll("td")[2].textContent;
    if (cellOne !== "" && cellOne === cellTwo && cellOne === cellThree) {
        rowOne.bgColor = '#cb81d1';
    }
}

function clear() {
    var rowOne = document.querySelectorAll("tr")[0];
    for (var i = 0; i < board.length; i++) {
        board[i].textContent = "";
        rowOne.bgColor = "white" ;
    }
}

for (var i = 0; i < board.length; i++) {
    board[i].addEventListener('click', function () {
        this.textContent = marker;
        isWon();
        turn();
    })

}

restart.addEventListener('click',clear)

function createRowVariables(){
    var rows = [];
  
    for (var i = 0; i <= $("tr").length -1 ; i++) {
        rows[i] = $("tr")[i];
    }
  
    return rows;
  }