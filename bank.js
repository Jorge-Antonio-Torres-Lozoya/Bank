


function loadUserData() {
    let user = getSession();
    document.getElementById("cash-user").innerHTML = user.cash;
    document.getElementById("userName").innerHTML = user.name;
    document.getElementById("nameCard").value = user.name;
    document.getElementById("cardNumber").value = user.cardNumber;
    document.getElementById("userCvv").value = user.cvv;
    document.getElementById("btnDeposit").addEventListener("click", deposit)
    document.getElementById("btnWithdraw").addEventListener("click", withdraw)
    document.getElementById("btnCheckBalance").addEventListener("click", CheckBalance)
    document.getElementById("btnCloseSession").addEventListener("click",closeSession)
}
loadUserData();

// con esta funcion actualizamos el dinero
function updateUserCash(cash) {
    let user = getSession();
    user.cash = cash;
    updateUser(user);
    return getSession();
}

function deposit() {

    let money = document.getElementById("inputMoney").value;
    let user = getSession();
    let moneyBefore = user.cash;
    let addition = user.cash + parseFloat(money);

    if (addition > 990) {
        alert("Una cuenta no puedo sobrepasar los 990 pesos");
    }
    else if (money == "") {
        alert("Debe ingresar una cantidad")

    }
    // Actualiza el dinero del usuario
    else {
        user = updateUserCash(addition);
        document.getElementById("cash-user").innerHTML = user.cash;
        document.getElementById("text").innerHTML = "Monto ingresado: " + money + " pesos" + "<br> Saldo anterior: " + moneyBefore + " pesos" + "<br>Nuevo saldo total: " + user.cash + " pesos";
    }
 

}

function withdraw() {
    let money = document.getElementById("inputMoney").value;
    let user = getSession();
    let moneyBefore = user.cash;
    let substraction = user.cash - parseFloat(money);


    if (substraction < 10) {
        alert("Una cuenta no puede tener menos de 10 pesos");
    }
    else if (money == "") {
        alert("Debe ingresar una cantidad")


    }
    // Actualiza el dinero del usuario
    else {
        user = updateUserCash(substraction);
        document.getElementById("cash-user").innerHTML = user.cash;
        document.getElementById("text").innerHTML = "Monto retirado: " + money + " pesos" + "<br> Saldo anterior: " + moneyBefore + " pesos" + "<br>Nuevo saldo total: " + user.cash + " pesos";
    }
}
function CheckBalance() {
    let user = getSession();
    document.getElementById("text").innerHTML = "Tu saldo actual es de: " + user.cash;


}
//limpia una session en el localstorage
// document.getElementById("cerrar").addEventListener("click",closeSession)
function closeSession() {
    let user = getSession();
    localStorage.removeItem("user");
    window.location.href="login.html"
    
  }
