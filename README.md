# Portfólio — Eduardo Martino

Portfólio pessoal de **Eduardo Martino**, desenvolvedor fullstack.
Site de página única com apresentação, trajetória profissional, habilidades, projetos e contato, disponível em português, inglês e espanhol.

🔗 **Online:** [eduardomf.com](https://eduardomf.com/)

---

## Funcionalidades

- **Página única com seções:** Início, Serviços, Sobre (bio + linha do tempo de experiências), Habilidades, Projetos e Orçamento.
- **Formulário de orçamento:** o visitante preenche nome, profissão ou nicho e o que precisa; ao enviar, abre o WhatsApp com a mensagem pronta. Os botões "Pedir orçamento" levam até ele.
- **Três idiomas (pt / en / es):** detecção automática pelo navegador, com a escolha salva no `localStorage`. O idioma padrão é o português.
- **Tema escuro/claro:** o escuro é o padrão; o botão 🌙/☀️ na navbar alterna para o claro.
- **Projetos dinâmicos:** os cards de projeto vêm de uma coleção do **Cloud Firestore**, então adicionar ou editar um projeto não exige novo deploy.
- **Currículo para download:** o botão da navbar abre o PDF hospedado no Firebase Storage.
- **Animações** de entrada com Framer Motion.
- **SEO:** título, descrição, Open Graph, dados estruturados (schema.org), `sitemap.xml` e `robots.txt`. Robôs de busca sempre veem a versão em português.

## Tecnologias

| Área | Ferramentas |
|------|-------------|
| UI | React 19, CSS puro com variáveis (um arquivo por componente) |
| Build | Vite, PostCSS (Tailwind CSS 3 + Autoprefixer) |
| Dados | Firebase / Cloud Firestore |
| i18n | i18next, react-i18next, i18next-browser-languagedetector |
| Animação | Framer Motion |
| Ícones | lucide-react, react-icons, [devicon](https://devicon.dev) (via CDN) |

## Estrutura do projeto

```
portfolio/
├── public/
│   ├── manifest.json
│   ├── logo-em.png           # logo / favicon
│   └── FotoEuElegante.jpeg   # foto da seção Início
├── src/
│   ├── components/           # uma seção do site por componente
│   │   ├── Navbar.jsx        # logo, botão de CV, tema e idioma
│   │   ├── Home.jsx          # apresentação + botão "Pedir orçamento"
│   │   ├── Servicos.jsx      # cards de serviços (lista SERVICES)
│   │   ├── Sobre.jsx         # bio + linha do tempo de experiências
│   │   ├── Skills.jsx        # soft skills + lista HARD_SKILLS
│   │   ├── Projetos.jsx      # lê a coleção "projetos" do Firestore
│   │   └── Contato.jsx       # formulário de orçamento (WhatsApp) + redes sociais
│   ├── styles/               # CSS de cada componente + App.css
│   ├── utils/scrollToSection.js  # rolagem suave até uma seção
│   ├── locales/{pt,en,es}/translation.json
│   ├── App.jsx               # monta as seções e o rodapé
│   ├── firebaseConfig.js     # inicializa o Firebase a partir do .env
│   ├── i18n.js               # configuração do i18next
│   ├── index.css             # fontes, variáveis de cor e tema claro
│   └── index.jsx             # ponto de entrada
├── index.html                # HTML base, meta tags de SEO e Open Graph
├── vite.config.js            # porta 3000, saída em build/
├── postcss.config.js         # Tailwind + Autoprefixer
├── tailwind.config.js        # preflight desligado para não conflitar com o CSS próprio
└── .env.example              # variáveis de ambiente necessárias
```

## Como rodar localmente

Pré-requisitos: **Node.js 20.19+ ou 22.12+** (exigência do Vite) e npm.

```bash
git clone https://github.com/dudumartino/portfolio.git
cd portfolio
npm install
cp .env.example .env   # depois preencha com as credenciais do Firebase
npm run dev            # abre em http://localhost:3000
```

Sem o `.env` preenchido, o site funciona normalmente, mas a seção **Projetos** mostra uma mensagem de erro de configuração.

### Variáveis de ambiente

Os valores ficam em **Firebase Console › Configurações do projeto › Seus apps › App da Web**.

| Variável | Descrição |
|----------|-----------|
| `VITE_FIREBASE_API_KEY` | Chave da API web |
| `VITE_FIREBASE_AUTH_DOMAIN` | `<projeto>.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | ID do projeto |
| `VITE_FIREBASE_STORAGE_BUCKET` | Bucket do Storage |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | ID do remetente |
| `VITE_FIREBASE_APP_ID` | ID do app web |

> A configuração web do Firebase vai embutida no bundle do navegador, então ela não é secreta.
> O que protege os dados são as **regras de segurança do Firestore**. Mantenha a coleção `projetos` como somente leitura para o público.

## Scripts

| Comando | O que faz |
|---------|-----------|
| `npm run dev` (ou `npm start`) | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção na pasta `build/` |
| `npm run preview` | Serve o build de produção localmente para conferência |

## Como editar o conteúdo

### Projetos (Firestore)

Crie documentos na coleção **`projetos`**. A lista é ordenada pelo campo `order`, em ordem crescente.

| Campo | Tipo | Uso |
|-------|------|-----|
| `title` | string | Título do card |
| `description` | string | Texto do card |
| `imageUrl` | string | URL da imagem de capa |
| `liveLink` | string (opcional) | Botão "Saiba mais"; sem valor, o botão fica desativado |
| `repoLink` | string (opcional) | Botão "Ver código"; sem valor, o botão fica desativado |
| `order` | number | Posição do card na lista |

### Textos e traduções

Todo texto visível fica em `src/locales/<idioma>/translation.json`. Ao criar uma chave nova, adicione-a nos **três** arquivos.
Para adicionar um idioma, crie uma pasta nova em `locales/`, registre o arquivo em `src/i18n.js` e inclua a opção no seletor da `Navbar.jsx`.

### Experiências (seção Sobre)

A linha do tempo é o array `timelineItems` em `src/components/Sobre.jsx`. Os textos usam as chaves `about.timeline.*` das traduções. Marque `current: true` no cargo atual para exibir o marcador animado.

### Habilidades técnicas

Edite o array `HARD_SKILLS` em `src/components/Skills.jsx`. O campo `icon` é o caminho do ícone no devicon, por exemplo `react/react-original`.

### Serviços

Os cards vêm do array `SERVICES` em `src/components/Servicos.jsx`. Cada item usa as chaves `services.<chave>_title`, `_desc`, `_b1` e `_b2` das traduções.

### Formulário de orçamento

- **Opções do dropdown:** array `PROFESSIONS` em `src/components/Contato.jsx`, com os textos em `quote.professions`. Mantenha `other` por último: é ele que abre o campo livre.
- **Texto da mensagem do WhatsApp:** chave `quote.whatsappTemplate`.
- **Número do WhatsApp:** constante `WHATSAPP_NUMBER` em `src/components/Contato.jsx`.

### Currículo, foto e contato

- **Link do CV:** atributo `href` do botão em `src/components/Navbar.jsx`.
- **Foto:** substitua `public/FotoEuElegante.jpeg`.
- **LinkedIn e GitHub:** `src/components/Contato.jsx`.
- **SEO:** tags e dados estruturados em `index.html`. Ao mudar os serviços, atualize também o `hasOfferCatalog` de lá.

## Deploy

`npm run build` gera arquivos estáticos em `build/`. Esses arquivos funcionam em qualquer hospedagem estática, como Firebase Hosting, Vercel ou Netlify.
Lembre de configurar as variáveis `VITE_FIREBASE_*` no ambiente de build, porque elas são embutidas durante o build.
Só variáveis com prefixo `VITE_` chegam ao código do navegador.

## Contato

- LinkedIn: [eduardo-martino](https://www.linkedin.com/in/eduardo-martino/)
- GitHub: [dudumartino](https://github.com/dudumartino)
