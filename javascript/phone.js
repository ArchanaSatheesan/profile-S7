let paswd=document.getElementById("inputPassword4");
let email=document.getElementById("inputEmail4");
let phone=document.getElementById("contactnumber");
function validation() 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var phonenum= /^\d{10}$/;

if(inputPassword4.value.match(decimal)&&inputEmail4.value.match(regexp)||phoneno.test(contactnumber.value)||phonenum.test(contactnumber.value)) 
{ 

  inputPassword4.style.border="5px solid green";
inputEmail4.style.border="5px solid green";
contactnumber.style.border="3px solid green";
error1.innerHTML="validation success";
alert("validation success")

return true;
}

else if(inputPassword4.value.length<4||email.value.length<5)
{ 

  inputPassword4.style.border="5px solid red";
inputEmail4.style.border="5px solid red";

contactnumber.style.border="5px solid red";
error1.innerHTML="Enter proper format";
alert("Enter proper format")
return false;

}
else (inputPassword4.value.length>4||inputEmail4.value.length>6)
{ 
  inputEmail4.style.border="1px solid red";
  inputPassword4.style.border="5px solid orange";
error1.innerHTML="medium strong password";
contactnumber.style.border="1px solid red";
alert("password is medium strength")
return false;

}




} 