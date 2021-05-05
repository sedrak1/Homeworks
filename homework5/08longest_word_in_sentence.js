function longest_word_in_sentence(sentence){
    let max_length_word = ""
    sentence = sentence.split("-")
    sentence = String(sentence)
    sentence = sentence.split(" ")
    sentence = String(sentence)
    
    sentence = sentence.split(",")
    for(let i = 0; i < sentence.length; i ++){
        if(sentence[i].length >= max_length_word.length){
            max_length_word = sentence[i]
        }
    }
    return max_length_word
}
let test = longest_word_in_sentence("Which would be worse to live as a monster, orto die as a good man?")
console.log(test)