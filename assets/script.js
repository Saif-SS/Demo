document.addEventListener("DOMContentLoaded", function() {
  let submitButton = document.getElementById('buttonSubmit');
  let resultDiv = document.getElementById('result');

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
    requiredInputs.forEach(function() {
      
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

    let participants = Number(document.getElementById("participants").value);
    let total = Number(document.getElementById("total").value);
    let tip = Number(document.getElementById("tip").value);

    let sum = (total + tip) / participants;
    let roundedSum = Math.ceil(sum);

    let extra = participants * (roundedSum - sum);

    resultDiv.classList.remove('hide');
    form.classList.add('hide');

    let contentPerPerson = 'Price per person: ' + roundedSum;
    let contentExtra = 'Extra to charity: ' + extra.toFixed(2);

    document.getElementById('perPerson').innerHTML = contentPerPerson;
    document.getElementById('extra').innerHTML = contentExtra;
  }
  
});