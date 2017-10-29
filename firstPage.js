var accDetailCheck = 0;

document.getElementById("accPicture").addEventListener("click",function(){
    if(accDetailCheck ==0){
        document.getElementById("accDetail").style.width = "300px";
        document.getElementById("accDetail").style.height = "200px";
        accDetailCheck=1;
    }else if(accDetailCheck ==1){
        document.getElementById("accDetail").style.width = "0px";
        document.getElementById("accDetail").style.height = "0px";
        accDetailCheck=0;
    }
});

document.getElementById("logOutBut").addEventListener("click",function(){
    window.location.replace("logInPage.html");
    alert("Going Back to LoginPage");
})