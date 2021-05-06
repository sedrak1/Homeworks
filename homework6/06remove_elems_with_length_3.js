function remove_elements_with_length_less_3(arr){
    res_arr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 3){
            res_arr.push(arr[i])
        }
    }
    return res_arr
}
console.log(remove_elements_with_length_less_3(["kia", "tesla", "bmw", "mercedes"]))