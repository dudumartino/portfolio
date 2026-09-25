// src/data/projetos.js
// Projetos exibidos quando USE_FIREBASE = false (ver src/config.js).
// Mesmo formato da coleção "projetos" do Firestore; title e description
// aceitam texto simples ou um objeto por idioma ({ pt, en, es }).
// Imagens ficam em public/projetos/.

export const PROJETOS = [
  {
    id: 'portfolio',
    order: 1,
    title: { pt: 'Portfolio', en: 'Portfolio', es: 'Portafolio' },
    description: {
      pt: 'Este site. Feito em React e Vite, disponível em 3 idiomas, com SEO otimizado, formulário de orçamento integrado ao WhatsApp e deploy automático via GitHub Actions.',
      en: 'This website. Built with React and Vite, available in 3 languages, with optimized SEO, a quote form connected to WhatsApp and automatic deployment via GitHub Actions.',
      es: 'Este sitio. Hecho con React y Vite, disponible en 3 idiomas, con SEO optimizado, formulario de presupuesto integrado con WhatsApp y despliegue automático con GitHub Actions.',
    },
    imageUrl: '/projetos/portfolio.jpg',
    liveLink: 'https://eduardomf.com/',
    repoLink: 'https://github.com/dudumartino/portfolio',
  },
  {
    id: 'skillmatch',
    order: 2,
    title: { pt: 'SkillMatch', en: 'SkillMatch', es: 'SkillMatch' },
    description: {
      pt: 'Monta times equilibrados para vôlei, futebol e outros esportes a partir das notas dos jogadores, usando algoritmos como Backtracking e Simulated Annealing. Feito em HTML, CSS e JavaScript.',
      en: 'Builds balanced teams for volleyball, soccer and other sports from player ratings, using algorithms such as Backtracking and Simulated Annealing. Made with HTML, CSS and JavaScript.',
      es: 'Arma equipos equilibrados para vóley, fútbol y otros deportes a partir de las notas de los jugadores, con algoritmos como Backtracking y Simulated Annealing. Hecho con HTML, CSS y JavaScript.',
    },
    imageUrl: '/projetos/skillmatch.jpg',
    liveLink: 'https://skill-match-b4y6.vercel.app/',
    repoLink: 'https://github.com/dudumartino/SkillMatch',
  },
  {
    id: 'lembretes',
    order: 3,
    title: { pt: 'Sistema de lembretes', en: 'Reminder system', es: 'Sistema de recordatorios' },
    description: {
      pt: 'Aplicação para criar, favoritar e excluir lembretes com nome e data. Frontend em React e API REST em .NET.\nO primeiro acesso pode levar alguns segundos, pois a API fica em modo de espera.',
      en: 'App to create, favorite and delete reminders with a name and date. React frontend and .NET REST API.\nThe first visit may take a few seconds while the API wakes up.',
      es: 'Aplicación para crear, marcar como favoritos y eliminar recordatorios con nombre y fecha. Frontend en React y API REST en .NET.\nEl primer acceso puede tardar unos segundos mientras la API se activa.',
    },
    imageUrl: '/projetos/lembretes.jpg',
    liveLink: 'https://lembretes-app-b9sd.onrender.com/',
    repoLink: 'https://github.com/dudumartino/TesteDTI',
  },
  {
    id: 'adivinhacao',
    order: 4,
    title: { pt: 'Jogo de adivinhação', en: 'Guessing game', es: 'Juego de adivinanzas' },
    description: {
      pt: 'Jogo em que o usuário tenta adivinhar um número de 1 a 100, com placar de tentativas e acertos. Frontend em React e API em .NET 8, ambos com testes unitários.\nO primeiro acesso pode levar alguns segundos, pois a API fica em modo de espera.',
      en: 'Game where the user tries to guess a number from 1 to 100, with a score of attempts and wins. React frontend and .NET 8 API, both with unit tests.\nThe first visit may take a few seconds while the API wakes up.',
      es: 'Juego en el que el usuario intenta adivinar un número del 1 al 100, con marcador de intentos y aciertos. Frontend en React y API en .NET 8, ambos con pruebas unitarias.\nEl primer acceso puede tardar unos segundos mientras la API se activa.',
    },
    imageUrl: '/projetos/adivinhacao.jpg',
    liveLink: 'https://desafio-dti-frontend.onrender.com/',
    repoLink: 'https://github.com/dudumartino/DesafioDtiDigital',
  },
  {
    id: 'appclima',
    order: 5,
    title: { pt: 'AppClima', en: 'AppClima', es: 'AppClima' },
    description: {
      pt: 'Mostra o clima atual de qualquer cidade consultando a API do OpenWeather. Projeto para praticar o consumo de APIs com HTML, CSS e JavaScript.',
      en: 'Shows the current weather for any city using the OpenWeather API. A project to practice consuming APIs with HTML, CSS and JavaScript.',
      es: 'Muestra el clima actual de cualquier ciudad consultando la API de OpenWeather. Proyecto para practicar el consumo de APIs con HTML, CSS y JavaScript.',
    },
    imageUrl: '/projetos/appclima.jpg',
    liveLink: 'https://app-clima-smoky.vercel.app/',
    repoLink: 'https://github.com/dudumartino/AppClima',
  },
  {
    id: 'assistente-email',
    order: 6,
    title: { pt: 'Assistente de e-mail', en: 'Email assistant', es: 'Asistente de correo' },
    description: {
      pt: 'Classifica e-mails como produtivos ou improdutivos com IA (OpenAI GPT) e sugere uma resposta pronta. Aceita texto, .txt e .pdf. Backend em Python com Flask.\nO primeiro acesso pode levar alguns segundos, pois a API fica em modo de espera.',
      en: 'Classifies emails as productive or unproductive with AI (OpenAI GPT) and suggests a ready-to-send reply. Accepts text, .txt and .pdf. Python backend with Flask.\nThe first visit may take a few seconds while the API wakes up.',
      es: 'Clasifica correos como productivos o improductivos con IA (OpenAI GPT) y sugiere una respuesta lista. Acepta texto, .txt y .pdf. Backend en Python con Flask.\nEl primer acceso puede tardar unos segundos mientras la API se activa.',
    },
    imageUrl: '/projetos/assistente-email.png',
    liveLink: 'https://desafio-autou-vuof.onrender.com/',
    repoLink: 'https://github.com/dudumartino/DesafioAutoU',
  },
];
