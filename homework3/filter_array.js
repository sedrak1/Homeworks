function is_even(num){
    if(num % 2 === 0 ){
        return true
    }
    return false
}
function filter_arr(arr){
    let even_arr =[]
    let odd_arr =[]
    let nums_arr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number"){
            if(is_even(arr[i]) === true){
                even_arr.push(arr[i])
            }
            else if(is_even(arr[i]) === false){
                odd_arr.push(arr[i])
            }
        }
    }
    console.log(odd_arr.concat(even_arr))
}
