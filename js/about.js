console.log("about.js cargado");

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1) Mostrar/ocultar timeline
  // =========================
  const btn = document.getElementById("toggleTimeline");
  const timeline = document.getElementById("timeline");

  if (btn && timeline) {
    btn.addEventListener("click", () => {
      const isHidden = timeline.style.display === "none";
      timeline.style.display = isHidden ? "block" : "none";
    });
  }

  // =========================
  // 2) Subrayado animado al entrar en pantalla
  // =========================
  const highlights = document.querySelectorAll(".highlight");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.6 }
  );

  highlights.forEach(h => observer.observe(h));

  // =========================
  // 3) MODAL: palabras clickeables
  // =========================
  const modal = document.getElementById("infoModal");
  const titleEl = document.getElementById("infoModalTitle");
  const textEl = document.getElementById("infoModalText");

  if (!modal || !titleEl || !textEl) return;

  const openModal = (title, text) => {
    titleEl.textContent = title || "Info";
    textEl.innerHTML = text || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (e) => {
    const term = e.target.closest(".info-term");
    if (term) {
      openModal(term.dataset.title, term.dataset.text);
      return;
    }

    if (e.target.dataset.close === "true") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});


