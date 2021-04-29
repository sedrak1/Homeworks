function sort_by_ascending(a, b, c){
    let max = a
    let temp
    let arr = []
    if(a >= b){
        temp = a
        a = b
        b = temp
    }
    if (a >= c){
        temp = a
        a = c
        c = temp
    }
    if (b >= c){
        temp = b
        b = c
        c = temp
    }
    arr.push(a, b, c)
    console.log(arr)
}
