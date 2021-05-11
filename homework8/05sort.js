function sort_by(arr, str){
    let res_arr = []
    if(str === "Desc"){
        res_arr = arr.sort((a,b) => b-a)
    }
    else {
        res_arr = arr.sort((a,b) => a-b)
    }

    return res_arr
}
console.log(sort_by([6,3,15,5000]))