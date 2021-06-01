function index_of_violation(arr){
    arr.length ++
    [first, ...tail] = arr
    if(tail[0] === undefined){
        return -1
    }
    if(first <= tail[0]){
        
        return index_of_violation(tail)
    }
    return tail.length - tail.indexOf(undefined)
}
let arr = [-7, -5, -5, 3, 12,45, 55]
console.log(index_of_violation(arr))
