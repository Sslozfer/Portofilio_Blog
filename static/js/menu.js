// ========================================
// MENÚ HAMBURGUESA + USUARIO
// ========================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("userMenuBtn");
  const dropdown = document.getElementById("userDropdown");
  if (btn && dropdown) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", () => dropdown.style.display = "none");
  }
});