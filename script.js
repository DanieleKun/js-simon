/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const myNumbers = document.getElementById("numbers");
const myUserResult = document.getElementById("user_result")
const userNumArr = [];
// Creo 5 numeri casuali
const myRandomNum = myRandomUniqNum(5, 1, 50);
//Stampo in pagina i 5 numeri casuali
myNumbers.innerHTML = myRandomNum;

//Imposto un timer, dopo di che i numeri spariscono
let seconds = 3

const countdown = setInterval(
    function () {
        if (seconds === 0) {
            clearInterval(countdown);
            myNumbers.classList.add("display_none");
            const number1 = parseInt(prompt("Inserisci il primo numero"));
            const number2 = parseInt(prompt("Inserisci il secondo numero"));
            const number3 = parseInt(prompt("Inserisci il terzo numero"));
            const number4 = parseInt(prompt("Inserisci il quarto numero"));
            const number5 = parseInt(prompt("Inserisci il quinto numero"));

            userNumArr.push(number1, number2, number3, number4, number5);
        } else {
            seconds--;
        }


        let checkNum = 0

        for (let i = 0; i < 5; i++) {
            if (myNumbers[i] === userNumArr[i]) {
                checkNum++;
            }
        }

        if (checkNum === 5) {
            // myUserResult.innerHTML = "hai indovinato tutti i numeri!";
            alert ("Hai indovinato tutti i numeri!")
        } else if (checkNum === 0) {
            // myUserResult.innerHTML = "Mi dispiace, hai sbagliato tutti i numeri";
            alert ("mi dispiace, non hai indovinato nessun numero")
        } else {
            // myUserResult.innerHTML = `Hai indovinato solo ${checkNum}`;
            alert(`Hai indovinato solo i numeri ${checkNum}`);
        }



    }
    , 1000);




// Aggiungo numeri casuali in ordine sparso in un arrey
function myRandomUniqNum(myNumItems, numMin, numMax) {
    const arrNum = [];
    while (arrNum.length < myNumItems) {
        let myRandomNum = getRandomNum(numMin, numMax);
        if (!arrNum.includes(myRandomNum)) {
            arrNum.push(myRandomNum);
        }
    }
    return arrNum;
}

// Creo numero random 
function getRandomNum(numMin, numMax) {
    let resultNum = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return resultNum;
}