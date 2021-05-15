function my_slice(arr, start = 0, end = arr.length){
    if(start < 0){
        start = arr.length + start
    }
    if(end < 0){
        end = arr.length + end
    }
    if(end > arr.length){
        end = arr.length
    }
    let res_arr = []
    for(let i = start; i < end; i++){
        res_arr.push(arr[i])
    }
    return res_arr
}

arr = [1,2,3,4,5]
console.log(my_slice(arr,-3,-20 ))
console.log(arr)
console.log(arr.slice(-3,-20 ))
console.log(arr)