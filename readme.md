# 🍊 Orange Portable (v2.7)

O **Orange Portable** é uma aplicação web moderna, ultra rápida e 100% otimizada para fãs de consoles portáteis e emulação. Desenvolvido para servir como o catálogo definitivo para o emulador **PPSSPP**, ele permite explorar, filtrar e baixar mais de **100 jogos otimizados em formato CSO**, trazendo uma experiência completa de central de jogos na palma da mão.

---

## 🚀 Links de Acesso

* 🌐 **Versão Web Oficial:** [Orange Portable](https://085teuzin.github.io/Orange-Portable/)
* 📸 **Instagram Oficial:** [@085_teuzinnn](https://www.instagram.com/085_teuzinnn?igsh=ZGJqaHBoMHliZGNw)

---

## ✨ Principais Recursos

### 🎮 Navegação e Catálogo
* 📦 **100+ Jogos em CSO:** Coleção compactada e testada, otimizando o espaço de armazenamento do seu dispositivo.
* 🔍 **Pesquisa Instantânea:** Barra de busca com resposta rápida (Debounce) e botão para limpar a pesquisa com um clique.
* 🗂️ **Filtros por Categoria:** Organização por gêneros (Ação/Aventura, Corrida, Esportes, Luta, Mundo Aberto, Plataforma, RPG, Simulação e Tiro) com contadores dinâmicos de jogos.
* 🇧🇷 **Filtro de Traduzidos:** Opção exclusiva para exibir apenas os títulos com tradução em Português do Brasil (PT-BR).
* 🎲 **Modo "Me Surpreenda!":** Seleciona um jogo aleatório dentro dos seus filtros ativos.
* 🔠 **Ordenação Flexível:** Organize o catálogo de A-Z, Z-A, por menor tamanho ou maior tamanho.

### 🎵 Imersão e Áudio
* 🔊 **Efeitos Sonoros Integrados:** Retorno sonoro ao clicar em botões e navegar pelo app via *Web Audio API*.
* 🎶 **Trilha Sonora de Fundo:** Música suave de fundo com controle direto de **Mute/Unmute (🔊/🔇)** com salvamento das suas preferências.

### 📊 Estatísticas e Detalhes
* 📊 **Painel de Estatísticas:** Cálculo em tempo real do total de jogos, tamanho total da biblioteca (em GB), média de tamanho por jogo, total de jogos em PT-BR e destaques dos maiores e menores títulos do catálogo.
* 📄 **Ficha Técnica Completa:** Detalhes de cada título incluindo tamanho, formato, tempo estimado de jogo, data de lançamento, idioma com bandeiras indicativas e nível de compatibilidade com o PPSSPP.
* ❤️ **Sistema de Favoritos:** Salve e gerencie seus jogos preferidos localmente no seu navegador.

### 📱 Experiência de Uso (UX/UI)
* ⏳ **Tela de Carregamento (Loading Screen):** Animação fluida inicial com fallback inteligente para falhas de conexão.
* 📱 **Layout Responsivo:** Desenvolvido do zero para mobile e desktop, adaptado para navegadores Chrome.
* ☝️ **Navegação Rápida:** Botão flutuante para voltar ao topo suavemente.

---

## 🛠️ Estrutura do Projeto

```text
├── index.html       # Interface principal, estilos, modais e scripts de controle
├── database.js      # Base de dados contendo o catálogo de jogos, tamanhos e links
├── infobase.js      # Metadados completos (descrições, compatibilidade, idiomas)
├── music.m4a        # Trilha sonora de fundo
├── pix.png          # QR Code estático do Orange Pix
└── README.md        # Documentação do repositório
```

---

## 🧰 Tecnologias Utilizadas

* **HTML5 & CSS3** (Custom Properties, Flexbox e Grid Layout)
* **Tailwind CSS** (via CDN para estilização ágil)
* **JavaScript Vanilla (ES6+)** (Gerenciamento de estado, manipuladores de áudio e DOM)
* **Web Audio API** (Sintetizador de efeitos sonoros *tap/click*)
* **LocalStorage API** (Armazenamento de favoritos e preferências de áudio)
* **AndroidJS / Web Clipboards** (Integração com cópia direta da chave Pix)

---

## 🤝 Suporte e Contribuição

Precisando de ajuda, querendo sugerir um novo jogo ou reportar um link quebrado? Utilize nossas ferramentas internas no app:

* 🍊 **Orange SOS:** Canal direto de suporte via Instagram [@085_teuzinnn](https://www.instagram.com/085_teuzinnn?igsh=ZGJqaHBoMHliZGNw).
* 🍊 **Orange Pix:** Contribua para manter o projeto no ar copiando a chave Pix diretamente no app.

---

<p align="center">
  <b>Orange Portable v2.7</b><br>
  <i>Desenvolvido com 🧡 por <b>@085_Teuzinnn</b></i><br>
  © 2026 - Todos os Direitos Reservados
</p>