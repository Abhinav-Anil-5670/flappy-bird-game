
//board
let board 
let boardWidth = 360
let boardHeight = 640

//bird
let birdWidth = 34
let birdHeight = 24
let birdX = boardWidth/8
let birdY = boardHeight/3;  // instead of boardHeight/2

let birdImage

//pipes
let pipeArray = []
let pipeWidth = 64
let pipeHeight = 512
let pipeX = boardWidth
let pipeY = 0 

let topPipeImg
let BottomPipeImg

//gamePhysics
let velocityX = -1
let velocityY = -3;
let gravity = 0.1

let bird = {
    x: birdX,  y : birdY , width : birdWidth , height : birdHeight
}

window.onload = ()=>{
    board = document.getElementById("board")
    board.height = boardHeight
    board.width = boardWidth
    context = board.getContext("2d")

    //draw bird

    birdImage = new Image()
    birdImage.src = './images/flappybird.png'
    birdImage.onload = ()=>{
        context.drawImage(birdImage,bird.x, bird.y , bird.width, bird.height)
    }
    requestAnimationFrame(update)

    topPipeImg = new Image()
    topPipeImg.src = "./images/toppipe.png"

    BottomPipeImg = new Image()
    BottomPipeImg.src = './images/bottompipe.png'
    setInterval(placePipes,1500)

    document.addEventListener("keydown",moveBird)

}

function update(){

    requestAnimationFrame(update)
    context.clearRect(0,0,boardWidth,boardHeight)

    velocityY += gravity
    bird.y = Math.max(bird.y + velocityY,0)
    context.drawImage(birdImage,bird.x, bird.y , bird.width, bird.height)

    //pipes
    for(let i = 0; i < pipeArray.length;i++){
        let pipe = pipeArray[i]
        pipe.x += velocityX
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height)
    }

}

function placePipes(){
    let randomPipeY = pipeY - pipeHeight/4 - (Math.random())* (pipeHeight/2)
    let openingSpace = board.height/4
    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    

    pipeArray.push(topPipe)

    let bottomPipe = {
        img : BottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(bottomPipe)
}

function moveBird(e){
    if(e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX" ){
        //jump
        velocityY = -3
    }
}