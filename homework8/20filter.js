function filter(arr, fn){
    let res_arr =[]
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            res_arr.push(arr[i])
        }
    }
    return res_arr
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.filter(word => word.length > 6));

console.log(filter(words, word => word.length > 6));