function toggleMenu(e) {
  const getUl = document.getElementById("ulMobile");
  getUl.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const animatedElement = document.querySelectorAll(".expand-fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("focus-in-expand");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  for (const item of animatedElement) {
    observer.observe(item);
  }
});
