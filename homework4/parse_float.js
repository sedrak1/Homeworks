function parse_float(str){
    let parsed_float = 0
    
    while (str[0] === " "){
        str = str.substring(1)
    }
    
    if(str[0] * 1 !== Number(str[0])){
        return NaN
    }

    for(let i = 0; i < str.length; i++){

        if(str[i] * 1 === Number(str[i]) && str[i] !== " "){
            parsed_float = parsed_float * 10 + Number(str[i])
        }

        else if(str[i] === "."){
            i++
            parsed_float += "."

            for(i; i < str.length; i ++){

                if(Number(str[i]) === Number(str[i])){
                    parsed_float += str[i]
                }

                else{
                    return Number(parsed_float)
                }

            }
        }

        else{       
            return Number(parsed_float)

        }
    }
    
    return Number(parsed_float)

}
let x = parse_float("  1  55 62")
console.log( x)