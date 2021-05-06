function is_contain_only_unique_elements(arr){
    
    for(let i = 0; i < arr.length; i ++){
        let temp = arr.shift()
        if(arr.includes(temp)){
            return false
        }
        arr.push(temp)
    }
    return true
}

console.log(is_contain_only_unique_elements(["asd",1,1,2,3]))