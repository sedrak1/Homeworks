function flatten(arr, i = 0){
    if(i === arr.length){
        return arr
    }
    if(Array.isArray(arr[i])){
        arr = arr.slice(0,i).concat([...arr[i]]).concat(arr.slice(i + 1))
        console.log(arr)
        return flatten(arr, i)
    }
    return flatten(arr, i + 1)
}
console.log(flatten([14, [1, [[[3, []]], 1], 0]]))