var toggle = document.getElementById('pricingToggle');
var pricingSection = document.querySelectorAll('.pricing')[0];
toggle.addEventListener('click', function (e) {
  pricingSection.classList.toggle('pricing--annually');
});
