function arr_larger_elems_than_num(arr, num){
    res_arr = []
    for(let i = 0; i < arr.length; i ++){
        if(arr[i]> num){
            res_arr.push(arr[i])
        }
    }
    if(res_arr.length === 0){
        console.log("Such values do not exist.")
        return 
        
    }
    else{
        return res_arr
    }
}
let test = arr_larger_elems_than_num([1, 1, 2, -3, 0, 8, 4, 0], 9)
console.log(test)