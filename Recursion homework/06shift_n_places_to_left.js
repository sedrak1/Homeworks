function shift_n_elements(arr, n = 0){
    if(n === 0){
        return arr
    }
    if(n < 0){
        arr.unshift(arr[arr.length - 1])
        arr.pop()
        return shift_n_elements(arr, n + 1)
    }
    arr.push(arr[0])
    arr.shift()
    return shift_n_elements(arr, n - 1)
}
console.log(shift_n_elements([1,2,3,4,5,6], -2))