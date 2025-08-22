
//board
let board 
let boardWidth = 360
let boardHeight = 640

//bird
let birdWidth = 34
let birdHeight = 24
let birdX = boardWidth/8
let birdY = boardHeight/2
let birdImage

let bird = {
    x: birdX,  y : birdY , width : birdWidth , height : birdHeight
}

window.onload = ()=>{
    board = document.getElementById("board")
    board.height = boardHeight
    board.width = boardWidth
    context = board.getContext("2d")

    //draw bird
    context.fillStyle = "green"
    // context.fillRect(bird.x, bird.y , bird.width, bird.height )

    birdImage = new Image()
    birdImage.src = './images/flappybird.png'
    birdImage.onload = ()=>{
        context.drawImage(birdImage,bird.x, bird.y , bird.width, bird.height)
    }

}