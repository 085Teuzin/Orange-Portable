const TemasSazonais = {
    verificar: function() {
        const agora = new Date();
        const mes = agora.getMonth() + 1;
        const dia = agora.getDate();
        let config = { 
            cor: null, contraste: "#ffffff", emojiTitulo: "", emojiFav: "❤️", emojiDownload: "📥", 
            emojiSurpresa: "🎲", emojiSuporte: "💬", emojiCalendario: "📅", emojiGame: "🎮", emojiOff: "📡", 
            emojiPix: "📋", emojiUp: "🆙️", emojiBusca: "🔍", particulas: [], sms: "", especial: false
        };

        if (mes === 1 && dia <= 10) {
            config = { cor: "#ffd700", contraste: "#000000", emojiTitulo: "🥂", emojiFav: "✨", emojiDownload: "🍾", emojiSurpresa: "🎆", emojiSuporte: "📱", emojiCalendario: "🗓️", emojiGame: "🕹️", emojiOff: "📵", emojiPix: "🧧", emojiUp: "🧨", emojiBusca: "✨", particulas: ["✨", "🥂"], sms: "Feliz Ano Novo! ✨" };
        } else if (mes === 2 && dia >= 10 && dia <= 20) {
            config = { cor: "#e91e63", contraste: "#ffffff", emojiTitulo: "🎊", emojiFav: "🎭", emojiDownload: "🎉", emojiSurpresa: " drum ", emojiSuporte: "📣", emojiCalendario: "📅", emojiGame: "🎮", emojiOff: "🪇", emojiPix: "🎟️", emojiUp: "🚀", emojiBusca: "🎭", particulas: ["🎉", "🎊"], sms: "O Orange Portable caiu na folia! 🎭" };
        } else if (mes === 3 && dia >= 5 && dia <= 10) {
            config = { cor: "#8b5cf6", contraste: "#ffffff", emojiTitulo: "♀️", emojiFav: "✨", emojiDownload: "💎", emojiSurpresa: "👸", emojiSuporte: "💜", emojiCalendario: "🗓️", emojiGame: "🕹️", emojiOff: "🚫", emojiPix: "💸", emojiUp: "⚡", emojiBusca: "✨", particulas: ["💜", "✨", "👑"], sms: "Respeito e força: Feliz Dia da Mulher! 💜" };
        } else if (mes === 3 && dia === 12) {
            config = { 
                cor: "#00bfff", contraste: "#000000", emojiTitulo: "👑", emojiFav: "🌊", emojiDownload: "🐚", emojiSurpresa: "🐟", emojiSuporte: "🧜‍♂️", emojiCalendario: "🎂", emojiGame: "🔱", emojiOff: "🫧", emojiPix: "💎", emojiUp: " Whale ", emojiBusca: "🫧",
                particulas: ["🫧", "🐟", "🌊", "✨", "⭐", "🎊"], 
                sms: "PARABÉNS @085_Teuzinnn! 👑🔱",
                especial: true
            };
        } else if (mes === 4 && dia <= 15) {
            config = { cor: "#bbf7d0", contraste: "#1a1a1a", emojiTitulo: "🐰", emojiFav: "🥚", emojiDownload: "🍫", emojiSurpresa: "🐾", emojiSuporte: "🥕", emojiCalendario: "🗓️", emojiGame: "🎮", emojiOff: "🕳️", emojiPix: "🧺", emojiUp: "🐇", emojiBusca: "🐾", particulas: ["🐰", "🥚"], sms: "Uma Páscoa recheada de jogos! 🍫" };
        } else if (mes === 5 && dia <= 15) {
            config = { cor: "#f472b6", contraste: "#ffffff", emojiTitulo: "🌸", emojiFav: "🌷", emojiDownload: "🎁", emojiSurpresa: "💝", emojiSuporte: "👩‍👦", emojiCalendario: "📅", emojiGame: "🎮", emojiOff: "🥀", emojiPix: "🎀", emojiUp: "💗", emojiBusca: "🌸", particulas: ["🌸", "💕"], sms: "Homenagem a todas as mamães gamers! 🌸" };
        } else if (mes === 6) {
            config = { cor: "#f59e0b", contraste: "#000000", emojiTitulo: "🔥", emojiFav: "🌽", emojiDownload: "🍿", emojiSurpresa: "🪗", emojiSuporte: "🤠", emojiCalendario: "📅", emojiGame: "🎮", emojiOff: "🪵", emojiPix: "👒", emojiUp: "🎈", emojiBusca: "🔥", particulas: ["🔥", "🌽", "🌵"], sms: "Eita trem bão! Arraiá do Orange! 🔥" };
        } else if (mes === 8 && dia >= 5 && dia <= 12) {
            config = { cor: "#3b82f6", contraste: "#ffffff", emojiTitulo: "👔", emojiFav: "💙", emojiDownload: "🛠️", emojiSurpresa: "🧔", emojiSuporte: "🍺", emojiCalendario: "📅", emojiGame: "🕹️", emojiOff: "🚭", emojiPix: "💰", emojiUp: "📈", emojiBusca: "👔", particulas: ["👔", "⭐", "💙"], sms: "Heróis da vida real: Feliz Dia dos Pais! 👔" };
        } else if (mes === 8 && dia >= 25 && dia <= 30) {
            config = { cor: "#8b5cf6", contraste: "#ffffff", emojiTitulo: "🕹️", emojiFav: "💎", emojiDownload: "💾", emojiSurpresa: "🎁", emojiSuporte: "🎧", emojiCalendario: "📅", emojiGame: "👾", emojiOff: "🚫", emojiPix: "🕹️", emojiUp: "⚡", emojiBusca: "👾", particulas: ["👾", "🕹️", "⚡"], sms: "Mês dos Jogos: Feliz Dia do Gamer! 👾" };
        } else if (mes === 9 && dia >= 1 && dia <= 7) {
            config = { cor: "#22c55e", contraste: "#ffffff", emojiTitulo: "🇧🇷", emojiFav: "💚", emojiDownload: "💛", emojiSurpresa: "🦜", emojiSuporte: "⚽", emojiCalendario: "📅", emojiGame: "🎮", emojiOff: "🔇", emojiPix: "💸", emojiUp: "🚀", emojiBusca: "🇧🇷", particulas: ["🇧🇷", "⭐", "💚"], sms: "Brasil acima de tudo! 7 de Setembro 🇧🇷" };
        } else if (mes === 10 && dia >= 1 && dia <= 14) {
            config = { cor: "#ec4899", contraste: "#ffffff", emojiTitulo: "🎈", emojiFav: "🍭", emojiDownload: "🧸", emojiSurpresa: "🍦", emojiSuporte: "🎡", emojiCalendario: "📅", emojiGame: "🪁", emojiOff: "🚫", emojiPix: "🍬", emojiUp: "🌈", emojiBusca: "🍭", particulas: ["🎈", "🌈", "🍭"], sms: "Ser criança é o melhor jogo de todos! 🧸" };
        } else if (mes === 10 && dia >= 15 && dia <= 31) {
            config = { cor: "#ea580c", contraste: "#ffffff", emojiTitulo: "🎃", emojiFav: "👻", emojiDownload: "🍬", emojiSurpresa: "💀", emojiSuporte: "⚰️", emojiCalendario: "🗓️", emojiGame: "🕷️", emojiOff: "🦇", emojiPix: "🕸️", emojiUp: "🧛", emojiBusca: "🎃", particulas: ["🎃", "👻", "🦇"], sms: "Doces ou Travessuras no Portable? 🎃" };
        } else if (mes === 11 && dia >= 15 && dia <= 22) {
            config = { cor: "#78350f", contraste: "#ffffff", emojiTitulo: "✊🏿", emojiFav: "🌍", emojiDownload: "🥁", emojiSurpresa: "🦁", emojiSuporte: "🤝", emojiCalendario: "📅", emojiGame: "🎮", emojiOff: "🚫", emojiPix: "💎", emojiUp: "🔥", emojiBusca: "🌍", particulas: ["✊🏿", "✨", "🌍"], sms: "Orgulho e Resistência: Consciência Negra ✊🏿" };
        } else if (mes === 12 && dia >= 15 && dia <= 25) {
            config = { cor: "#ef4444", contraste: "#ffffff", emojiTitulo: "🎅", emojiFav: "🎄", emojiDownload: "🎁", emojiSurpresa: "🦌", emojiSuporte: "🔔", emojiCalendario: "🗓️", emojiGame: "❄️", emojiOff: "🧊", emojiPix: "🍪", emojiUp: "☃️", emojiBusca: "❄️", particulas: ["❄️", "🎄"], sms: "Feliz Natal e boas jogatinas! 🎁" };
        }

        if (config.cor) this.aplicar(config);
    },

    aplicar: function(cfg) {
        document.documentElement.style.setProperty('--p', cfg.cor);
        document.documentElement.style.setProperty('--c', cfg.contraste);
        const style = document.createElement('style');
        
        let extraStyles = "";
        if (cfg.especial) {
            extraStyles = `
                @keyframes neon {
                    0%, 100% { text-shadow: 0 0 10px ${cfg.cor}, 0 0 20px ${cfg.cor}, 0 0 40px ${cfg.cor}; }
                    50% { text-shadow: 0 0 5px #fff, 0 0 15px ${cfg.cor}, 0 0 30px ${cfg.cor}; }
                }
                #main-title { animation: neon 1.5s ease-in-out infinite; color: #fff !important; }
                .card-active { border-color: ${cfg.cor}99 !important; box-shadow: 0 0 15px ${cfg.cor}33; }
            `;
        }

        style.innerHTML = `
            .text-\\[\\#ff4500\\], .theme-text-orange, h1, h2#mt, #stats, #offline-screen h1, .cat-selected { color: ${cfg.cor} !important; }
            #sub-title { color: ${cfg.cor}; opacity: 1; font-weight: bold; }
            .bg-\\[\\#ff4500\\], .theme-bg-orange, #offline-screen button, .cat-selected { background-color: ${cfg.cor} !important; color: ${cfg.contraste} !important; }
            .theme-text-contrast { color: ${cfg.contraste} !important; }
            .border-\\[\\#ff4500\\], input:focus, select:focus, #btn-rnd, #btn-sup, .cat-selected { border-color: ${cfg.cor} !important; }
            #btn-rnd, #btn-sup { color: ${cfg.cor} !important; }
            .shadow-orange-900\\/20 { box-shadow: 0 10px 15px -3px ${cfg.cor}44 !important; }
            #toast-container { border-color: ${cfg.cor} !important; }
            ${extraStyles}
        `;
        document.head.appendChild(style);

        const h = document.getElementById('main-title');
        const st = document.getElementById('sub-title');
        if (h) h.innerHTML = `Orange Portable <span style="font-style:normal">${cfg.emojiTitulo}</span>`;
        if (st && cfg.sms) st.innerText = cfg.sms;
        
        if (cfg.sms) {
            const tContainer = document.getElementById('toast-container');
            const tIcon = document.getElementById('toast-icon');
            const tMsg = document.getElementById('toast-msg');
            if (tContainer && tIcon && tMsg) {
                tIcon.innerText = cfg.emojiTitulo || "🔔";
                tMsg.innerText = cfg.sms;
                setTimeout(() => tContainer.classList.add('show'), 500);
                setTimeout(() => tContainer.classList.remove('show'), 4500);
            }
        }

        if (document.getElementById('btn-rnd')) document.getElementById('btn-rnd').innerText = `${cfg.emojiSurpresa} Me surpreenda!`;
        
        const pixBtn = document.getElementById('pix');
        if (pixBtn) pixBtn.innerHTML = `${cfg.emojiPix} Copiar Pix`;

        const supLink = document.querySelector('a[href*="wa.me"]');
        if (supLink) supLink.innerHTML = `${cfg.emojiSuporte} Suporte`;

        if (document.getElementById('off-emoji')) document.getElementById('off-emoji').innerText = cfg.emojiOff;
        if (document.getElementById('up')) document.getElementById('up').innerText = cfg.emojiUp;
        
        const searchInput = document.getElementById('s');
        if (searchInput) searchInput.placeholder = `${cfg.emojiBusca} Buscar jogo...`;

        setInterval(() => {
            document.querySelectorAll('button').forEach(btn => {
                if (btn.innerText === '❤️' || btn.innerText === cfg.emojiFav) {
                    btn.innerText = cfg.emojiFav;
                }
            });
            document.querySelectorAll('a').forEach(a => {
                if (a.innerText === '📥' || a.innerText === cfg.emojiDownload) {
                    a.innerText = cfg.emojiDownload;
                }
            });
        }, 500);

        if (cfg.particulas.length > 0) this.neve(cfg.particulas);
    },

    neve: function(p) {
        if (document.getElementById('seasonal-canvas')) document.getElementById('seasonal-canvas').remove();
        const c = document.createElement('canvas');
        c.id = 'seasonal-canvas';
        Object.assign(c.style, { position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 999 });
        c.width = window.innerWidth; c.height = window.innerHeight;
        document.body.appendChild(c);
        const ctx = c.getContext('2d');
        let pts = Array.from({ length: 25 }, () => ({
            x: Math.random() * c.width, y: Math.random() * c.height,
            e: p[Math.floor(Math.random() * p.length)],
            s: Math.random() * 15 + 10, v: Math.random() * 1.5 + 0.5
        }));
        function draw() {
            ctx.clearRect(0, 0, c.width, c.height);
            pts.forEach(pt => {
                ctx.font = `${pt.s}px serif`;
                ctx.fillText(pt.e, pt.x, pt.y);
                pt.y += pt.v;
                if (pt.y > c.height) pt.y = -20;
            });
            requestAnimationFrame(draw);
        }
        draw();
    }
};

window.addEventListener('load', () => TemasSazonais.verificar());