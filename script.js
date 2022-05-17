/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const myNumbers = document.getElementById("numbers");
// Creo 5 numeri casuali
const myRandomNum = myRandomUniqNum(5, 1, 50);
//Stampo in pagina i 5 numeri casuali
myNumbers.innerHTML = myRandomNum;

//Imposto un timer, dopo di che i numeri spariscono
const countdown = setTimeout(
    function () {
        //nascondo numeri
        myNumbers.classList.add("display_none")
        console.log(myNumbers);
    }

    , 5000);





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