function my_splice(arr, start = 0, del_count = arr.length - start - 1, ...args){
    let res_arr = []
    let args_length = args.length
    if(start < 0){
        start += arr.length
    }

    if(start > arr.length){
        for (let i = 0; i < args_length; i++) {
            arr.push(args[i])            
        }
        return []
    }

    if(del_count < 0){
        arr.length += args_length
        for(let i = 0; i < args.length; i++){
            for(let j = 0; j < arr.slice(start).length;j++){
                arr[arr.length - 1 - j] = arr[arr.length - 2 - j]  //shifting array elements right starting from start index with arguments length          

            }
        }
        for(let i = 0; i < args_length; i ++){
            arr[start + i] = args[i]  //insert arguments in array
        }
        return []
    }
    // pushing elements to result array
    for(let i = 0; i < arr.length; i++){
        if(i >= start && i < start + del_count ){
            res_arr.push(arr[i])  
        }
    }
    //

    if(args.length >= del_count){
        arr.length += args_length - del_count
        for(let i = 0; i< args_length - del_count; i++){
            for(let j = 0; j < arr.slice(start).length; j++){
                arr[arr.length - 1 - j] = arr[arr.length - 2 - j]            
            }

        }
        for(let i = 0; i < args_length; i++){
            arr[start + i] = args[i]
            
        }
    }
    
    else{
        for(let i = start; i < del_count + start; i++){
            arr[i] = args[0]
            args.shift()
        }
        for(let i = 0; i < del_count - args_length ;i++){
            for(let j = 0; j < arr.length - start - args_length - 1;j++){
                arr[start + args_length + j] = arr[start + args_length + j + 1]
                
            } 
            arr.length --
        }
    }
    return res_arr
}
let arr = [1,2,3,4,5,6,7]
console.log(my_splice(arr,6,8,"a","b",'c',"d","e","f","g","h"))
console.log(arr)
arr = [1,2,3,4,5,6,7]
console.log(arr.splice(6,8,"a","b",'c',"d","e","f","g","h"))
console.log(arr)

