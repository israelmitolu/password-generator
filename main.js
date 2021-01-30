function getPassword() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+()/*':;!?.,~`|•∆%><";
  var passwordLength = 10;
  var password = "";
  
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length); 
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password
}
