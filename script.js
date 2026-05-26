const parent = document.getElementById("parent");
const timer = document.getElementById("timer");


setInterval(() => {  
     const currentDate = new Date().getTime();
const targetDate = new Date(2027,7,18).getTime();
const timeDifference = targetDate - currentDate;
const Days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const Hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const Minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const Seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

timer.textContent =`Remaining time: ${Days} :days ${Hours} :hours ${Minutes} :minutes ${Seconds} :seconds`;
},1000);