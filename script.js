

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Fade-in on scroll
  const faders = document.querySelectorAll(".fade-in");
  const options = {
    threshold: 0.1
  };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});