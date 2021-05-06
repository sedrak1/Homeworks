function is_isogram(str){
    for(let i = 0; i< str.length;i++){
        let word_without_current_letter = str.substring(0,i) + str.substring(i + 1)
        if(word_without_current_letter.includes(str[i])){
            return false
        }
    }
    return true
}
console.log(is_isogram("asdd"))