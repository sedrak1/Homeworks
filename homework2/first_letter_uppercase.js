function first_to_upper_case(str){
    str = prompt("Enter word")
    let first_let = str[0].toUpperCase()
    str = str.substring(1)
    alert(first_let + str)
}
first_to_upper_case()