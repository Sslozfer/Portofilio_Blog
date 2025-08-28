// ========================================
// CONFIGURACION DE PARTÍCULAS
// ========================================
const lightParticles = {
  particles: {
    number: { value: 60 },
    color: { value: '#000000' },
    shape: { type: 'circle' },
    opacity: { value: 0.3, random: true },
    size: { value: 8, random: true },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      out_mode: 'bounce'
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#000000',
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' }
    }
  }
};

const darkParticles = JSON.parse(JSON.stringify(lightParticles));
darkParticles.particles.color.value = '#ffffff';
darkParticles.particles.line_linked.color = '#ffffff';

// Hacer la función global para que pueda ser llamada desde otros módulos
window.setParticlesMode = function(isDark) {
  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }
  particlesJS('particles-js', isDark ? darkParticles : lightParticles);
};

// Inicializa partículas en modo claro por defecto
particlesJS('particles-js', lightParticles);