function reduce(arr, fn, default_acc) {
    let acc = default_acc === undefined ? arr[0] : default_acc    
    for (let i = 0; i < arr.length; i++) {
        if(default_acc === undefined && i === 0){
            i++
        }
        acc = fn(acc, arr[i]);
    }
    return acc;
}
const arr = [
    ["aa", 1],
    ["bbbb", 2],
    ["ccc", 3],
    ["cccddddd", 3],
    ["cccddddd", 3],
  ]
const reducer = (accumulator, current_value) => accumulator + current_value;
console.log(arr.reduce(reducer));
console.log(arr.reduce(reducer,[] ));

console.log(reduce(arr, reducer))
console.log(reduce(arr, reducer,[]))