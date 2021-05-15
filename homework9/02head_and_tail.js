function get_head(arr){
    const [head,...tail] = arr
    
    return head
}
function get_tail(arr){
    const [head,...tail] = arr
    
    return tail
}
arr = [1,2,3,4,5]
console.log(get_head(arr))
console.log(get_tail(arr))
