
function get_numbers_names(num){
    let up_to_19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let up_to_90 = ['correct index','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let Hundred = "hundred"
    let Thousand = "thousand"
    let name = ""


    for(let i = 0; i < num.length; i++){ 
        switch (num.length > i){
            case Number(num) === 0:
                console.log("zero")
                return


            case num.substring(i).length === 6:
                name += up_to_19[Number(num[i])] + " " + Hundred + " "
                break


            case num.substring(i).length === 5 && Number(num[i]) !== 1 && Number(num[i]) !== 0:
                name += up_to_90[Number(num[i])] + " " + up_to_19[Number(num[i + 1])] + " " + Thousand + " "
                i++
                break
            case num.substring(i).length === 5 && Number(num[i]) === 1:
                name += up_to_19[Number(num.substring(i, i + 2))] + " " + Thousand + " "
                i++
                break
            case num.substring(i).length === 5 && Number(num[i]) === 0:
                name += up_to_19[Number(num[i + 1])] + " " + Thousand + " "
                i++
                break




            case num.substring(i).length === 4 && Number(num[i]) !== 1:
                name +=  up_to_19[Number(num[i])] + " " + Thousand + " "
                break
            case num.substring(i).length === 4 && Number(num[i]) === 1:
                name += up_to_19[Number(num[i])] + " " + Thousand + " "
                break
            
            
           
            case num.substring(i).length === 3 && Number(num[i]) !== 0:
                name += up_to_19[Number(num[i])] + " " + Hundred + " "
                break
            case num.substring(i).length === 3 && Number(num[i]) === 0:
                break



            case num.substring(i).length === 2 && Number(num[i]) !== 1 && Number(num[i]) !== 0:
                name += up_to_90[Number(num[i])] + " " + up_to_19[Number(num[i + 1])]
                console.log(name)
                return
            case num.substring(i).length === 2 && Number(num[i]) === 1:
                name += up_to_19[Number(num.substring(i, i + 2))]
                console.log(name)
                return
            case num.substring(i).length === 2 && Number(num[i]) === 0:
                name += up_to_19[Number(num[i + 1])]
                console.log(name)
                return
            


            case num.substring(i).length > 0 && Number(num[i]) !== 1 && Number(num[i]) !== 0:
                name += up_to_90[Number(num[i])] + " " + up_to_19[Number(num[i+1])] + " "
                console.log(name)
                return
            case num.substring(i).length > 0 && Number(num[i]) === 1:
                name += up_to_19[Number(num.substring(i))] + " " 
                console.log(name)
                return
            case num.substring(i).length > 0 && Number(num[i]) === 0:
                name += up_to_19[Number(num[i + 1])] + " " 
                console.log(name)
                return
                
        }   
    }
}
get_numbers_names("100300")