
function min_positive_element(arr){
    [min, ...others] = arr
    if(others.length === 0){
        if(min < 0){
            return -1
        }
        return min
    }
    if(min >= 0 && min < others[0] && others[0] >= 0){
        others[0] = min
        return min_positive_element(others)
    }
    else if(min >= 0 && others[0] < 0){
        others[0] = min
        return min_positive_element(others)
    }
    return min_positive_element(others)
}
let arr = [7,8,9,6,5,4]
console.log(min_positive_element(arr))
