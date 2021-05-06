function filter_falsy_values(arr){
    res_arr = []
    for(let i = 0; i< values.length; i++){
        if(arr[i]){
            res_arr.push(arr[i])
        }
    }
    return res_arr
}
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filter_falsy_values(values)) ; 
console.log(filter_falsy_values(["hello", 1233, []])) ;

