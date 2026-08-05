# Davi Matheus | Portfólio Pessoal

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-2ea44f?logo=github)](https://mahtsales.github.io/My-Portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)
[![Acessibilidade](https://img.shields.io/badge/Acessibilidade-AA-9cc8ff)](#)

Página pessoal e portfólio de **Davi Matheus Ferreira Sales**, estudante de
Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento back-end.
Projeto 100% estático — HTML, CSS e JavaScript puro, sem build, sem dependências
de produção e sem framework.

> 🔗 **Demo:** [mahtsales.github.io/My-Portfolio](https://mahtsales.github.io/My-Portfolio/)

---

## ✨ Destaques

- 🎨 **Identidade visual marcante** com paleta vermelho/azul e tipografia
  Bebas Neue + Outfit, com tema escuro por padrão e **modo claro automático**
  via `prefers-color-scheme`.
- 🕷️ **Spider-dev mode**: efeitos sutis de glow跟随 e tilt 3D nos cards,
  desativados automaticamente quando o usuário prefere menos movimento
  (`prefers-reduced-motion`).
- ♿ **Acessível**: skip-link para o conteúdo, `aria-label`s, contraste
  cuidadoso, foco visível, semântica de landmarks (`header`, `main`, `nav`,
  `footer`, `section`).
- 📱 **Responsivo** com `clamp()`, `aspect-ratio` e breakpoints em 920px/640px.
- 🚀 **Performance**: fontes com `preconnect`, imagem com `width`/`height`
  explícitos (sem CLS), `defer` no script, `requestAnimationFrame` no
  glow/tilt e CSS com `containment` implícito.
- 🔍 **SEO**: meta tags `description`, Open Graph e Twitter Card, JSON-LD
  com `schema.org/Person`, `robots.txt` e `sitemap.xml`.
- 🛡️ **Robustez**: `<noscript>` banner, fallback de `prefers-reduced-motion`
  aplicado em CSS e JS, tratamento de erro global em `window.onerror`.
- 🖨️ **Print-friendly** com `@media print` (esconde decorações).
- 📂 **Projeto padrão GitHub Pages** com `404.html`.

---

## 🛠 Stack

| Camada      | Tecnologia                                            |
|-------------|-------------------------------------------------------|
| Estrutura   | HTML5 semântico com `aria-*` e JSON-LD                |
| Estilo      | CSS3 com custom properties, `clamp`, `aspect-ratio`   |
| Comportamento | JavaScript ES2020+ (vanilla, sem libs)              |
| Tipografia  | Bebas Neue + Outfit (Google Fonts, com `preconnect`) |
| Hospedagem  | GitHub Pages                                          |

---

## 📂 Estrutura

```text
My-Portfolio/
├── index.html          # Página principal (single-page)
├── style.css           # Estilos, tokens, temas, responsividade
├── script.js           # Glow + tilt 3D (com rAF e reduced-motion)
├── 404.html            # Página de erro customizada
├── robots.txt          # Diretrizes para crawlers
├── sitemap.xml         # Sitemap mínimo
├── LICENSE             # MIT
├── .gitignore
├── profile-photo/
│   └── foto-perfil.jpeg
└── README.md
```

---

## 🚀 Como rodar localmente

Não há build. É só abrir o `index.html` no navegador. Para uma experiência
idêntica à de produção (com `http://` em vez de `file://`):

```bash
# Opção 1: Python
python3 -m http.server 8080

# Opção 2: Node
npx serve .

# Opção 3: PHP
php -S localhost:8080
```

Depois acesse `http://localhost:8080`.

---

## 🌐 Como publicar no GitHub Pages

1. **Settings → Pages** no repositório.
2. Em **Source**, escolha `Deploy from a branch`.
3. Selecione `main` e `/ (root)`.
4. Salve. Em ~1 minuto o site estará em
   `https://mahtsales.github.io/My-Portfolio/`.

> 💡 O `404.html` é usado automaticamente pelo GitHub Pages quando uma rota
> não existe.

---

## ♿ Acessibilidade

- Skip link "Pular para o conteúdo principal" no topo.
- `prefers-reduced-motion: reduce` desativa tilt, glow, animação do anel da
  foto e transições.
- `prefers-color-scheme: light` ativa o tema claro sem você precisar mexer
  em nada.
- Contraste mínimo AA em textos e botões.
- Foco visível com `outline` em todos os elementos interativos.

---

## 📬 Contato

| Canal    | Link                                                                 |
|----------|----------------------------------------------------------------------|
| Email    | [davimatheusfsales@gmail.com](mailto:davimatheusfsales@gmail.com)    |
| LinkedIn | [linkedin.com/in/mahtsales](https://www.linkedin.com/in/mahtsales/)  |
| GitHub   | [github.com/mahtsales](https://github.com/mahtsales)                 |
| Instagram| [@mahtsales](https://instagram.com/mahtsales)                        |

---

## 📄 Licença

Este projeto está sob a licença **MIT** — veja [LICENSE](LICENSE) para
detalhes.

---

<div align="center">
  Feito com foco, refatoração e café ☕ por <a href="https://github.com/mahtsales">Davi Matheus</a>.
</div>
