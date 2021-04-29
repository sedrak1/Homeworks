function first_equal_index(arr, num){
    let index = 0
    for(let i = 0; i < arr.length; i++){
        if(num === arr[i]){
            console.log(i)
            return
        }
        if (Math.abs(num - arr[index]) > Math.abs(num - arr[i])){
            index = i
        }
    }
    console.log(index)
}
