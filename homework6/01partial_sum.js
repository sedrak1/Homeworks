const sum = (num = 0) => {
    const another_sum = (num1 = 0) => {
        return num1 + num
    }

    return another_sum
}
const addOne = sum(1);
console.log(addOne(2)); 
const addTen = sum(10);
console.log(addTen(2)); 
console.log(addOne(4)); 
console.log(addTen(10)); 
console.log(sum(1)(2));