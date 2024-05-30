const scriptURL = 'https://script.google.com/macros/s/AKfycbxfwlNpL5uoIwv1wHlEbIpUmh79BP_Ef-g0Q8HayvfCHO6uqqG3Etd-FdU6qRdte-iUyw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})