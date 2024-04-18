     
        function validatebook(){
            var bname=document.forms['book']['bookname'].value;
            var bemail=document.forms['book']['bookemail'].value;
            var bphone=document.forms['book']['bookphone'].value;
            var baddr=document.forms['book']['bookaddress'].value;
            var bwhere=document.forms['book']['bookwhere'].value;
            var bmember=document.forms['book']['bookmembers'].value;
            var barival=document.forms['book']['bookarival'].value;
            var bleave=document.forms['book']['bookleave'].value;
            
            if(bname==""){
            document.getElementById("bn").innerHTML="Please Enter Your Name";
            return false;
            }
            if(!isNaN(bname)){
            document.getElementById("bn").innerHTML="Please Enter a character only";
            return false;
            }
            if(bemail==""){
            document.getElementById("be").innerHTML="Please Enter Your Email";
            return false;
            }
            var emailformat= /^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/;
            if(emailformat.test(bemail)){
            document.getElementById("be").innerHTML="";
         }
         else{
         document.getElementById("be").innerHTML="Please Enter Correct Email Format";}
         
         if(bphone==""){
         document.getElementById("bp").innerHTML="Please Enter Your Mobile Number";
         return false;
         }
         if(isNaN(bphone)){
         document.getElementById("bp").innerHTML="Please Enter numbers only";
         return false;
         }
         if(bphone.length<10){
            document.getElementById("bp").innerHTML="Please Enter 10 Digit Phone Number";
            return false;
         }
        if(baddr==""){
            document.getElementById("badd").innerHTML="Please Enter Your Address";
            return false;
                        }
        if(bwhere==""){
            document.getElementById("bd").innerHTML="Please Enter Your Destination";
            return false;
                        }
        if(bmember==""){
            document.getElementById("bg").innerHTML="Please Enter Number Of Members";
            return false;
                     }
        if(barival==""){
            document.getElementById("ba").innerHTML="Please Enter Arival Date";
            return false;
                        }
        if(bleave==""){
            document.getElementById("bl").innerHTML="Please Enter Leaving Date";
            return false;
                        }
         }