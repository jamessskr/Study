const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoUl = document.querySelector("#todoList");

let todoListToArr = []

function handleTodoDataPush() {
    localStorage.setItem("todoListToArr", JSON.stringify(todoListToArr))
}

function todoRemove(e) {
    const willBeRemove = e.target.parentElement;
    willBeRemove.remove()
}

function handleTodoPaint(todoWrited) {
    const li = document.createElement("li");
    li.id = new Date().getTime();
    const span = document.createElement("span");
    span.innerText = todoWrited;
    const button = document.createElement("button")
    button.innerText = "X";

    todoUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    todoUl.classList.remove("hidden")

    button.addEventListener("click", todoRemove)
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const todoWrited = todoInput.value;
    const newTodoWrited = {
        text: todoWrited,
        id: new Date().getTime()
    }
    console.log(newTodoWrited)
    todoListToArr.push(todoWrited)
    todoInput.value = "";
    handleTodoPaint(todoWrited)
    handleTodoDataPush();
}

todoForm.addEventListener("submit", handleTodoSubmit)

const todoNewArr = JSON.parse(localStorage.getItem("todoListToArr"))

todoListToArr = todoNewArr;

if (todoNewArr) {
    todoNewArr.forEach(item => {handleTodoPaint(item)});
}