function largest_product_adjacent_elements(arr){
    let res = arr[0] * arr[1]
    for ( let i = 1; i < arr.length; i++){
        if(arr[i] * arr[i+1] > res){
            res = arr[i] * arr[i+1]
        }
        if(i + 1 === arr.length - 1){
            return res
        }
    }
}
console.log(largest_product_adjacent_elements([-1,3,10,0]))