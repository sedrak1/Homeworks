alert( null || 2 || undefined ); // --> first truthy value is 2 => output = 2 

alert( alert(1) || 2 || alert(3) ); // --> alert returns undefined, undefined isn't truthy value => output = 2, after showing alert message "1"

alert( 1 && null && 2 ); // --> first falsy value is null => output = null

alert( alert(1) && alert(2) ); // --> alert returns undefined => output = undefined, after showing alert message "1"

alert( null || 2 && 3 || 4 ); // && has high precedence than || => 2 && 3 returns 3, null || 3 || 4 returns 3 => output = 3


let age = prompt("What is your age?")
if(age >= 14 && age <= 90){
    console.log("Your age is between of range 14 and 90")
}

if(age < 14 && age > 90){
    console.log("Your age is outside of range 14 and 90")
}


if (-1 || 0) alert( 'first' ); // --> -1 is first truthy value => alert will work
if (-1 && 0) alert( 'second' ); // --> 0 is falsy value => condition is falsy => alert will not work
if (null || -1 && 1) alert( 'third' ); // --> -1 && 1 return 1, null || 1 return 1, 1 is truthy => alert will work


