function fibonacci_number(num){
    let fib = [0, 1, 1]
    let last_fib = 1
    let pre_last_fib = 1
    let next_fib = last_fib + pre_last_fib
    if(num > 2){
        for (let i = 2; i < num; i++){
            fib.push(next_fib)
            pre_last_fib = last_fib
            last_fib = next_fib
            next_fib += pre_last_fib
        }
        console.log(fib[fib.length - 1])
        return
    }
    console.log(fib[num])
    
}
