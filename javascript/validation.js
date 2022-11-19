var email=document.getElementById("exampleInputEmail1");
var pwd=document.getElementById("exampleInputPassword1");


function validation() 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(exampleInputPassword1.value.match(decimal)&&exampleInputEmail1.value.match(regexp)) 
{ 

    exampleInputPassword1.style.border="5px solid green";
    exampleInputEmail1.style.border="5px solid green";
    error.innerHTML="LOGIN SUCCESS";
    alert("LOGIN SUCCESS")

return true;
}

else if(exampleInputPassword1.value.length<4||exampleInputEmail1.value.length<7)
{ 

    exampleInputPassword1.style.border="5px solid red";
exampleInputEmail1.style.border="5px solid red";


return false;

}
else(exampleInputPassword1.value.length>4)
{ 

    /*exampleInputPassword1.style.border="5px solid orange";*/


return false;

}

} 