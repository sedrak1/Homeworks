function types_count(arr){
    let str_count = 0
    let nums_count = 0
    for(let i =0; i < arr.length; i++){
        if(typeof(arr[i]) === "number"){
            nums_count ++
        }
        else if(typeof(arr[i] === "string")){
            str_count ++
        }
    }
    console.log("Numbers: ", nums_count, ", Strings: ", str_count)
}
types_count([1, '10', 'hi', 2, 3])