function delete_first_element(arr, i = 0){
    if(i === arr.length && i !== 0){  
        arr.length --
        return arr
    }
    else if(i === arr.length && i === 0) {
        return []
    }
    arr[i] = arr[i + 1]
    return delete_first_element(arr, i + 1)
}
console.log(delete_first_element([5]))

