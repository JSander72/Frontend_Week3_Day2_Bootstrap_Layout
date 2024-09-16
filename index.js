
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // ... get other fields

  // Validation
  if (name === '' || email === '') {
    alert('Please fill in all fields.');
    return;
  }

 
  // Provide feedback to the user
  alert('Thank you for your submission!');
  form.reset(); // reset form
});