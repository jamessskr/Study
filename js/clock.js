const clockText = document.querySelector("#clock")

function defineClock() {
    const date = new Date()
    const year = date.getFullYear();
    const month = String(Math.floor(date.getMonth())).padStart(2, "0")
    const weekdays = date.getDay(); //요일
    const days = String(Math.floor(date.getDate())).padStart(2, "0")//일자
    const hours = String(Math.floor(date.getHours())).padStart(2, "0")
    const minutes = String(Math.floor(date.getMinutes())).padStart(2, "0")
    const seconds = String(Math.floor(date.getSeconds())).padStart(2, "0")
    clockText.innerText = `${hours}:${minutes}:${seconds}`
}

defineClock();
setInterval(defineClock, 1000)