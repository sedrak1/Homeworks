function reverse_num(num){
    num = String(num)
    let reversed = ""
    for (let i = 0; i < num.length; i++){
        reversed = reversed + num[num.length - i - 1]
    }
    console.log(reversed)
}
