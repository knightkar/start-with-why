// Simple intersection observer to animate elements on scroll
document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll(".fade-in-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animated.forEach((el) => observer.observe(el));
});
