function randomPinGen (){
    const randomNumber = parseInt(Math.random() * 10000) +"" ;
    if(randomNumber.length == 4){
        return randomNumber ;
    }else{
        return randomPinGen() ;
    }
}
document.getElementById("randomPinBtn").onclick = function(){
    const getRandomNum = randomPinGen();
    document.getElementById("randomPin").value = getRandomNum ;
};


document.getElementById("characters").onclick = function (event){
    const character = event.target.innerText ;
    const pinFile = document.getElementById("pin");
    const pinValue = pinFile.value
    if(isNaN(character)){
        if(character == "C"){
            pinFile.value = '' ;
        }else if(character == "<"){
            const pinArr = pinValue.split('');
            pinArr.pop();
            const pinBacked = pinArr.join('');
            pinFile.value = pinBacked ;
        }
    }else{
        let newPin = pinValue + character ;
        pinFile.value = newPin ;
    }
}



let tryNum = 0;
function tryCount(tryValue){
    if(tryValue >= 3){
        document.getElementById("tryWarning").style.display = "block" ;
    }else{
        document.getElementById("tryWarning").style.display = "none" ;
    }
}
document.getElementById('verifyPin').onclick = function(){
    const randomPinValue = document.getElementById("randomPin").value ;
    const setPinValue = document.getElementById("pin").value ;
    if(randomPinValue == setPinValue){
        document.getElementById("correct").style.display = "block" ;
        document.getElementById("wrong").style.display = "none" ;
        let tryNum = 0;
        tryCount(tryNum);
    }else{
        document.getElementById("wrong").style.display = "block" ;
        document.getElementById("correct").style.display = "none" ;
        tryNum = tryNum + 1 ;
        let tryFalse = tryNum ;
        tryCount(tryFalse);
    }
    
}

