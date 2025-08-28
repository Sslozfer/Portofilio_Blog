// ========================================
// MAIN JS (ES Modules)
// ========================================
import './particles.js';
import './darkmode.js';
import './i18n.js';
import './ai.js';
import './blog.js';
import './auth.js';
import './menu.js';

// Funcion para inicializar todo
function initializeApp() {
  console.log("✅ Portfolio Blog iniciado");

  // Verificar y establecer modo oscuro
  const isDarkMode = localStorage.getItem('modoOscuro') === 'true';
  if (isDarkMode) {
    document.body.classList.add('oscuro');
    if (typeof setParticlesMode === "function") {
      setParticlesMode(true);
    }
  }

  // Actualizar icono de modo oscuro
  if (typeof actualizarIconoModo === "function") {
    actualizarIconoModo();
  }

  // Traduccion inicial
  if (typeof translatePage === "function") {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    translatePage(idiomaGuardado);
  }

  // Verificacion AI
  if (document.getElementById("ai-chat")) {
    console.log("🤖 Asistente virtual disponible");
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// También ejecutar cuando se navega (para aplicaciones de una sola página)
if (typeof window !== 'undefined' && typeof window.history !== 'undefined') {
  const originalPushState = window.history.pushState;
  window.history.pushState = function() {
    originalPushState.apply(this, arguments);
    setTimeout(initializeApp, 100);
  };

  window.addEventListener('popstate', function() {
    setTimeout(initializeApp, 100);
  });
}