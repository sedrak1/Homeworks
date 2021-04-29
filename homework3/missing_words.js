function missing_words(str, arr){
    let new_str = ""
    for(let i = 0; i < str.length; i++){
        if(str[0] === "_"){
            str = arr[0] + str.substring(1)
            arr.shift()
        }
        else if(str[i] === "_"){
            new_str = str.substring(0,i) + arr[0] + str.substring(i + 1 )
            str = new_str
            i += arr[0].length
            arr.shift()
            
        }
    }
    console.log(new_str)
}
