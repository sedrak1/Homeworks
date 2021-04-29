function product_division_by_sum(num) {
    let sum = 0
    let prod = 1
    if (num === 0) {
        console.log("Cannot calculate")
        return
    }
    while (num > 0) {
        sum += num % 10
        prod *= num % 10
        num = (num - (num % 10)) / 10
    }
    if(prod % sum === 0){
        console.log("Quotient is ", prod / sum)
        return
    }
    console.log("Reminder is", prod % sum)
}
