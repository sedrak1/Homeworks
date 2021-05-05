function get_longest_substring(str){
    let substring_arr = []
    let j = 1
    let i = 0
    let word = ""
    let max_substring_length = ""
    while(j < str.length){
        if(str[j] === " "){
            j++
        }
        else if(str.substring(i,j).includes(str[j])){
            substring_arr.push(word)
            i ++
            j = i + 1
            word = ""
        }
        else{
            word = str.substring(i, j + 1)
            j++   
        }
    }
    
    for(let i = 0; i < substring_arr.length; i ++){
        if(substring_arr[i].length > max_substring_length.length){
            max_substring_length = substring_arr[i]
        }
    }
    return max_substring_length
}
let test = get_longest_substring("parting your soup is not a miracle, bruce.")
console.log(test)