function sorting_arr(arr){
    let new_arr = []
    let loop_length = Math.max(...arr) - Math.min(...arr)
    
    
    for(let i = Math.min(...arr); i <= loop_length + Math.min(...arr); i++){
        if(arr.includes(i)){
            new_arr[i] = i
        }
        else{
            new_arr.push(undefined)
        }    
    }

    //deleting empty items
    for(let i = 0; i < Math.min(...arr); i++){
        new_arr.shift()
    }

    console.log(new_arr)
}
sorting_arr([0,26, 30, 19, 5])
