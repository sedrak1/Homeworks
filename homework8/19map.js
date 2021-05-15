function map(arr, fn){
    let res_arr =[]
    for(let i = 0; i < arr.length; i++){
        res_arr.push(fn(arr[i]))
    }
    return res_arr
}

const array1 = [1, 4, 9, 16];

console.log(array1.map(x => x * 2));

console.log(map(array1, x => x * 2));