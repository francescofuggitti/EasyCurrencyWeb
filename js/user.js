//function for the login
function login() {
  var x = document.forms[0];
  var username = "";
  var password = "";
  for (var i = 0; i < x.length-1; i++) {
      username = x.elements[0].value;
      password = x.elements[1].value;
  }
  if (isInLocal(username)) {
    _user = JSON.parse(localStorage.getItem(username));
    
    if ( password == _user.password) {
      sessionStorage.setItem(username, _user);
      document.getElementById("logged").innerHTML = "<h2>Benvenuto, "+username+"!</h2>";
      $('#content').submit(function(){
          $(this).hide();
      });
    }
    else{
      alert("password errata.");
    }
  }
  else{
    alert("username errato.");
  }
}

//function che nasconde il box di login e fa vedere quello di registrazione
function show_reg(){
  $("#box_log").hide();
  $("#box_reg").fadeIn();
}
//function che nasconde il box di registrazione e fa vedere quello di login
function hide_reg(){
  $("#box_reg").hide();
  $("#box_log").fadeIn();
}

//function per la registrazione degli utenti
function registration(){
  // valori inseriti dall'utente nel form
  var x = document.forms["form_reg"];
  var username = "";
  var password = "";
  for (var i = 0; i < x.length-1; i++) {
      username = x.elements[0].value;
      password = x.elements[1].value;
  }
  // verifico che il localStorage sia supportato dal browser
  if (localStorage) {
    // verifico che username non sia stato già scelto
    if (isInLocal(username)) {
      alert("Username già in uso. Riprova..");
      $("#uname").val('');
      $("#passw").val('');
    }
    else {
      // creo nuovo oggetto user e lo metto nel localStorage
      user = new user(username, password);
      localStorage.setItem(user.username, JSON.stringify(user));

      alert(username+", la registrazione è avvenuta con successo!");
      hide_reg();
    }

  }
  else{
    alert("registrazione fallita!");
  }
}

//function to check whether the user is registered on the platform.
function isInLocal(username){
  if(typeof(Storage)!=="undefined"){
    if (localStorage.getItem(username)) {
      return true;
    }
    else {
      return false;
    }
  }
  else{
    alert("Mi dispiace, ma il tuo browser non supporta il local storage..")
  }
}

//definizione oggetto user
function user(username, password){
  this.username = username;
  this.password = password;
  this.balance = "100";
}

//inserire la funzione isInLocal come metodo dell'oggetto user

//*******function to validate the form of currency converter*******************
/*
function validateForm(){

    var z = document.table.["table"]["val1"].value;
    if(!(/)\D/.test(z))){
        alert("Inserire solo numeri.")
    }
}
*/
