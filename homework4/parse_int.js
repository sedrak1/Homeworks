function parse_int(str){
    let parsed_int = 0
    while(str[0] === " "){
        str = str.substring(1)
    }
    if(str[0] * 1 !== Number(str[0])){
        return NaN
    }
    for(let i = 0; i < str.length; i++){
        
        if(str[i] * 1 === Number(str[i]) && str[i] !== " "){
            parsed_int = parsed_int * 10 + Number(str[i])
        }
        else if(str[i] === " "){
            return parsed_int
        }
        else{
            
            return parsed_int
        }
    }
    
    return parsed_int
    
}
let x = parse_int("   10 1    ")
console.log(x)