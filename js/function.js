function counter (number) {
    number--; 
    console.log(number);
    domElem.innerHTML = number;


    if (number < 0){
        clearInterval(countdown);
        console.log("AUGURI");
        domElem.innerHTML = "BUON ANNO";
    }
}