console.log("about.js cargado");

// Mostrar/ocultar timeline
const btn = document.getElementById("toggleTimeline");
const timeline = document.getElementById("timeline");

if (btn && timeline) {
  btn.addEventListener("click", () => {
    const isHidden = timeline.style.display === "none";
    timeline.style.display = isHidden ? "block" : "none";
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const highlights = document.querySelectorAll(".highlight");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  highlights.forEach(h => observer.observe(h));
});
