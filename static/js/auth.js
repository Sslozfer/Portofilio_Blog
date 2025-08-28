// ========================================
// Login / Registro 
// ========================================
const authForms = document.querySelectorAll(".auth-card form");
authForms.forEach(form => {
  form.addEventListener("submit", e => {
    const inputs = form.querySelectorAll("input[required]");
    let valido = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        valido = false;
        input.style.border = "1px solid red";
      }
    });
    if (!valido) e.preventDefault();
  });
});