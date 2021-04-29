function factorial(num){
    let a = num
    if(num === 0 || num === 1){
        console.log(1)
        return
    }
    for(let i = 0; i < a; i ++){
        num *= (a - 1)
        a--
    }
    
    console.log(num)
}
