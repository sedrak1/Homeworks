function matrix_row_sum(arr){
    let sum_arr = []
    let sum_row = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            sum_row += arr[i][j] 
        }
        sum_arr.push(sum_row)
        sum_row = 0       
    }
    console.log(sum_arr)
}
