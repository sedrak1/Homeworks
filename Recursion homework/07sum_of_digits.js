function sum_of_digits(num){
    if(num < 10){
        return num
    }
    let last_digit = num % 10
    let num_removed_last_digit = (num - last_digit) / 10
    num = last_digit + sum_of_digits(num_removed_last_digit)
    return sum_of_digits(num)
}
console.log(sum_of_digits(29))



