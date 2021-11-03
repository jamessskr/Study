const gameForm = document.querySelector("#gameForm");
const setMax = document.querySelector("#max");
const setGuess = document.querySelector("#guess");
const proof = document.querySelector("#proof")
const proofGuess = document.querySelector("#proof span:first-child")
const proofMachine = document.querySelector("#proof span:last-child")

const resultWon = document.querySelector(".resultWon")
const resultLose = document.querySelector(".resultLose")

const HIDDEN_CLASS = "hidden"

function handlePlayGame(e) {
    e.preventDefault();
    const guessValue = parseInt(setGuess.value);
    const machineValue = parseInt(Math.round(Math.random() * setMax.value));

    proofGuess.innerText = guessValue;
    proofMachine.innerText = machineValue;
    proof.classList.remove(HIDDEN_CLASS);

    if (guessValue === machineValue) {
        resultWon.classList.remove(HIDDEN_CLASS);
        resultLose.classList.add(HIDDEN_CLASS)
    } else {
        resultLose.classList.remove(HIDDEN_CLASS);
        resultWon.classList.add(HIDDEN_CLASS)
    }

    console.log(setMax)
    console.log(typeof setMax.value, typeof setGuess.value)
    console.log(typeof machineValue, machineValue, typeof guessValue, guessValue)
}

gameForm.addEventListener("submit", handlePlayGame)
