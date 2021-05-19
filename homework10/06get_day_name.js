function get_day_name(str){
    str = str.split("/")
    str = str.split(",")
    let day = str[1]
    let month = str[0]
    let year = str[2]
    str = year + "," + month + "," + day
    let date = new Date(str)
    let days_names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"]
    return days_names[date.getDay()]
}
console.log(get_day_name("12/07/2016"))