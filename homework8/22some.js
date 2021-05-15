function some(arr, fn){
    counter = 0
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            counter ++
        }
    }
    return counter > 0
}


const array = [40];

console.log(array.some(currentValue => currentValue < 40));
console.log(some(array, currentValue => currentValue < 40));