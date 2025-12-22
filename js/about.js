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


