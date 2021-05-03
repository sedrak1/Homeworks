function sort_odds_and_evens(arr){
    odd_arr = []
    even_arr = []
    res_arr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even_arr.push(arr[i])
        }
        else(
            odd_arr.push(arr[i])
        )
    }
    res_arr.push(odd_arr,even_arr)
    return res_arr
    
}
let test = sort_odds_and_evens([45, 12, 3, 6, 17, 0])
console.log(test)