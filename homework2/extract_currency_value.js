function extract_currency_value(str){
    str = prompt("Enter money with currency")
    alert(+str.slice(1))
}
extract_currency_value()