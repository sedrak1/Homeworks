function find_nums(str){
    let nums_arr = []
    let current_num = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === "-" && Number(str[i + 1]) === str[i + 1] * 1){
            i++
            current_num = Number(str[i])
            i++
            while(Number(str[i]) === str[i] * 1){
                current_num = current_num * 10 + Number(str[i])
                i++
            }
            current_num = -1 * current_num
            nums_arr.push(current_num)
            current_num = 0
                 
        }
        else if(Number(str[i]) !== str[i] * 1 && current_num !== 0){
            nums_arr.push(current_num)
            current_num = 0
            continue
        }
        else if(Number(str[i]) !== str[i] * 1){
            continue
        }
        else if(Number(str[i]) === str[i] * 1){
            while(Number(str[i]) === str[i] * 1){
                current_num = current_num * 10 + Number(str[i])
                i++
            }
            nums_arr.push(current_num)
            current_num = 0
        }
    }
    return nums_arr
}

function sum_of_nums_from_string(str){
    let arr = find_nums(str)
    let res = 0
    for(let i = 0; i < arr.length; i++){
        res += arr[i]
    }
    return res
}
let test = sum_of_nums_from_string("“Wert12lop-12”")
console.log(test)