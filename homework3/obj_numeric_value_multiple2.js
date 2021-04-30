function multiple_obj_value(obj){
    for (let key in obj){
        if(typeof(obj[key]) === "number"){
            obj[key] *= 2
        }
    }
    console.log(obj)
}
