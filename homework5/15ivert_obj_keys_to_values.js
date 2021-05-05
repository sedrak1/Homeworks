function invert_object_keys_to_values(obj){
    let res_obj = {}
    let obj_keys = Object.values(obj)
    let obj_values = Object.keys(obj)
    for(let i = 0; i < obj_keys.length; i ++){
        if(res_obj.hasOwnProperty(obj_keys[i])){
            let values_arr = []
            for(let j = 0; j < obj_values.length; j ++){
                if(obj_keys[i] === obj_keys[j] )
                values_arr.push(obj_values[j])
            }
            res_obj[obj_keys[i]] = values_arr
        }
        else{        
            res_obj[obj_keys[i]] = obj_values[i]
        }
    }
    return res_obj
}
let test = invert_object_keys_to_values({ a: 1, b: 2, c: 2, d: 2, e: 1 })
console.log(test)