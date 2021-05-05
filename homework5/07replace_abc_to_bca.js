function replace_abc_to_bca(str){
    for(let i = 0; i < str.length; i += 3){
        if(str.substring(i).length < 3){
            continue
        }
        str = str.substring(0 , i) + str.substring(i + 1, i + 3) + str[i] + str.substring(i + 3)
    }
    return str
}
let test = replace_abc_to_bca("dfgjkloyp")
console.log(test)