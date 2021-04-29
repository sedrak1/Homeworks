function min_max_digits_dif(num) {
    let max = -Infinity
    let min = +Infinity
    while(num > 0){
        if(num % 10 > max){
            max = num % 10
        }
        if(num % 10 < min){
            min = num % 10
        }
        num = (num - num % 10) / 10
    }
    console.log(max - min)
}
min_max_digits_dif(1681)