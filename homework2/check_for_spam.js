function check_for_spam(str){
    str = prompt("Enter your text").toLowerCase()
    if (str.includes("viagra") || str.includes("xxx")){
        alert(true)
    }
    else {
        alert(false)
    }
}
check_for_spam()