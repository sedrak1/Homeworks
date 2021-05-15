function every(arr, fn){
    counter = 0
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            counter ++
        }
    }
    return counter === arr.length
}


const array = [1,2,3,40];

console.log(array.every(currentValue => currentValue < 40));
console.log(every(array, currentValue => currentValue < 40));