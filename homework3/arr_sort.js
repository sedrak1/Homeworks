function sorting_arr(arr){
    let new_arr = []
    let loop_length = Math.max(...arr) - Math.min(...arr)
    for(let i = 0; i <= loop_length; i++){
        if(arr.includes(i)){
            new_arr[i] = i
        }
        else{
            new_arr.push(undefined)
        }    
    }
    console.log(new_arr)
}
