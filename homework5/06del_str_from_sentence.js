function del_str_from_sentence(sentence, str){
    let loop_size = str.length + 1
    let j = 0
    for(let i = 0; i < sentence.length; i++){
        j = 0
        let k = i
        while(sentence[k] === str[j]){
            console.log(j,k)
            loop_size--
            j++
            k++
        }
        if (loop_size === 0){
            loop_size = str.length
            while(loop_size !== 0){
                sentence = sentence.substring(0 , i) + sentence.substring(i + 1)
                loop_size--
            }
            i--
        }
        
        loop_size = str.length
    }
    return sentence
}
let test = del_str_from_sentence("“Yes, Londooooooooooooon. You know: fish, chips, cup ‘o tea, bad  food, worse weather”", "o")
console.log(test)