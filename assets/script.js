document.addEventListener("DOMContentLoaded", function() {
  const participants = (document.getElementById("participants"));
  const total = (document.getElementById("total"));
  const tip = (document.getElementById("tip"));

  let submitButton = document.getElementById('buttonSubmit');

  // Hämta alla input-fält som är required
  const requiredInputs = document.querySelectorAll('input[required]');
  const form = document.getElementById('myForm');

  // Lägg till keyup-lyssnare för alla required-fält
  requiredInputs.forEach(function(input) {
    input.addEventListener('keyup', function() {
      validateForm();
    });
  });

  function validateForm() {
    requiredInputs.forEach(function(input) {

      // Kontrollera om hela formuläret är giltigt
      if (form.checkValidity()) {
        submitButton.disabled = false;
        // submitButton.removeAttribute('disabled');
        console.log('Formuläret är giltigt!');
      } else {
        submitButton.disabled = true;
        // submitButton.setAttribute('disabled', true);
        console.log('Formuläret är ogiltigt!');
      }
    });
  };

  submitButton.addEventListener('click', calculate);
  
  function calculate(e) {
    e.preventDefault();
    let val = parseInt(participants);
    console.log(typeof val, val);
  }

});