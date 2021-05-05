function get_all_even_nums_between_args(first_num, last_num){
    let res_str = ""
    let loop_size = last_num - first_num
    if(first_num % 2 !== 0){
        first_num += 1
    }
    if(last_num % 2 !== 0){
        console.log("Such numbers does not exist.")
        return
    }
    for(let i = 0; i < loop_size; i += 2 ){
        res_str += first_num + i + ","
    }
    return res_str.substring(0, res_str.length - 1)
}
let test = get_all_even_nums_between_args(19,199)
console.log(test)