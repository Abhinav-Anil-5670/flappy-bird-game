let board 
let boardWidth = 360
let boardHeight = 840


window.onload = ()=>{
    board = document.getElementById("board")
    board.height = boardHeight
    board.width = boardWidth
    context = board.getContext("2D")
}