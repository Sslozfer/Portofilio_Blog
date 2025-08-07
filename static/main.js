// ========================================
// CONFIGURACIoN DE PARTICULAS
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

function setParticlesMode(isDark) {
  if (window.pJSDom && pJSDom.length) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }
  particlesJS('particles-js', isDark ? darkParticles : lightParticles);
}

// Inicializa particulas
particlesJS('particles-js', lightParticles);

// ========================================
// MODO OSCURO/CLARO
// ========================================
let oscuro = localStorage.getItem('modoOscuro') === 'true';
if (oscuro) {
  document.body.classList.add('oscuro');
  setParticlesMode(true);
}
const toggleBtn = document.getElementById('toggleModo');
const iconModo = document.getElementById('iconModo');

function actualizarIconoModo() {
  iconModo.classList.toggle('fa-moon', !oscuro);
  iconModo.classList.toggle('fa-sun', oscuro);
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
  oscuro = !oscuro;
  localStorage.setItem('modoOscuro', oscuro);
  setParticlesMode(oscuro);
  actualizarIconoModo();

  iconModo.classList.add('girando');
  iconModo.addEventListener('animationend', () => {
    iconModo.classList.remove('girando');
  }, { once: true });
});

actualizarIconoModo();

// ========================================
// TRADUCCIoN MULTI-IDIOMA
// ========================================
const translations = {
      es: {
        title: "Portfolio",
        greeting: "¡Hola, soy Santiago Lozano!",
        welcome: "Bienvenido a mi portafolio",
        nav_about: "Sobre mi",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        nav_blog: "Blog",
        language_button: "🌐 Idioma",
        about_title: "Sobre mi",
        about_desc: "¡Hola! Soy un desarrollador apasionado por la tecnologia y la creacion de soluciones innovadoras. Me encanta aprender y compartir lo que se.",
        download_cv: "Descargar CV",
        skills_title: "Habilidades Tecnicas",
        python_hours: "+250 horas",
        skills_cpp_hours: "+80 horas",
        skills_csharp_hours: "+110 horas",
        skills_html_hours: "+15 horas",
        projects_title: "Proyectos",
        project_earthquake_map: "Mapa de Terremotos",
        project_earthquake_desc: "Visualizacion interactiva de datos sismicos usando mapas.",
        project_github_stats: "Estadisticas de GitHub",
        project_github_desc: "Pagina que muestra graficos sobre usuarios, repositorios y licencias.",
        project_pvz: "Plantas contra Zombies en Python",
        project_pvz_desc: "Un proyecto inspirado en el famoso juego PvZ, desarrollado desde cero en Python.",
        view_github: "Ver en GitHub",
        contact_title: "Contacto",
        contact_email_label: "Tu correo:",
        contact_message_label: "Mensaje:",
        contact_send: "Enviar",
        contact_linkedin: "LinkedIn",
        contact_github: "GitHub",
        contact_email: "Email",
        footer_text: "© 2025 Mi Portfolio",
        ai_title: "Asistente Virtual",
        ai_placeholder: "Pregúntame sobre Santiago..."
      },
      en: {
        title: "Portfolio",
        greeting: "Hi, I'm Santiago Lozano!",
        welcome: "Welcome to my portfolio",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_blog: "Blog",
        language_button: "🌐 Language",
        about_title: "About Me",
        about_desc: "Hi! I'm a developer passionate about technology and creating innovative solutions. I love to learn and share what I know.",
        download_cv: "Download CV",
        skills_title: "Technical Skills",
        python_hours: "+250 hours",
        skills_cpp_hours: "+80 hours",
        skills_csharp_hours: "+110 hours",
        skills_html_hours: "+15 hours",
        projects_title: "Projects",
        project_earthquake_map: "Earthquake Map",
        project_earthquake_desc: "Interactive visualization of seismic data using maps.",
        project_github_stats: "GitHub Statistics",
        project_github_desc: "Page displaying charts about users, repositories, and licenses.",
        project_pvz: "Plants vs Zombies in Python",
        project_pvz_desc: "A project inspired by the famous PvZ game, developed from scratch in Python.",
        view_github: "View on GitHub",
        contact_title: "Contact",
        contact_email_label: "Your email:",
        contact_message_label: "Message:",
        contact_send: "Send",
        contact_linkedin: "LinkedIn",
        contact_github: "GitHub",
        contact_email: "Email",
        footer_text: "© 2025 My Portfolio",
        ai_title: "Virtual Assistant",
        ai_placeholder: "Ask me about Santiago..."
      },
      zh: {
        title: "作品集",
        greeting: "你好，我是 Santiago Lozano!",
        welcome: "欢迎来到我的作品集",
        nav_about: "关于我",
        nav_skills: "技能",
        nav_projects: "项目",
        nav_contact: "联系",
        nav_blog: "博客",
        language_button: "🌐 语言",
        about_title: "关于我",
        about_desc: "你好！我是一个热爱技术并致力于创造创新解决方案的开发者。我喜欢学习并分享我的知识。",
        download_cv: "下载简历",
        skills_title: "技术技能",
        python_hours: "+250 小时",
        skills_cpp_hours: "+80 小时",
        skills_csharp_hours: "+110 小时",
        skills_html_hours: "+15 小时",
        projects_title: "项目",
        project_earthquake_map: "地震地图",
        project_earthquake_desc: "使用地图交互式可视化地震数据。",
        project_github_stats: "GitHub 统计",
        project_github_desc: "显示用户、仓库和许可证图表的页面。",
        project_pvz: "Python 版植物大战僵尸",
        project_pvz_desc: "一个受 PvZ 启发的项目，用 Python 从零开发。",
        view_github: "查看 GitHub",
        contact_title: "联系",
        contact_email_label: "你的邮箱:",
        contact_message_label: "留言:",
        contact_send: "发送",
        contact_linkedin: "领英",
        contact_github: "GitHub",
        contact_email: "电子邮件",
        footer_text: "© 2025 我的作品集",
        ai_title: "虚拟助手",
        ai_placeholder: "询问我关于Santiago..."
      }
    };

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById('botonIdioma').addEventListener('click', e => {
  e.stopPropagation();
  document.getElementById('listaIdiomas').classList.toggle('mostrar');
});

document.addEventListener('click', () => {
  document.getElementById('listaIdiomas').classList.remove('mostrar');
});

document.querySelectorAll('#listaIdiomas li').forEach(item => {
  item.addEventListener('click', function () {
    const lang = this.getAttribute('data-lang');
    translatePage(lang);
    localStorage.setItem('idioma', lang);
    document.getElementById('listaIdiomas').classList.remove('mostrar');
  });
});

const idiomaGuardado = localStorage.getItem('idioma');
if (idiomaGuardado) {
  translatePage(idiomaGuardado);
}


// ========================================
// ASISTENTE VIRTUAL 
// ========================================
const toggleAIButton = document.getElementById('toggle-ai-chat');
const chatContainer = document.getElementById('ai-chat');
const closeBtn = document.getElementById('close-ai-chat');
const messages = document.getElementById('ai-messages');
const input = document.getElementById('ai-input');
const sendBtn = document.getElementById('ai-send');

const API_KEY = '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'; //  API KEY
const MODEL = 'openai/gpt-3.5-turbo';

toggleAIButton.addEventListener('click', () => {
  chatContainer.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  chatContainer.classList.remove('show');
});

sendBtn.addEventListener('click', enviarMensaje);
input.addEventListener('keypress', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    enviarMensaje();
  }
});

function mostrarMensaje(texto, tipo) {
  const msg = document.createElement('div');
  msg.className = `ai-message ${tipo}`;
  const content = document.createElement('div');
  content.className = 'message-content';
  content.textContent = texto;
  msg.appendChild(content);
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

async function enviarMensaje() {
  const texto = input.value.trim();
  if (!texto) return;
  mostrarMensaje(texto, 'user');
  input.value = '';
  mostrarMensaje("...", 'bot');

  const respuesta = await consultarIA(texto);
  messages.removeChild(messages.lastChild);
  mostrarMensaje(respuesta, 'bot');
}

async function consultarIA(texto) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: "Eres un asistente virtual amigable que responde preguntas sobre el portafolio de Santiago Lozano(respondes en base al idioma en el que te hablen). Debes actuar como si fueras un guía personalizado del sitio. Cuando alguien te pregunte '¿quien es Santiago?', '¿que sabes sobre Santiago?' u otras preguntas generales, responde con una breve descripcion (no mas de 3 frases). Solo proporciona mas informacion si el usuario lo solicita específicamente. Tenes la siguiente informacion sobre Santiago: Santiago Lozano es un desarrollador apasionado por la tecnología, la innovacion y el aprendizaje constante. Cuenta con experiencia en: - Python: +250 horas - C#: +110 horas - C++: +80 horas - HTML: +15 horas. Ha desarrollado varios proyectos destacados, incluidos: 1. Plantas contra Zombies en Python: juego completamente funcional inspirado en PvZ, usado como ejemplo de logica de programacion, uso de clases, eventos y animaciones con Pygame. Disponible en: https://github.com/Sslozfer/pvz-python. 2. Mapa de Terremotos: visualizacion interactiva de datos sísmicos usando mapas, uso de APIs de datos, procesamiento y despliegue grafico. Disponible en: https://github.com/Sslozfer/Trabajo-1/tree/ramita/parte%201. 3. Estadísticas de GitHub: muestra graficos sobre usuarios, repositorios y licencias usando Plotly y analisis de datos. Disponible en: https://github.com/Sslozfer/Trabajo-1/tree/ramita/parte%202. Estructura del codigo HTML (index.html): <header>: menu de navegacion con selector de idioma y boton de modo oscuro. <section id='portada'>: portada de bienvenida. <section id='sobre-mi'>: descripcion personal + boton para descargar el CV. <section id='habilidades'>: muestra íconos y horas dedicadas a cada lenguaje. <section id='proyectos'>: grid con los 3 proyectos mas importantes. <section id='contacto'>: formulario de contacto vía Formspree + enlaces a redes sociales. <div class='ai-assistant'>: boton flotante para abrir el asistente virtual. <div id='ai-chat'>: ventana de chat con el asistente virtual. CSS (styles.css): maneja colores claros y oscuros con variables CSS, diseño responsive con media queries para tablets y moviles, estilo moderno con sombras, bordes redondeados y transiciones, animaciones en botones e íconos (ej: pulse, girar), estilo especial para el chat: burbujas, entrada de texto, animacion de escritura. JavaScript (main.js): modo claro/oscuro con cambio de ícono y partículas, traductor multi-idioma para español, ingles y chino, integracion con particles.js para fondo animado, asistente virtual conectado a IA (OpenRouter / GPT) que responde a preguntas. Puede explicar secciones, proyectos, habilidades o responder preguntas personalizadas sobre Santiago. Objetivo del asistente: ayudar al visitante a explorar el portafolio, explicar que tecnologías domina Santiago, guiar a otros sobre como contactarlo, descargar su CV o ver sus proyectos. Contacto: Santiago puede ser contactado a traves de: LinkedIn: https://www.linkedin.com/in/ss-lozfer-aa12a9307/, GitHub: https://github.com/Sslozfer, Email: Sslozfer@gmail.com" },
          { role: "user", content: texto }
        ]
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Lo siento, no entendi eso.";
  } catch (error) {
    console.error(error);
    return "Ocurrio un error al consultar la IA.";
  }
}

// ========================
// MENÚ HAMBURGUESA
// ========================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
