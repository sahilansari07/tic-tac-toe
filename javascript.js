myGame = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let box = document.querySelectorAll(".playbox");
console.log(box);
header = document.querySelector("#header");

window.onclick = el => {
    let str = el.target.id;
    let str1 = el.target.classList.value;
    if (str1 === "playbox") {
        let turn = turncounter();
        console.log(str1);
        position = parseInt(str.slice(-1));
        console.log(position);
        console.log(turn);
        updatefunc(box, position, turn, header);
    }
}

const updatefunc = (box, position, turn, header) => {
    if (box[position].innerHTML === "") {
        if (turn % 2 === 0) {
            box[position].innerHTML = "O";
            header.innerHTML = "Player X turn";
            myGame.splice(position, 1, "O");
        }
        else {
            box[position].innerHTML = "X";
            header.innerHTML = "Player O turn";
            myGame.splice(position, 1, "X");
        }
    }
    winCheck(myGame);
}

const turnCreator = () => {
    let turn = 0;
    return () => {
        if (turn < 9) {
            turn++;
            return turn;
        }
    };
};
const turncounter = turnCreator();

const winCheck = (myGame) => {

    Xwincount = document.getElementById("score2");
    Owincount = document.getElementById("score3");
    let X = 0;
    let O = 0;

    let checkarrayX = ["X", "X", "X"];
    let checkarrayO = ["O", "O", "O"];

    const checkcross1 = [myGame[0], myGame[1], myGame[2]];
    const checkcross2 = [myGame[3], myGame[4], myGame[5]];
    const checkcross3 = [myGame[6], myGame[7], myGame[8]];
    const checkdiag1 = [myGame[2], myGame[4], myGame[6]];
    const checkdiag2 = [myGame[0], myGame[4], myGame[8]];
    const checkvert1 = [myGame[0], myGame[3], myGame[6]];
    const checkvert2 = [myGame[1], myGame[4], myGame[7]];
    const checkvert3 = [myGame[2], myGame[5], myGame[8]];
    checkarraymain = [checkcross1, checkcross2, checkcross3, checkdiag1, checkdiag2, checkvert1, checkvert2, checkvert3]
    console.log(checkarraymain);

    for (let i = 0; i < 8; i++) {
        if (equalsCheck(checkarrayX, checkarraymain[i])) {
            alert("Player X WINS");
            X++
            Xwincount.innerHTML = ("Player X:" + X);
           // restartfunc();

        }
        else if (equalsCheck(checkarrayO, checkarraymain[i])) {
            alert("Player O WINS");
            O++
            Owincount.innerHTML = ("Player O:" + O);
            //restartfunc();
        }
    }
}


const equalsCheck = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
}

/*const restartfunc = () => {
    let text;
    let answer = prompt("Do you wanna play again");
    if (answer == null || answer == "" || answer == "No" || answer == "no") {
        text = "Have a nice day see hope to see you again";
    }
    else {
        text = "Lets play more";
        box = document.querySelectorAll(".playbox");
        myGame = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        for(let i=0;i<9;i++){
        box[i].innerHTML=0;
        }
    }
    document.getElementById("header").innerHTML = text;
} */