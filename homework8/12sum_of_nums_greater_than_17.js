function sum_of_numbers_greater_than_17(arr){
    return arr.reduce((accumulator, currentValue) => {
        if(currentValue >= 18){
            accumulator += currentValue
        }
        return accumulator
    } , 0)
}

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]

console.log(sum_of_numbers_greater_than_17(arr))