let domElem = document.querySelector(".countdown");
let seconds = 11;

const countdown = setInterval (function(){
    seconds--; 
    console.log(seconds);
    domElem.innerHTML = seconds;


    if (seconds < 0){
        clearInterval(countdown);
        console.log("AUGURI");
        domElem.innerHTML = "BUON ANNO";
    }
}, 1000) 

// const countdown = setInterval (counter(seconds), 1000) 

