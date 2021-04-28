function truncate(str, length){
    str = prompt("Enter text")
    length = prompt("Enter max length")
    if(str.length > length){
        alert(str.slice(0, length - 1) + "…")
    }
    else{
        alert(str)
    }
}
truncate()