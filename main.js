function adduser(){
    username1=document.getElementById("username1").value;
    username2=document.getElementById("username2").value;

    localStorage.setItem("username1",username1);
    localStorage.setItem("username2",username2);

    window.location="gamepage.html";
}