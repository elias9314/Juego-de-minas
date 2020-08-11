function  login(){ 
     var user = document.getElementById("username").value   
     localStorage.setItem("SecretUser",user)
    window.location.replace("http://localhost/JUEGO-DE-MINAS/Views/game.html")  
}
