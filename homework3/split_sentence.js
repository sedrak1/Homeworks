function spliting_sentence(str){
    let arr = str.split(" ")
    let last_elem = arr.pop()
    if(last_elem[last_elem.length -1] === "." || last_elem[last_elem.length -1] === "!"){
        arr.push(last_elem.substring(0, last_elem.length - 1))
    }
    console.log(arr)
}
