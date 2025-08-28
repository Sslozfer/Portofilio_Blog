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