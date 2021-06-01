function sum_of_arr_digits(arr){
    if(arr.length === 0 ){
        return 0
    }
    return arr[0] + sum_of_arr_digits(arr.slice(1))
}
console.log(sum_of_arr_digits([1,2,3,5,6]))