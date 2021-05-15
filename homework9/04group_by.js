function group_by(arr, fn){
    res_obj = {}
    for(let i = 0; i < arr.length; i++){
        if(res_obj[fn(arr[i])] === undefined){
            res_obj[fn(arr[i])] = [arr[i]]
        }
        else{
            res_obj[fn(arr[i])].push(arr[i])
        }
    }
    return res_obj
}
console.log(group_by(["one", "two", "three"], (i) => i.length))