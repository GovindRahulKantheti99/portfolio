function showPath(pathId) {
  const sections = document.querySelectorAll(".path-content");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  document.getElementById(pathId).classList.add("active");
}

const animatedItems = document.querySelectorAll(
  ".card, .project, .timeline-item, .path-card"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach(item => {
  item.classList.add("hidden");
  observer.observe(item);
});
