function binary_to_decimal(num){
    let decimal = 0
    let i = 0
    while(num > 0){
        decimal += (num % 10) * (2 ** i)
        num = (num - num % 10) / 10
        i++
    }
    console.log(decimal)
}
