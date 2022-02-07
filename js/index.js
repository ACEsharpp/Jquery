var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password"),
  name = document.getElementById("name");
  $(document).ready(function () {
    $(':button[type="submit"]').prop("disabled", true);
  });
function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  }
  else if(name.length == ""){
    name.setCustomValidity("Enter the name");
  }
  else {
    confirm_password.setCustomValidity('');
      $(':button[type="submit"]').prop("disabled", false);
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
