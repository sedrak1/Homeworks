function odd_or_not(num){
    if((num % 10) % 2 === 0){
        return false
    }
    num = Math.floor(num / 10)
    if(num === 0){
        return true
    }
    return odd_or_not(num)
}
console.log(odd_or_not(3))
