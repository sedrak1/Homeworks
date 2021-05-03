function arr_elems_calculating(arr, operation_symbol){
    res = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(operation_symbol === "+"){
            res = res + arr[i]
        }
        else if(operation_symbol === "-"){
            res = res - arr[i]
        }
        else if(operation_symbol === "*"){
            res = res * arr[i]
        }
        else if(operation_symbol === "/"){
            if(arr[i] === 0){
                console.log("The number is not divisible by 0")
                return
            }
            res = res / arr[i]
        }
        
    }
    return(res)
}
let test = arr_elems_calculating([12, 6, 1], "/")
console.log(test)