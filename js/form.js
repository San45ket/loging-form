const username="hardik@gmail.com";
const password="Hardik33";

document.getElementById('loginform').addEventListener('submit',function(event){
     event.preventDefault();

    const enterusername = document.getElementById('username').value;
    const enterpassword = document.getElementById('password').value;

    if(enterusername ===username && enterpassword === password){
        alert("login successfull");

        window.location.href = "bg.html";
    } else {
        alert("wrong credentials!");
    }
});