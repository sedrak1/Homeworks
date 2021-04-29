function last_digit_to_begining(num){
    let last_digit = num % 10
    if(last_digit === 0){
        console.log(num)
    }
    else{
        num = String(num)
        last_digit = String(last_digit)
        console.log(last_digit + num.substring(0, num.length - 1))
    }
}
