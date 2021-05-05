function get_product_of_biggest_negative_nums(arr) {
    let biggest_negative_num = -Infinity
    let product_of_biggest_negatives = 1
    let contain_negative_num = false
    let is_invalid = true
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            is_invalid = false
            if(arr[i][j] > biggest_negative_num && arr[i][j] < 0){
                biggest_negative_num = arr[i][j]
                contain_negative_num = true
            }
        }
        if(biggest_negative_num === -Infinity){
            continue
        }
        product_of_biggest_negatives *= biggest_negative_num
        biggest_negative_num = -Infinity
        
    }
    if(is_invalid === true){
        console.log("Invalid Argument")
        return
    }
    if(contain_negative_num){
        return product_of_biggest_negatives
    }
    
    
    else if(!contain_negative_num){
        console.log("No negatives")
        return
    }
    
}
let test = get_product_of_biggest_negative_nums([2, 9, 3, 0])
console.log(test)