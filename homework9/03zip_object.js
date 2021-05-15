function zip_object(arr1, arr2){
    let res_obj = {}
    for(let i = 0; i< arr1.length; i++){
        if(arr2.length <= i ){
            res_obj[arr1[i]] = null
        }
        else{
            res_obj[arr1[i]] = arr2[i]
        }
    }
    return res_obj
}
let arr =[];
console.log(zip_object(["a", "b", "c","d"], [1, 2]))