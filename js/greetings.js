const contentLogin = document.querySelector(".contentLogin")
const content = document.querySelector(".content")

const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginInput")
const greetingMSG = document.querySelector("#greetingMSG")

const HIDDEN_CLASS = "hidden"

function handleLogin(e) {
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    contentLogin.classList.add(HIDDEN_CLASS);
    greetingMSG.innerText = `Hello, ${username}`;
    content.classList.remove(HIDDEN_CLASS);
    bgRandom()
}

const savedUsername = localStorage.getItem("username")

if (savedUsername === null) {
    contentLogin.classList.remove(HIDDEN_CLASS);
    content.classList.add(HIDDEN_CLASS);
    document.body.style = "background-color: #232323";
    loginForm.addEventListener("submit", handleLogin);
} else {
    greetingMSG.innerText = `Hello again, ${savedUsername} 🌞`;
    content.classList.remove(HIDDEN_CLASS);
    contentLogin.classList.add(HIDDEN_CLASS);
    bgRandom();
}