
let current = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
  testimonials[current].classList.remove('active');
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add('active');
}, 4000);

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch('https://script.google.com/macros/library/d/1-QbCrypE7BYXUNgg3CUL8hw7izs9NP1fYPs0FOdUutj7F_zMq6W0llfQ/1cR_SCRIPT_ID/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => alert('ההודעה נשלחה בהצלחה!'))
  .catch(error => alert('אירעה שגיאה בשליחה'));
  this.reset();
});
