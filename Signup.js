let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function Signup(){

   let username = document.getElementById("Naam").value;
   let mobile = document.getElementById("Number").value;

   if(mobile.length==0){

    alert("Enter Your Phone Number !");

   }

   else if(mobile.length !== 10){

    alert("Phone Number should have 10 digits");

   }

    else{

      let userData = {

        userName : username,
        userNumber : mobile

      }
    
      let users = [...getUsersdata , userData];
      localStorage.setItem("usersdata" , JSON.stringify(users));
 

      alert("Signup Successfull !");
      window.location.href = "Login.html"

   }

}




