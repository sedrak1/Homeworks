function find(arr, fn){
    for (const el in arr) {
        if (fn(arr[el])) {
            return arr[el]
        }
    }
}

function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  let arr = [4, 6, 8, 9, 12]
  let arr1 = [4, 6, 7, 9,3, 12]
  console.log(arr.find(isPrime)); // -1, not found
  console.log(arr1.find(isPrime)); // 2 (array[2] is 7)
  console.log(arr)
  console.log(arr1)
  console.log(find(arr, isPrime))
  console.log(find(arr1, isPrime))