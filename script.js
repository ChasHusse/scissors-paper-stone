const stoneBtn = document.querySelector("#stone")
const scissorsBtn = document.querySelector("#scissors")
const paperBtn = document.querySelector("#paper")
let playerScoreBoard = document.querySelector("#player-score")
let computerScoreBoard = document.querySelector("#computer-score")

computerScore = 0
playerScore = 0



const playerBoard = document.querySelector("#playerBoard")
const computerBoard = document.querySelector("#computerBoard")
const winner = document.querySelector("#winner")


const pressedBtn = [stoneBtn, scissorsBtn, paperBtn]

pressedBtn.forEach(element => element.addEventListener("click", () => {

    playerBoard.innerHTML = `
                                <h1>PLAYER</h1>
                                <img id = "${element.id}" src = "${element.src}" alt = "${element.alt}" />
                            `
    computerPlay()
    console.log("Player:" + element.id)
    console.log("Computer:" + computer)
    if (element.id == "stone" && computer == "scissors"){
        winner.innerHTML = `<h4>Player won!</h4>`
        winner.style.color = "green"
        winner.style.borderBottom = "2px solid green"
        ++playerScore
        playerScoreBoard.innerHTML = ""
        playerScoreBoard.innerHTML = playerScore

    } else if (element.id == "paper" && computer == "stone"){
        winner.innerHTML = `<h4>Player won!</h4>`
        winner.style.color = "green"
        winner.style.borderBottom = "2px solid green"
        ++playerScore
        playerScoreBoard.innerHTML = ""
        playerScoreBoard.innerHTML = playerScore
    } else if (element.id == "scissors" && computer == "paper"){
        winner.innerHTML = `<h4>Player won!</h4>`
        winner.style.color = "green"
        winner.style.borderBottom = "2px solid green"
        ++playerScore
        playerScoreBoard.innerHTML = ""
        playerScoreBoard.innerHTML = playerScore

    } else if (element.id == computer) {
        winner.innerHTML = `<h4>Draw!</h4>`
        winner.style.color = "orange"
        winner.style.borderBottom = "2px solid orange"
    } else {
         winner.innerHTML = `<h4>Computer won!</h4>`
         winner.style.color = "red"
         winner.style.borderBottom = "2px solid red"
         ++computerScore
         computerScoreBoard.innerHTML = ""
         computerScoreBoard.innerHTML =  computerScore
    }

    

    function computerPlay (){
        computerTurn = Math.floor(Math.random() * 3 + 1) 

        switch(computerTurn){
            case 1:
              computer = "stone";
              break;
            case 2:
              computer = "paper";
              break;
            case 3:
              computer = "scissors";
              break;
          }

        if (computerTurn == 1){
            computerBoard.innerHTML = ` 
                                        <h1>COMPUTER</h1>
                                        <img id = "${stoneBtn.id}" src = "${stoneBtn.src}" alt = "${stoneBtn.alt}" />
                                      `
        } else if (computerTurn == 2){
            computerBoard.innerHTML = ` 
                                        <h1>COMPUTER</h1>
                                        <img id = "${paperBtn.id}" src = "${paperBtn.src}" alt = "${paperBtn.alt}" />
                                      `
        } else {
            computerBoard.innerHTML = ` 
                                        <h1>COMPUTER</h1>
                                        <img id = "${scissorsBtn.id}" src = "${scissorsBtn.src}" alt = "${scissorsBtn.alt}" />
                                      `
        }
    }
}));

