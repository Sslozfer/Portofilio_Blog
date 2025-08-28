// ========================================
// FUNCIONES DEL BLOG
// ========================================

// Corte automático de palabras largas
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".post-contenido").forEach((el) => {
    const words = el.innerHTML.split(/(\s+)/); 
    const updated = words.map((word) => { 
      const clean = word.replace(/<[^>]*>/g, "");
      if (clean.length > 15 && !clean.includes(" ")) {
        return `<span style="word-break: break-all; hyphens: auto; display: inline-block; lang="es"">${word}</span>`;
      }
      return word;
    });
    el.innerHTML = updated.join('');
  });
});

// Seleccion de año en el blog
document.addEventListener('DOMContentLoaded', () => {
  const yearLinks = document.querySelectorAll('#year-sidebar li');
  const postSections = document.querySelectorAll('.post-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const year = entry.target.id.replace('year-', '');
        yearLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.year === year);
        });
      }
    });
  }, { threshold: 0.4 });

  postSections.forEach(section => observer.observe(section));
});

// Boton responder a comentarios
document.addEventListener("DOMContentLoaded", function() {
  const botones = document.querySelectorAll(".btn-responder");
  const textarea = document.getElementById("id_texto") || document.querySelector("textarea[name='texto']");

  botones.forEach(boton => {
    boton.addEventListener("click", function() {
      const usuario = this.getAttribute("data-usuario");
      if (textarea) {
        const mention = `@${usuario} `;
        if (!textarea.value.includes(mention)) {
          textarea.value = mention + textarea.value;
        }
        textarea.focus();
        textarea.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
});