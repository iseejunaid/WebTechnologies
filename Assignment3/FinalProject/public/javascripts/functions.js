function inputCheckHandler(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var cpass = document.getElementById("confirm_password");

    if(username.value){
        username.classList.remove("notfilled");
        username.classList.add("filled");
    }else{
        username.classList.remove("filled");
        username.classList.add("notfilled");
    }
    if(email.value){
        email.classList.remove("notfilled");
        email.classList.add("filled");
    }else{
        email.classList.remove("filled");
        email.classList.add("notfilled");
    }
    if(pass.value){
        pass.classList.remove("notfilled");
        pass.classList.add("filled");
    }else{
        pass.classList.remove("filled");
        pass.classList.add("notfilled");
    }
    if(cpass.value){
        cpass.classList.remove("notfilled");
        cpass.classList.add("filled");
    }else{
        cpass.classList.remove("filled");
        cpass.classList.add("notfilled");
    }
    if(username.value && email.value && pass.value && cpass.value){
        if(pass.value == cpass.value){
            pass.classList.remove("notfilled");
            pass.classList.add("filled");
            cpass.classList.remove("notfilled");
            cpass.classList.add("filled");
            matchedShowMessage();
            window.location.href = "index.html"
        }
        if(pass.value != cpass.value){
            pass.classList.remove("filled");
            pass.classList.add("notfilled");
            cpass.classList.remove("filled");
            cpass.classList.add("notfilled");
            misMatchedShowMessage();
        }
    }
}
function matchedShowMessage() {
    alert("Signed UP!");

}
function misMatchedShowMessage() {
    alert("Passwords do not match!");
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})