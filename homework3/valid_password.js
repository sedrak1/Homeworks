function valid_password(str){
    if (str.match(/[a-z]/ && /[A-Z]/ && /[0-9]/) && str.includes("@","#","$") && str.length > 6 && str.length < 16){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
