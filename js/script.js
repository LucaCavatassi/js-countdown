let seconds = document.querySelector(".countdown")
console.log(seconds);

setInterval (timerHandler(seconds.innerText), 1000) 

console.log(timerHandler(seconds.innerText));