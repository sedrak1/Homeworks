function get_all_subsets_of_length_3(arr){
    let res_arr = []
    let subset_arr = []
    for(let i = 0; i < arr.length; i ++){
        subset_arr.push(arr[i])
        for(let j = i + 1; j < arr.length; j ++){
            subset_arr.push(arr[j])
            for(let k = j + 1; k < arr.length; k ++){
                subset_arr.push(arr[k])
                res_arr.push(subset_arr)
                subset_arr = subset_arr.slice(0 , 2)
            }
            subset_arr = subset_arr.slice(0, 1)
        }
        subset_arr = []
    }
    return res_arr
}
let test = get_all_subsets_of_length_3([5,9,0,7,8])
console.log(test)