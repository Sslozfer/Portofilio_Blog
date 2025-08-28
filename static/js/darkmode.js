// ========================================
// MODO OSCURO/CLARO
// ========================================
let oscuro = localStorage.getItem('modoOscuro') === 'true';

// Asegurarse de que el modo oscuro se aplique al cargar la página
if (oscuro) {
  document.body.classList.add('oscuro');
  if (typeof setParticlesMode === "function") {
    setParticlesMode(true);
  }
}

const toggleBtn = document.getElementById('toggleModo');
const iconModo = document.getElementById('iconModo');

function actualizarIconoModo() {
  if (iconModo) {
    iconModo.classList.toggle('fa-moon', !oscuro);
    iconModo.classList.toggle('fa-sun', oscuro);
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    oscuro = !oscuro;
    localStorage.setItem('modoOscuro', oscuro);
    
    if (typeof setParticlesMode === "function") {
      setParticlesMode(oscuro);
    }
    
    actualizarIconoModo();

    if (iconModo) {
      iconModo.classList.add('girando');
      iconModo.addEventListener('animationend', () => {
        iconModo.classList.remove('girando');
      }, { once: true });
    }
  });
}

// Inicializar icono
actualizarIconoModo();

// Exportar para que otros modulos puedan acceder
window.actualizarIconoModo = actualizarIconoModo;