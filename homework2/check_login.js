user = prompt("Who's there?")
if(user === "Admin"){
   password = prompt("write your password")
   if(password ==="TheMaster") {
       alert("Welcome")
   } 
   else if (password === "" ){
       alert("Cancel")
   }
   else{
       alert("Wrong password")
   }
}
else if(user === ""){
    alert( 'Canceled' );
}
else {
  alert( "I don't know you" );
}