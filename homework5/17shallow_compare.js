function shallow_compare(obj1, obj2){
    let obj1_values = Object.values(obj1)
    let obj2_values = Object.values(obj2)
    let obj1_keys = Object.keys(obj1)
    let obj2_keys = Object.keys(obj2)
    if(obj1_keys.length !== obj2_keys.length){
        return false
    }
    if(obj1_values.length !== obj2_values.length){
        return false
    }
    for(let i = 0; i < obj1_keys.length; i++){
        if(obj1_keys[i] !== obj2_keys[i]){
            return false
        }
    }
    for(let i = 0; i < obj1_values.length; i++){
        if(obj1_values[i] !== obj2_values[i]){
            return false
        }
    }
    return true
}
let a = { a: "1" };
let b = { a: "2"};
let test = shallow_compare(a,b)
console.log(test)