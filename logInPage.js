//----------------------------------Function------------------------
function loginButtonClicked(){
    var accountId = document.getElementById("idInput").value;
    var accountPass = document.getElementById("passInput").value; 
    console.log(accountId);
    console.log(accountPass);
    if(accountId ==''||accountPass==''){
        alert("Please type ID or Password")
    }
    if(accountId=="jay" && accountPass=='123'){
        window.location.replace("firstPage.html");
        alert("Going into the Program");
    }else{
        alert("Wrong Password or ID")
    }
    document.getElementById("idInput").value = '';
    document.getElementById("passInput").value = '';
}

//-----------------------------Interaction---------------------------
document.getElementById("logInButton").addEventListener("click",function(){
    loginButtonClicked();
    
});

document.body.addEventListener("keyup",function(ev){
    if(ev.keyCode ==13){
        loginButtonClicked();
    }
});