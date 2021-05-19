function get_day_number(str){
    str = str.split("/")
    let day = str[1]
    let month = str[0]
    let year = str[2]
    let res = 0
    let months_days_count = [31,28,31,30,31,30,31,31,30,31,30,31]
    if(year % 4 === 0){
        months_days_count[1] = 29
    }
    for(let i = 0; i < month; i++){
        if(i === month - 1){
            res += Number(day)
        }
        else{
            res += months_days_count[i]
        }
    }
    return res
}
console.log(get_day_number("12/13/2021"))
console.log(get_day_number("12/13/2020"))