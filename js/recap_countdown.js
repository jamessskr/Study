const dDay = new Date("2021/12/01").getTime();
const now = new Date().getTime();
const leftTime = dDay - now;
console.log(dDay, now, leftTime)