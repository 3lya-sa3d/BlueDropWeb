document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("responseMsg").textContent = `Thanks, ${name}! We'll get back to you soon.`;
    this.reset();
  } else {
    document.getElementById("responseMsg").textContent = "Please fill in all fields!";
  }
});
// Scroll animation using Intersection Observer
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

