//function for the login
function login() {
  var x = document.forms[0];
  var username = "";
  var password = "";
  for (var i = 0; i < x.length-1; i++) {
      username = x.elements[0].value;
      password = x.elements[1].value;
  }
  if (username == "francesco" || username == "christian"){
    if (password == "ciao"){
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

//function to validate the form of currency converter
function validateForm(){

    var z = document.table.["table"]["val1"].value;
    if(!(/)\D/.test(z))){
        alert("Inserire solo numeri.")
    }
}
