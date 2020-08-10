function  login(){
    
    var user = document.getElementById("username").value 
    
    localStorage.setItem("SecretUser",user)

    window.location.replace("http://localhost/MinesWeeper/Views/game.html")   


}
