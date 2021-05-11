function parse_int(arr){
    return arr.map((el) => {
        if(parseInt(el)){
            return parseInt(el)
        }
        else{
            return null
        }
        
    })
}
arr = ["1", "px", "2323"]
console.log(parse_int(arr))
