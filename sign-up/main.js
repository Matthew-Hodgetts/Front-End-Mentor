var form = document.getElementById("signUp");
var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var errors = false;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  fName.value = "";
  lName.value = "";
  email.value = "";
  password.value = "";
  alert("Submitted");
});
