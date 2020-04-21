var form = document.querySelectorAll('form')[0];
var emailInput = document.getElementById('emailInput');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(emailInput.value);
  var containsAt = emailInput.value.indexOf('@');
  if (containsAt != -1) {
    // email contains '@'
    alert('Sent email');
    emailInput.value = '';
    form.classList.remove('errors');
  } else {
    // No email '@'
    form.classList.add('errors');
  }
});
