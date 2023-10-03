//Ride_Ticket Page Start
function fun()
            {
                var ride1=document.getElementById("ride_1").value;
                var ride2=document.getElementById("ride_2").value;
                var ride3=document.getElementById("ride_3").value;
                var ride4=document.getElementById("ride_4").value;
                var ride5=document.getElementById("ride_5").value;
                var ride6=document.getElementById("ride_6").value;
                var ride7=document.getElementById("ride_7").value;
                var ride8=document.getElementById("ride_8").value;
                var ride9=document.getElementById("ride_9").value;
                var ride10=document.getElementById("ride_10").value;
                var ride11=document.getElementById("ride_11").value;
                var ride12=document.getElementById("ride_12").value;
                var ride_one=parseInt(ride1)*320;
                var ride_two=parseInt(ride2)*800;
                var ride_three=parseInt(ride3)*320;
                var ride_four=parseInt(ride4)*480;
                var ride_five=parseInt(ride5)*1000;
                var ride_six=parseInt(ride6)*600;
                var ride_seven=parseInt(ride7)*480;
                var ride_eight=parseInt(ride8)*600;
                var ride_nine=parseInt(ride9)*480;
                var ride_ten=parseInt(ride10)*600;
                var ride_eleven=parseInt(ride11)*320;
                var ride_twelve=parseInt(ride12)*320;
                var result= parseInt(ride_one)+parseInt(ride_two)+parseInt(ride_three)+parseInt(ride_four)+parseInt(ride_five)+parseInt(ride_six)+parseInt(ride_seven)+parseInt(ride_eight)+parseInt(ride_nine)+parseInt(ride_ten)+parseInt(ride_eleven)+parseInt(ride_twelve);
                document.getElementById("price").innerHTML="Price "+result;


                var name=document.getElementById("ticket_text").value;
                var email=document.getElementById("ticket_email").value;
                var emailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if(name=="")
                {
                    document.getElementById("ticket_text1").style.display="block";
                    return false;
                }
                else
                {
                    document.getElementById("ticket_text1").style.display="none";
                }
                if(email=="")
                {
                    document.getElementById("ticket_email1").style.display="block";
                    return false;
                }
                else
                {
                    document.getElementById("ticket_email1").style.display="none";
                }
                if(!email.match(emailformat))
                {
                    document.getElementById("ticket_email2").style.display="block";
                }
                else
                {
                    document.getElementById("ticket_email2").style.display="none";
                    return false;
                    
                    
                }
                
            }
//End Ride_Ticket Page


//Start Entry_Ticket Page
function create()
{
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var pass1= document.getElementById("pass1").value;
    var pass2= document.getElementById("pass2").value;
    var emailpattern ="[a-zA-Z0-9_.!$-]{3,15}[@]{1}[a-zA-Z]{5}[.]{1}[a-z]{3}";
    
    if(name=="")
    {
        alert("Please Enter Your First Name");
    }
    else if(email=="")
    {
        alert("Please Enter Email");
    }
    else if(pass1=="")
    {
        alert("Please Enter Password");
    }
    else if(pass2=="")
    {
        alert("Please Enter Confirm Password");
    }
    else
    {
        if(!email.match(emailpattern))
        {
            alert("You Entered Invalid Email")
        }
        else
        {
            if(pass1==pass2)
            {
                alert("Your Account Has Been Created");
            }
            else
            {
                alert("Please Entered two Different Passwords");
            }
        }
    }
}
//Start Entry_Ticket Page
function ticket1()
        {
            var name= prompt("Enter Your Name");
            var email= prompt("Enter Your Email");
            var phone= prompt("Enter Phone Number");
            var date= prompt("Enter  Date");
            if(name=="")
            {
                alert("Please Enter Name");
            }
            else if(email=="")
            {
                alert("Please Enter Email");
            }
            else if(phone=="")
            {
                alert("Please Enter Phone No");
            }
            else if(date=="")
            {
                alert("Please Enter Date");
            }
            else
            {
                alert("You Booked Your Tickets Successfully");
            }
        }
//End Entry_Ticket Page

//Start Contact-Us Page
function receive()
{
    var first_name= document.getElementById("first_name").value;
    var last_name= document.getElementById("last_name").value;
    var email= document.getElementById("contact_email").value;
    var subject= document.getElementById("subject").value;
    var message= document.getElementById("message").value;

    if(first_name=="")
    {
        alert("Please Enter Your First Name");
    }
    else if(last_name=="")
    {
        alert("Please Enter Your Last Name");
    }
    else if(email=="")
    {
        alert("Please Enter Email");
    }
    else if(subject=="")
    {
        alert("Please Enter Subject");
    }
    else if(message=="")
    {
        alert("Please Enter Your Message");
    }
    else
    {
        alert("Your Message is Sumitted");
    }

}