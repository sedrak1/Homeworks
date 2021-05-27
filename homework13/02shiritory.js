function Shiritory(){
    this.words_arr = []
    this.game_over = false
}
Shiritory.prototype.play = function(word){
    if(!this.game_over){
        if(this.words_arr.length !== 0){
            let last_word = this.words_arr[this.words_arr.length - 1]
            let last_word_last_letter = last_word[last_word.length - 1]
            if(this.words_arr.includes(word)){
                this.game_over = true
                return "Game Over"
            }
            if(word[0].toLowerCase() === last_word_last_letter.toLowerCase()){
                this.words_arr.push(word)
                return this.words_arr
            }
            else{
                this.game_over = true
                return "Game Over"
            }
        }
        else{
            this.words_arr.push(word)
            return this.words_arr
        }
    }
}
Shiritory.prototype.restart = function(){
    this.words_arr = []
    this.game_over = false
    return "Game restarted"
}

game = new Shiritory()
console.log(game.play("Moskva"))
console.log(game.play("Amsterdam"))
console.log(game.play("Moskva"))
console.log(game.restart())
console.log(game.play("Amsterdam"))
console.log(game.play("che du lav es xaxum"))