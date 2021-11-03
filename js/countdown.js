const clock = document.querySelector("h1")

function getClock() {
    const xMasEve = new Date("2021/12/24").getTime();
    const now = new Date().getTime();
    const leftTimeByMilliseconds = xMasEve - now
    
    const seconds = 1000 // 1초
    const minutes = seconds * 60 // 1분
    const hours = minutes * 60 // 1시간
    const days = hours * 24 // 1일

    const daysValue = String(Math.floor((leftTimeByMilliseconds / days) + 1)).padStart(2, "0")
    const hoursValue = String(Math.floor((leftTimeByMilliseconds % days) / hours)).padStart(2, "0")
    const minutesValue = String(Math.floor((leftTimeByMilliseconds % hours) / minutes)).padStart(2, "0")
    const secondsValue = String(Math.floor((leftTimeByMilliseconds % minutes) / seconds)).padStart(2, "0")

    clock.innerText = `${daysValue}Days, ${hoursValue}Hours, ${minutesValue}Mins, ${secondsValue}Seconds Left`

}
getClock()
setInterval(getClock, 1000)