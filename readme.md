# 🍊 Orange Portable (v2.0)

O **Orange Portable** é um Web App moderno, veloz e otimizado para entusiastas de jogos portáteis. Ele funciona como um catálogo inteligente e simplificado para o emulador PPSSPP, permitindo que os usuários explorem, filtrem e acessem uma vasta biblioteca de títulos comprimidos em formato CSO de forma rápida e intuitiva.

---

## 🚀 Links de Acesso

* 🌐 **Versão WEB:** [Navegador](https://085teuzin.github.io/Orange-Portable/)
* 📸 **Instagram Oficial:** [@085_teuzinnn](https://www.instagram.com/085_teuzinnn?igsh=ZGJqaHBoMHliZGNw)

---

## ✨ Funcionalidades Principais

* 🔍 **Pesquisa Inteligente (Debounce):** Localize qualquer jogo instantaneamente através da barra de busca que evita travamentos na digitação.
* 🗂️ **Filtros Dinâmicos por Categoria:** Navegação simplificada por gêneros (Ação/Aventura, Corrida, Esportes, Luta, Mundo Aberto, Plataforma, RPG, Simulação e Tiro) com contador de jogos em tempo real.
* 📊 **Ficha Técnica Detalhada:** Informações completas ao clicar no jogo, exibindo tamanho, idioma, data de lançamento, tempo estimado de gameplay e nível de compatibilidade com o emulador.
* 🎲 **Modo Aleatório ("Me Surpreenda"):** Escolhe e abre os detalhes de um título ao acaso com base nos seus filtros atuais.
* 🔠 **Ordenação Avançada:** Menu exclusivo para organizar a lista de A-Z, Z-A, por menor/maior tamanho ou focar apenas em jogos **Traduzidos em PT-BR 🇧🇷**.
* ❤️ **Sistema de Favoritos:** Salve os seus jogos preferidos na sua lista pessoal com persistência de dados.
* 📱 **Integração AndroidJS:** Suporte nativo para cópia de chave Pix caso rodado dentro de WebViews híbridas.

---

## 🛠️ Estrutura e Tecnologias

O projeto foi arquitetado em módulos para garantir carregamento rápido e fácil manutenção:

- **index.html**: Interface principal responsiva estruturada com **Tailwind CSS** (via CDN) e rotinas de UI/UX em JavaScript Vanilla.
- **database.js**: Banco de dados local contendo a lista de jogos, links de download, categorias e tamanhos.
- **infobase.js**: Repositório de metadados contendo descrições detalhadas, idiomas e compatibilidade de cada título.
- **LocalStorage**: Utilizado para retenção dos dados de favoritos do usuário sem necessidade de um backend ou banco de dados externo.

---

## 🤝 Suporte e Apoio ao Projeto

Se você quiser ajudar a manter o catálogo online e os links sempre atualizados, o app conta com duas ferramentas de apoio:

- **Orange SOS:** Link direto para o Instagram do desenvolvedor para reportar links quebrados, sugerir melhorias ou solicitar novos jogos.
- **Orange Pix:** Sistema de doação integrado com função de "Copia e Cola" automática da chave Pix para facilitar o seu apoio.

---

<p align="center">
  <i>Desenvolvido com 🧡 por <b>@085_Teuzinnn</b>. © 2026 Orange Portable - Todos os direitos reservados.</i>
</p>