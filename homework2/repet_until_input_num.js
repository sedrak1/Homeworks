function readNumber(num){
    num = prompt("Enter a number")
    if (Number(num) != parseInt(num)){
        return readNumber()
    }
    else if(num === null || num === '') {
        alert( null)
    }
    
    alert(+(num)) 
}
readNumber()