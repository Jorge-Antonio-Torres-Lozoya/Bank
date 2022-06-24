document.getElementById("submit").addEventListener("click",validateLogin)

function validateLogin(){
    // Sacamos los valores de los inputs
    let userName=document.getElementById("inputUser").value;
    let password=document.getElementById("inputPassword").value;

// validar si lo que escribieron es valido
    let user=validUser(userName,password);
    if (user){
        createSession(user);  
        
        // creamos la sesion para la cuenta de banco
        window.location.href="bank.html"
      
    }
    else{
        alert("Usuario inexistente")
    }


}