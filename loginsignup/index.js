document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.querySelector('.login-button');
  const signupButton = document.querySelector('.signup-button');
  const loginpage = document.getElementById('loginpage');
  const signupDetails = document.getElementById('signupDetails');

  loginButton.addEventListener('click', function() {
    loginpage.style.display = 'block';
    signupDetails.style.display = 'none';
    document.body.style.background = "lightblue";
  });

  
  signupButton.addEventListener('click', function() {
    signupDetails.style.display = 'block';
    loginpage.style.display = 'none';
    document.body.style.background = "lightcoral";
  });
});