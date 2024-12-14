let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function login(){
    
    let userName = document.getElementById("Name").value;

    let mobile = document.getElementById("Number").value;

   let count = 0;
   let flag = 0;

   if(mobile.length == 0){
    
    alert("Enter Mobile Number !")

    }

    else if(mobile.length !== 10){

    alert("Mobile number should be of 10 digits")

    }



    else{
    
    for(let i = 0 ; i < getUsersdata.length ; i++){

        if(userName == getUsersdata[i].userName){

            if(mobile == getUsersdata[i].userNumber){

               flag = 1;

            }

            else{

                alert("Invalid Number !");
                break;

            }

        }

        else{

            count++;

        }

    }

}

if(flag == 1){

    alert("Login Successfull !")
    window.location.href = "FlipkartClone.html"

}

if(count == getUsersdata.length){

    alert("User is Not registered , Sign up to Continue")
    window.location.href = "Signup.html"

}

}