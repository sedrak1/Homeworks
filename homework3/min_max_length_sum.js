function min_max_length_sum(arr){
    let max_length = -Infinity
    let min_length = +Infinity
    for(let i = 0; i < arr.length; i ++){
        if(max_length < arr[i].length){
            max_length = arr[i].length
        }
        if(min_length > arr[i].length){
            min_length = arr[i].length
        }
    }
    console.log(min_length + max_length)
}