function validatelog(){
    var uemail= document.forms['login']['loginemail'].value;
    var upass= document.forms['login']['loginpassword'].value;    
   
    if(uemail==""){
    document.getElementById("le").innerHTML="Please Enter Your Email";
    return false;
    }
    var emailformat= /^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/;
    if(emailformat.test(uemail)){
    document.getElementById("le").innerHTML="";
 }
 else{
 document.getElementById("le").innerHTML="Please Enter Correct Email Format";}
 
 if(upass==""){
 document.getElementById("lp").innerHTML="Please Enter Your Password";
 return false;
 }
 if((upass.length < 2) || (upass.length > 9)){
 document.getElementById("lp").innerHTML="Please Enter Your Password between 2 to 9 ";
 return false;
 }
 }