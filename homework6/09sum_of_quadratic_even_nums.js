function is_quadratic(num){
    if(Math.floor(num ** 0.5) === num ** 0.5){
        return true
    }
    else{
        return false
    }
}

function sum_of_even_quadratic_nums(arr){
    let res = 0
    for(let i = 0; i< arr.length; i++){
        if(is_quadratic(arr[i]) && arr[i] % 2 === 0)
        res += arr[i]
    }
    return res
}

console.log(sum_of_even_quadratic_nums([]))