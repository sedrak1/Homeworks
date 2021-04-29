function sign_of_product(num1, num2, num3){
    if(num1 * num2 * num3 === 0){
        console.log("unsigned")
    }
    else if (num1 < 0 && num2 > 0 && num3 > 0){
        console.log("-")
    }
    else if (num1 > 0 && num2 < 0 && num3 > 0){
        console.log("-")
    }
    else if (num1 > 0 && num2 > 0 && num3 < 0){
        console.log("-")
    }
    else if (num1 < 0 && num2 < 0 && num3 < 0){
        console.log("-")
    }
    else {
        console.log("+")
    }
}

