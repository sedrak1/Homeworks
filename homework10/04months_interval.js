function months_interval(date1, date2){
    let res_arr = []
    let date2_year = date2.getFullYear()
    let date2_month = date2.getMonth()
    let date1_year = date1.getFullYear()
    let date1_month = date1.getMonth()

    let months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November',
    'December']

    for(let i = 0; i <= date2_year - date1_year; i++){
        if(date2_year === date1_year){
            if(date1_month > date2_month){
                console.log("Invalid interval")
                return
            }
            for(let j = date1_month; j <= date2_month; j++){
                if(j <= date2_month && j >= date1_month){
                    res_arr.push(months[j])
                }
            }
            return res_arr
        }
        else if(date2_year > date1_year){
            for(let j = 0; j <= date2_year - date1_year; j++){
                if(j === 0){
                    res_arr.push(...months.slice(date1_month))
                }
                else if(j === date2_year - date1_year){
                    res_arr.push(...months.slice(0, date2_month + 1))
                    console.log("asd")
                }
                else{
                    res_arr.push(...months)
                }
            }
            return res_arr 
        }
    }
    console.log("Invalid interval")
}
let d1 = new Date('2017, 12, 1'); 
let d2 = new Date('2017, 11, 1');
console.log(months_interval(d1, d2))