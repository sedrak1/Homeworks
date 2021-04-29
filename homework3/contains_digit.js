function contains_digit(digit, num){
    num = String(num)
    for(let i = 0; i < num.length; i++){
        if(digit === (+num[i])){
            console.log("Yes")
            return
        }
    }
    console.log("No")
}
