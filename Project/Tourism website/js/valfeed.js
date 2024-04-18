     
        function validatefeed(){
            var uname=document.forms['feedback']['feedname'].value;
            var uemail=document.forms['feedback']['feedemail'].value;
            var uphone=document.forms['feedback']['feedphone'].value;
            var umess=document.forms['feedback']['feedmessage'].value;
            
            if(uname==""){
            document.getElementById("fn").innerHTML="Please Enter Your Name";
            return false;
            }
            if(!isNaN(uname)){
            document.getElementById("fn").innerHTML="Please Enter a character only";
            return false;
            }
            if(uemail==""){
            document.getElementById("fe").innerHTML="Please Enter Your Email";
            return false;
            }
            var emailformat= /^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/;
            if(emailformat.test(uemail)){
            document.getElementById("fe").innerHTML="";
         }
         else{
         document.getElementById("fe").innerHTML="Please Enter Correct Email Format";}
         
         if(uphone==""){
         document.getElementById("fp").innerHTML="Please Enter Your Mobile Number";
         return false;
         }
         if(isNaN(uphone)){
         document.getElementById("fp").innerHTML="Please Enter numbers only";
         return false;
         }
         if(uphone.length<10){
            document.getElementById("fp").innerHTML="Please Enter 10 Digit Phone Number";
            return false;
         }
         if(umess==""){
            document.getElementById("fm").innerHTML="Please Enter a message.";
            return false;
         }
        }