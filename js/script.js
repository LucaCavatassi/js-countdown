let domElem = document.querySelector(".countdown");
let seconds = 11;

const countdown = setInterval (function(){
    seconds--; console.log(seconds);

    if (seconds === 0){
        clearInterval(countdown)
        console.log("AUGURI");
    }
}, 1000) 

