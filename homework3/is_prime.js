function is_prime(num){
    if (num === 2){
        console.log("Yes")
            return
    }
    else if (num < 2){
        console.log("Invalid number")
            return
    }
    for(let i = 2; i < num ** 0.5; i++){
        if(num % i === 0){
            console.log("No")
            return
        }
    }
    console.log("Yes")
}