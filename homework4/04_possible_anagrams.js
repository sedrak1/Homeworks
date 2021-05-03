function mixed_chars(str, mixed_str){
    if(str.length !== mixed_str.length){
        return false
    }
    for(let i = 0; i < str.length; i++ ){
        for(let j = 0; j < str.length; j++){
            if(str[i] === mixed_str[j]){
                mixed_str = mixed_str.substring(0 , j) + mixed_str.substring(j + 1)
                j--
            }
        }
    }
    if(mixed_str === ""){
        return true
    }
}


function possible_anagrams(str, arr){
    res_arr = []
    
    for(let i = 0; i < arr.length; i++){
        if(mixed_chars(str, arr[i])){
            res_arr.push(arr[i])
        }
    }
    return(res_arr)
}
let test = possible_anagrams("pencil",["licnep","circular","pupil","nilcpe","leppnec"])
console.log(test)