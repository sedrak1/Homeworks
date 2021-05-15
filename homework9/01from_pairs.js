function from_pairs(arr){
    res_obj = {}
    
    for([key, value] of arr){
        res_obj[key] = value
    }
    return res_obj
}
console.log(from_pairs([
    ["a", 1],
    ["b", 2],
    ]))