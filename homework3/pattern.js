row = 5
arr = []
str = ""
let k = 4
let h = 0
for (let i = 1; i <= row; i++){
    for(let j = 0; j < i; j ++ ){
        arr.push(h + i)
        h+=k
        k--
    }
    h = 0
    k = 4
    for(let j = 0; j < arr.length; j++){
        str += arr[j] + " "
    }
    console.log(str)
    str = ""
    arr = []
}

