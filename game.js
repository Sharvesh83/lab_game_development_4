let rockPlayer=document.getElementById("rock-p")
let paperPlayer=document.getElementById("paper-p")
let sicissorsPlayer=document.getElementById("scissors-p")

let rockComp=document.getElementById("rock-c")
let paperComp=document.getElementById("paper-c")
let sicissorsComp=document.getElementById("scissors-c")

let rockButton=document.getElementById("rockButton")
let paperButton=document.getElementById("paperButton")
let sicissorsButton=document.getElementById("scissorsButton")

let playerScore=document.getElementById("playerScore")
let compScore=document.getElementById("compScore")

let reset=document.getElementById("playAgainButton")

scorePlayer=0
scoreComp=0
randomNum=0

function randomGenerator(){
    a=Math.floor(Math.random()*(2+1)+1)
    return a
}

function compPlays(){
    randomNum=randomGenerator()
    if (randomNum==1){
        rockComp.style.display='block'
        paperComp.style.display='none'
        sicissorsComp.style.display='none'
    }
    if (randomNum==2){
        rockComp.style.display='none'
        paperComp.style.display='block'
        sicissorsComp.style.display='none'
    }
    if (randomNum==3){
        rockComp.style.display='none'
        paperComp.style.display='none'
        sicissorsComp.style.display='block'
    }
}

rockButton.onclick=()=>{
    compPlays()
    rockPlayer.style.display='block'
    sicissorsPlayer.style.display='none'
    paperPlayer.style.display='none'

    if (randomNum==2){
        scoreComp+=1
    }else if(randomNum==3){
        scorePlayer+=1
    }
    playerScore.innerHTML=scorePlayer
    compScore.innerHTML=scoreComp
}
sicissorsButton.onclick=()=>{
    compPlays()
    sicissorsPlayer.style.display='block'
    rockPlayer.style.display='none'
    paperPlayer.style.display='none'

    if (randomNum==1){
        scoreComp+=1
    }else if(randomNum==2){
        scorePlayer+=1
    }
    playerScore.innerHTML=scorePlayer
    compScore.innerHTML=scoreComp
}
paperButton.onclick=()=>{
    compPlays()
    paperPlayer.style.display='block'
    sicissorsPlayer.style.display='none'
    rockPlayer.style.display='none'

    if (randomNum==3){
        scoreComp+=1
    }else if(randomNum==1){
        scorePlayer+=1
    }
    playerScore.innerHTML=scorePlayer
    compScore.innerHTML=scoreComp
}
reset.onclick=()=>{
    window.location='game.html';
}
