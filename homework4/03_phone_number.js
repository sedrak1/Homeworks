function phone_number(str){
    if(str[0] === "+"){
        str = str.substring(1)
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            str = str.substring(0, i) + str.substring(i + 1)
            i--
        }
        else if(Number(str[i]) !== Number(str[i])){
            console.log("Bad number")
            return
        }
    }
    if(str.length !== 10){
        console.log("Bad number")
        return
    }
    return str 
}
phone_number("+123 456 789+")