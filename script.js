
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
  fetch('https://script.google.com/macros/s/AKfycbwh7SpTr7Pd0T669cC9BNhbMFLTIJp67kNjVlpp_4fjKifUCVU9no3b8WOVMbKDQsj9/exec", {
    method: 'POST',
    body: formData
  })
  .then(response => alert('ההודעה נשלחה בהצלחה!'))
  .catch(error => alert('אירעה שגיאה בשליחה'));
  this.reset();
});
