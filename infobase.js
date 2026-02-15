const gamesInfo = {
    "007 From Russia with Love": {
        description: "Viva a ação clássica de James Bond em missões de espionagem baseadas no filme original, com muita perseguição e tiroteio.",
        release: "13/03/2006",
        compat: "Ótima"
    },
    "Assassin's Creed Bloodlines": {
        description: "Controle Altaïr em uma história exclusiva para o PSP que expande o universo dos assassinos com parkour e combates mortais.",
        release: "17/11/2009",
        compat: "Ótima"
    },
    "Ben 10 - Alien Force": {
        description: "Transforme-se nos novos alienígenas de Ben 10 para enfrentar os Soberanos e salvar o mundo neste jogo de ação.",
        release: "28/10/2008",
        compat: "Boa"
    },
    "Burnout Legends": {
        description: "Velocidade extrema e batidas espetaculares. O melhor da série Burnout reunido em corridas alucinantes.",
        release: "13/09/2005",
        compat: "Ótima"
    },
    "Call of Duty Roads to Victory": {
        description: "Sinta a tensão da Segunda Guerra Mundial em missões históricas de tiro em primeira pessoa adaptadas para o portátil.",
        release: "13/03/2007",
        compat: "Boa"
    },
    "Crash of the Titans": {
        description: "Crash está de volta e agora pode controlar monstros gigantes para enfrentar Neo Cortex nesta aventura colorida.",
        release: "04/10/2007",
        compat: "Boa"
    },
    "Dragon Ball Z Shin Budokai": {
        description: "Lutas frenéticas com os guerreiros Z. Golpes especiais e transformações em um dos melhores jogos de luta do console.",
        release: "07/03/2006",
        compat: "Ótima"
    },
    "FIFA Street 2": {
        description: "Futebol de rua raiz, com dribles humilhantes e jogadas acrobáticas em quadras ao redor do mundo.",
        release: "28/02/2006",
        compat: "Ótima"
    },
    "God of War Chains of Olympus": {
        description: "Ajude Kratos a enfrentar os deuses nesta jornada épica que leva o poder do PSP ao limite máximo.",
        release: "04/03/2008",
        compat: "Boa"
    },
    "Grand Theft Auto Vice City Stories": {
        description: "Construa seu império criminoso na ensolarada Vice City dos anos 80 com missões intensas e muita liberdade.",
        release: "31/10/2006",
        compat: "Média"
    },
    "LEGO Batman The Video Game": {
        description: "O Homem-Morcego em versão LEGO enfrenta os vilões de Gotham em uma aventura divertida para todas as idades.",
        release: "23/09/2008",
        compat: "Ótima"
    },
    "Midnight Club L.A. Remix": {
        description: "Corridas de rua ilegais em alta velocidade por Los Angeles com carros e motos tunados.",
        release: "21/10/2008",
        compat: "Média"
    },
    "Mortal Kombat Unchained": {
        description: "O clássico jogo de luta com fatalities sangrentos, muitos personagens e modos de combate exclusivos.",
        release: "13/11/2006",
        compat: "Ótima"
    },
    "Naruto Ultimate Ninja Heroes": {
        description: "Escolha seu ninja favorito e dispute batalhas intensas usando jutsus poderosos no mundo de Naruto.",
        release: "28/08/2007",
        compat: "Ótima"
    },
    "Need for Speed Most Wanted 5-1-0": {
        description: "Fuja da polícia e vença os rivais para se tornar o piloto mais procurado das ruas.",
        release: "15/11/2005",
        compat: "Boa"
    },
    "Spider Man Web of Shadows": {
        description: "Lute contra uma invasão de simbiontes em Nova York usando os poderes do uniforme clássico e do uniforme negro.",
        release: "21/10/2008",
        compat: "Boa"
    },
    "Tekken - Dark Resurrection": {
        description: "Um dos melhores jogos de luta do PSP, com gráficos incríveis, muitos personagens e golpes fluidos.",
        release: "06/07/2006",
        compat: "Ótima"
    },
    "Sonic Rivals": {
        description: "Corridas em alta velocidade entre Sonic e seus rivais em fases 2.5D cheias de obstáculos e power-ups.",
        release: "16/11/2006",
        compat: "Ótima"
    },
    "Silent Hill Origins": {
        description: "Explore o passado sombrio da cidade de Silent Hill neste jogo de terror psicológico tenso e imersivo.",
        release: "06/11/2007",
        compat: "Boa"
    },
    "Soulcalibur Broken Destiny": {
        description: "Combates épicos com armas brancas, trazendo inclusive o personagem Kratos como convidado especial.",
        release: "27/08/2009",
        compat: "Ótima"
    },
    "Grand Theft Auto Liberty City Stories": {
        description: "Retorne a Liberty City na pele de Toni Cipriani. Muita ação, carros e missões no estilo clássico da Rockstar.",
        release: "24/10/2005",
        compat: "Boa"
    },
    "Dragon Ball Z Shin Budokai 2": {
        description: "A continuação da luta épica, com novos personagens e uma história baseada no futuro de Trunks.",
        release: "20/03/2007",
        compat: "Ótima"
    },
    "Killzone Liberation": {
        description: "Combate estratégico com visão de cima. Enfrente os Helghast nesta guerra tática muito intensa.",
        release: "31/10/2006",
        compat: "Ótima"
    },
    "Mortal Kombat Unchained": {
        description: "O torneio mortal no seu bolso com fatalities, modo conquista e minijogos exclusivos para PSP.",
        release: "13/11/2006",
        compat: "Ótima"
    },
    "Medal of Honor Heroes": {
        description: "Clássico tiro em primeira pessoa da Segunda Guerra, focado em missões rápidas e objetivos militares.",
        release: "14/11/2006",
        compat: "Boa"
    },
    "Street Fighter Alpha 3 Max": {
        description: "Luta 2D perfeita com um elenco gigante de personagens e vários modos de jogo diferentes.",
        release: "07/02/2006",
        compat: "Ótima"
    },
    "Ghost Rider": {
        description: "Controle o Motoqueiro Fantasma em combates com correntes e fases de corrida com a moto infernal.",
        release: "13/02/2007",
        compat: "Boa"
    },
    "Toy Story 3": {
        description: "Aventure-se com Woody e Buzz em fases baseadas no filme e um modo de mundo aberto muito divertido.",
        release: "15/06/2010",
        compat: "Ótima"
    },
    "WipeOut Pure": {
        description: "Corridas futuristas com naves ultra velozes e armas eletrônicas em pistas psicodélicas.",
        release: "24/03/2005",
        compat: "Ótima"
    },
    "X-Men Origins Wolverine": {
        description: "Acompanhe o passado de Logan com muita violência, garras de adamantium e saltos brutais sobre os inimigos.",
        release: "01/05/2009",
        compat: "Boa"
    },
    "Dead to Rights Reckoning": {
        description: "Ação policial intensa com tiroteios em câmera lenta e a ajuda do seu fiel cão de combate para prender criminosos.",
        release: "28/06/2005",
        compat: "Ótima"
    },
    "Def Jam Fight for NY The Takeover": {
        description: "Lutas de rua brutais estrelando os maiores rappers do mundo. Um clássico de combate com muita personalidade e estilo.",
        release: "29/08/2006",
        compat: "Boa"
    },
    "FlatOut - Head On": {
        description: "Corridas de destruição onde o cenário quebra e os pilotos voam pelo para-brisa. Caos total sobre rodas.",
        release: "12/03/2008",
        compat: "Boa"
    },
    "Ghost Rider": {
        description: "Controle o Motoqueiro Fantasma e use suas correntes de fogo para derrotar demônios e acelerar sua moto infernal.",
        release: "13/02/2007",
        compat: "Ótima"
    },
    "Harvest Moon Hero of Leaf Valley": {
        description: "Cuide da sua fazenda, crie animais e faça amizades para salvar o vale de se tornar um parque de diversões.",
        release: "26/04/2010",
        compat: "Ótima"
    },
    "Hot Wheels Ultimate Racing": {
        description: "Corridas velozes com os carros mais famosos da Hot Wheels em pistas cheias de loops e armadilhas.",
        release: "29/06/2007",
        compat: "Ótima"
    },
    "Infected": {
        description: "Um jogo de tiro frenético onde você deve limpar Nova York de zumbis explosivos em pleno Natal.",
        release: "15/11/2005",
        compat: "Boa"
    },
    "LEGO Indiana Jones": {
        description: "Reviva as aventuras do arqueólogo mais famoso do cinema com o humor e a diversão das peças LEGO.",
        release: "03/06/2008",
        compat: "Ótima"
    },
    "Marvel Nemesis Rise of the Imperfects": {
        description: "Coloque os heróis da Marvel para lutar contra uma nova raça de super-humanos em batalhas sombrias.",
        release: "20/09/2005",
        compat: "Boa"
    },
    "Midnight Club L.A. Remix": {
        description: "Corridas de rua em mundo aberto com carros tunados e trilha sonora marcante pelas ruas de Los Angeles.",
        release: "21/10/2008",
        compat: "Médio"
    },
    "Monster Jam Path of Destruction": {
        description: "Pilote os famosos Monster Trucks, como o Grave Digger, em arenas de destruição e saltos gigantes.",
        release: "09/11/2010",
        compat: "Boa"
    },
    "Obscure The Aftermath": {
        description: "Terror de sobrevivência onde um grupo de estudantes enfrenta criaturas bizarras em um ambiente universitário sinistro.",
        release: "25/03/2008",
        compat: "Boa"
    },
    "Pac-Man World Rally": {
        description: "O mascote amarelo e seus amigos em uma corrida de karts acelerada e cheia de poderes clássicos.",
        release: "22/08/2006",
        compat: "Ótima"
    },
    "Prince of Persia Rival Swords": {
        description: "Aventura épica com parkour e combates temporais, onde o Príncipe deve enfrentar sua própria versão sombria.",
        release: "03/04/2007",
        compat: "Boa"
    },
    "Soulcalibur Broken Destiny": {
        description: "Lutas de espadas com visual incrível e movimentos rápidos. Inclui o Kratos como lutador convidado.",
        release: "27/08/2009",
        compat: "Ótima"
    },
    "Ape Escape Academy": {
        description: "Uma coleção de minijogos malucos protagonizados pelos macacos mais famosos da PlayStation. Diversão garantida e rápida.",
        release: "17/01/2006",
        compat: "Ótima"
    },
    "Battlezone": {
        description: "Combate de tanques futuristas em arenas intensas. Um remake moderno do clássico arcade com foco em estratégia e reflexos.",
        release: "07/11/2006",
        compat: "Boa"
    },
    "Bomberman": {
        description: "O clássico jogo de explodir labirintos. Coloque bombas estrategicamente para derrotar inimigos e limpar o caminho.",
        release: "12/09/2006",
        compat: "Ótima"
    },
    "Cabela's African Safari": {
        description: "Explore as savanas da África em busca dos animais mais selvagens do continente nesta experiência de caça realista.",
        release: "17/10/2006",
        compat: "Boa"
    },
    "Chili Con Carnage": {
        description: "Ação desenfreada com muito humor e acrobacias. Um jogo de tiro em terceira pessoa focado em combos e estilo.",
        release: "13/02/2007",
        compat: "Ótima"
    },
    "Dead or Alive - Paradise": {
        description: "Relaxe nas praias de uma ilha tropical com as personagens de Dead or Alive em diversas atividades e minijogos.",
        release: "20/03/2010",
        compat: "Boa"
    },
    "Dynasty Warriors": {
        description: "Enfrente exércitos gigantes sozinho neste épico de ação baseado na história da China antiga.",
        release: "24/03/2005",
        compat: "Média"
    },
    "Fight Night Round 3": {
        description: "O simulador de boxe mais realista do console. Sinta cada soco e suba no ranking para se tornar o campeão mundial.",
        release: "22/02/2006",
        compat: "Ótima"
    },
    "Gripshift": {
        description: "Uma mistura única de corrida, plataforma e quebra-cabeças em pistas malucas e desafiadoras.",
        release: "13/09/2005",
        compat: "Ótima"
    },
    "GUN Showdown": {
        description: "Seja um pistoleiro no Velho Oeste em uma história de vingança com mundo aberto e duelos intensos.",
        release: "10/10/2006",
        compat: "Boa"
    },
    "Hammerin' Hero": {
        description: "Aventura de plataforma colorida onde você usa um martelo gigante para derrotar inimigos e ajudar os cidadãos.",
        release: "07/04/2009",
        compat: "Ótima"
    },
    "Harvest Moon Boy & Girl": {
        description: "Escolha seu personagem e gerencie sua própria fazenda, plantando, criando animais e construindo uma família.",
        release: "31/07/2007",
        compat: "Ótima"
    },
    "Patapon 3": {
        description: "Lidere sua tribo de guerreiros ao ritmo dos tambores. Um RPG rítmico único com batalhas épicas e customização profunda.",
        release: "12/04/2011",
        compat: "Ótima"
    },
    "PES 2010 - Pro Evolution Soccer": {
        description: "Um dos simuladores de futebol mais queridos, com jogabilidade precisa e os grandes craques da época.",
        release: "23/10/2009",
        compat: "Ótima"
    },
    "Sonic Rivals 2": {
        description: "A sequência das corridas de combate em alta velocidade, com novos personagens e modos de batalha melhorados.",
        release: "13/11/2007",
        compat: "Ótima"
    },
    "Killzone Liberation": {
        description: "Enfrente os Helghast nesta aventura de tiro tático com visão aérea. Um dos jogos mais bonitos e desafiadores do console.",
        release: "31/10/2006",
        compat: "Ótima"
    },
    "LEGO Indiana Jones": {
        description: "Reviva as cenas icônicas dos filmes do arqueólogo mais famoso do cinema em um mundo divertido feito de blocos LEGO.",
        release: "03/06/2008",
        compat: "Ótima"
    },
    "Marvel Nemesis Rise of the Imperfects": {
        description: "Os heróis da Marvel enfrentam uma nova ameaça em lutas sombrias e destrutivas em arenas 3D.",
        release: "20/09/2005",
        compat: "Boa"
    },
    "Medal of Honor Heroes": {
        description: "Tiro em primeira pessoa clássico da Segunda Guerra Mundial com missões rápidas e intensas em diversos campos de batalha.",
        release: "14/11/2006",
        compat: "Boa"
    },
    "Miami Vice The Game": {
        description: "Entre no submundo de Miami para derrubar o tráfico de drogas neste jogo de tiro tático baseado no filme.",
        release: "18/07/2006",
        compat: "Boa"
    },
    "Monster Hunter Freedom": {
        description: "Cace criaturas gigantescas, colete recursos e fabrique equipamentos poderosos nesta jornada épica de sobrevivência.",
        release: "01/12/2005",
        compat: "Boa"
    },
    "MTX Mototrax": {
        description: "Sinta a adrenalina do motocross com manobras radicais e corridas de alta velocidade em pistas cheias de lama.",
        release: "28/06/2006",
        compat: "Ótima"
    },
    "MX vs. ATV On the Edge": {
        description: "Dispute corridas intensas entre motos e quadriciclos em cenários off-road cheios de obstáculos.",
        release: "28/02/2006",
        compat: "Boa"
    },
    "Naruto Shippuden Ultimate Ninja Heroes 3": {
        description: "A fase Shippuden chega com tudo em lutas ninjas rápidas, muitos personagens e jutsus espetaculares.",
        release: "14/11/2009",
        compat: "Ótima"
    },
    "NBA Street Showdown": {
        description: "Basquete de rua com estilo, enterradas absurdas e combos de dribles que deixam qualquer um tonto.",
        release: "27/04/2005",
        compat: "Ótima"
    },
    "Need for Speed ProStreet": {
        description: "Leve as corridas de rua para as pistas profissionais com foco em simulação, batidas reais e muita customização.",
        release: "31/10/2007",
        compat: "Média"
    },
    "Need for Speed Underground Rivals": {
        description: "O espírito do tuning no PSP. Corra à noite, ganhe respeito e deixe seu carro com visual exclusivo.",
        release: "14/03/2005",
        compat: "Ótima"
    },
    "Peter Jackson's King Kong": {
        description: "Sobreviva na Ilha da Caveira enfrentando dinossauros e controle o gigante Kong em batalhas épicas.",
        release: "22/11/2005",
        compat: "Boa"
    },
    "Prince of Persia - The Forgotten Sands": {
        description: "Controle os elementos da natureza e use suas habilidades de parkour para salvar o reino neste capítulo inédito.",
        release: "18/05/2010",
        compat: "Boa"
    },
    "Pursuit Force": {
        description: "Pule de carro em carro em alta velocidade para prender criminosos nesta mistura louca de corrida e tiro.",
        release: "28/10/2005",
        compat: "Boa"
    },
    "Shepherd's Crossing": {
        description: "Um simulador de fazenda focado na criação de animais e trocas de recursos. Um jogo calmo e muito estratégico.",
        release: "18/08/2008",
        compat: "Ótima"
    },
    "SOCOM U.S. Navy SEALs Fireteam": {
        description: "Lidere uma equipe de elite em missões táticas militares ao redor do mundo. Tiro e estratégia em terceira pessoa.",
        release: "11/10/2005",
        compat: "Boa"
    },
    "Spider Man Friend or Foe": {
        description: "O Homem-Aranha une forças com seus maiores inimigos para enfrentar uma ameaça ainda maior neste jogo de luta e aventura.",
        release: "02/10/2007",
        compat: "Boa"
    },
    "Syphon Filter - Logan's Shadow": {
        description: "Gabe Logan retorna para uma missão de espionagem com jogabilidade refinada e uma história digna de filmes de Hollywood.",
        release: "02/10/2007",
        compat: "Ótima"
    },
    "Tokobot": {
        description: "Controle pequenos robôs que podem se unir para formar estruturas e ajudar você a resolver quebra-cabeças e enfrentar chefes.",
        release: "13/12/2005",
        compat: "Ótima"
    },
    "Twisted Metal Head On": {
        description: "O clássico combate de veículos com palhaços assassinos e carros equipados com metralhadoras e mísseis.",
        release: "24/03/2005",
        compat: "Ótima"
    },
    "Ultimate Ghosts'n Goblins": {
        description: "Ajude o cavaleiro Arthur a enfrentar hordas de monstros neste jogo de plataforma famoso por seu desafio elevado.",
        release: "01/08/2006",
        compat: "Ótima"
    },
    "Undead Knights": {
        description: "Transforme seus inimigos em zumbis e use-os como escudo ou exército para destruir tudo o que estiver no seu caminho.",
        release: "29/09/2009",
        compat: "Boa"
    },
    "Untold Legends - The Warrior's Code": {
        description: "Um RPG de ação clássico com muitos itens, magias e masmorras para explorar no melhor estilo Diablo.",
        release: "28/03/2006",
        compat: "Boa"
    },
    "Virtua Tennis - World Tour": {
        description: "O tênis mais divertido dos videogames. Simples de jogar, mas difícil de dominar, com gráficos excelentes para o console.",
        release: "20/10/2005",
        compat: "Ótima"
    },
    "Virtua Tennis 3": {
        description: "A sequência com jogadores reais da época e um modo carreira que vai te prender por horas nas quadras.",
        release: "20/03/2007",
        compat: "Ótima"
    },
    "Worms Open Warfare": {
        description: "Estratégia por turnos com minhocas armadas até os dentes. Use bazucas e ovelhas explosivas para vencer.",
        release: "22/03/2006",
        compat: "Ótima"
    },
    "Xiaolin Showdown": {
        description: "Baseado no desenho animado, lute contra vilões e colete objetos mágicos para salvar o mundo com seus poderes elementais.",
        release: "14/11/2006",
        compat: "Boa"
    },
    "Gripshift": {
        description: "Uma mistura única de corrida e plataforma onde você deve chegar ao final de pistas flutuantes cheias de perigos.",
        release: "13/09/2005",
        compat: "Ótima"
    },
    "Cabela's Legendary Adventures": {
        description: "Viaje no tempo e reviva as caçadas mais lendárias da história neste simulador realista de caça.",
        release: "09/09/2008",
        compat: "Boa"
    },
    "Cabela's North American Adventures": {
        description: "Participe de competições de caça em diversos cenários da América do Norte com um sistema de câmera focado em reality show.",
        release: "14/09/2010",
        compat: "Boa"
    },
    "Death Jr.": {
        description: "Controle o filho da Morte em uma aventura gótica cheia de plataformas, inimigos bizarros e armas criativas.",
        release: "16/08/2005",
        compat: "Boa"
    },
    "Dragoneer's Aria": {
        description: "Um RPG por turnos clássico com uma história focada em dragões e um sistema de combate estratégico e visual colorido.",
        release: "21/08/2007",
        compat: "Boa"
    },
    "Dreamworks Shrek Smash N' Crash": {
        description: "Corridas de kart malucas com Shrek e sua turma. Use itens mágicos e atalhos para vencer em pântanos e castelos.",
        release: "14/11/2006",
        compat: "Ótima"
    },
    "DreamWorks Shrek the Third": {
        description: "Ajude Shrek e seus amigos a encontrar o novo rei em uma aventura de ação com muitos puzzles e combates engraçados.",
        release: "14/05/2007",
        compat: "Boa"
    },
    "Eragon": {
        description: "Voe com sua dragão Saphira e use magias poderosas para enfrentar o exército do rei Galbatorix nesta aventura épica.",
        release: "14/11/2006",
        compat: "Boa"
    },
    "Ford Racing Off Road": {
        description: "Corridas de caminhonetes e jipes da Ford em pistas de terra, lama e neve. Foco total na resistência e velocidade.",
        release: "29/07/2008",
        compat: "Ótima"
    },
    "Gladiator Begins": {
        description: "Crie seu gladiador e lute pela sua liberdade nas arenas romanas. O jogo oferece muita customização de armas e estilos.",
        release: "18/06/2010",
        compat: "Boa"
    },
    "Hannspree Ten Kate Honda SBK": {
        description: "Simulador de motociclismo focado no mundial de Superbike, com física realista e as motos oficiais da Honda.",
        release: "28/10/2008",
        compat: "Boa"
    },
    "Kenka Bancho - Badass Rumble": {
        description: "Seja um delinquente escolar e lute para provar que é o mais forte da cidade. Um jogo de mundo aberto com muita pancadaria.",
        release: "10/11/2009",
        compat: "Boa"
    },
    "300 - March to Glory": {
        description: "Lute como o Rei Leônidas e lidere seus 300 espartanos contra o exército persa nesta batalha épica e sangrenta.",
        release: "27/02/2007",
        compat: "Boa"
    },
    "Aliens vs. Predator Requiem": {
        description: "Escolha seu lado na guerra definitiva entre as raças mais perigosas do universo em combates intensos na Terra.",
        release: "13/11/2007",
        compat: "Média"
    },
    "Armored Core 3 Portable": {
        description: "Pilote e customize mechas gigantes para completar missões táticas em um futuro distópico cheio de ação.",
        release: "30/07/2009",
        compat: "Boa"
    },
    "Army of Two - The 40th Day": {
        description: "Um jogo de tiro focado em cooperação, onde você e seu parceiro devem sobreviver a um desastre em Xangai.",
        release: "12/01/2010",
        compat: "Boa"
    }

};

window.gamesInfo = gamesInfo;