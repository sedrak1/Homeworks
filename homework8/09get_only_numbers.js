function get_only_numbers(arr){
    return arr.filter(el => typeof el === "number" && !isNaN(el))
}

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN, undefined]

console.log(get_only_numbers(arr))