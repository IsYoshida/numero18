const ownerNumber = ["557491143362@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557491143362' 
// mude para seu numero

const callbotmsgs = ['Número 18', 'Android']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'Olá, o chat privado está bloqueado, logo abaixo você poderá encontrar o link de acesso ao grupo de figurinhas onde poderá obter mais informações.\n\n*https://chat.whatsapp.com/GQ42nfU8A9nCO8CuQkbfzj*\n\nApós essa mensagem você será bloqueado automáticamente :)'
//mensagem do antinewchat

const urlaudiomenu = 'https://j.top4top.io/m_19939y1xz0.mp3'
// link direto da url do audio

const antipvmsg = '*🚫 CHAT PRIVADO BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const delaystealcmd = 60
//tempo de delay dos comandos steal (medido por segundos)

const delaygamescmd = 60
//tempo de delay dos comandos de games (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `*Seja bem-vindo ${numero}*\n\n*Envie ${prefix}menu no chat privado para receber a lista de comandos!*`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `👋🏻 ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, battery) => {
    return `MENU ANDROID NÚMERO 18, BATERIA: ${battery}`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BEM-VINDO(a)'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'f803ac10228ceed0df2420dd9d797c8a'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '️Android Número 18'
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '🚫'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫 Este comando está bloqueado contate o propitetário do bot para saber o motivo. 🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Esta palavra está na minha lista de palavras proíbidas... 👋🏻*'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `O sistema de contagem de mensagens é por grupo e consiste em fazer um ranking, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - lista a frequência de mensagens do membro marcado
rankativo - Faz um rank das pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Esta palavra está na minha lista de palavras proíbidas.*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Alerta de conteúdo suspeito! 👋🏻 \n_(Em caso de remoção de forma injusta entre em contato com algum dos administradores do grupo)_.'
// mensagem de ban no antiporn

const adminmsgporn = '*Alerta de conteúdo suspeito! Você é um admin e deveria ter mais respeito quanto a isso, sabe que não deve enviar conteúdo que vai contra as diretrizes do grupo, espero que isso não se repita!*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = '*😠👋🏻*'
// mensagem de ban no antilink

const adminmsglink = 'Isso é um link... Como você é um admin não irei te remover do grupo :)'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Isso está na minha lista de palavras proibidas!'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Isso está na minha lista de palavras proíbidas... Adeus. 👋🏻'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 0
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzipqWNS5S9rmcAGoahGLen47K7Q-dcDhAOw&usqp=CAU'
const textmsgday = 'Bom dia ☕ > <'
// link e mensagem de bom dia

const linkimgeve = 'https://i.pinimg.com/originals/6b/df/29/6bdf2959c159aac610de39a06b5589c8.jpg'
const textmsgeve = `Boa tarde ☀️ > <`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.pinimg.com/originals/d3/ac/69/d3ac692dab4fc3a68adb8df93cc05615.jpg'
const textmsgnig = '️Boa noite ☕ > <'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Ops, tente novamente :/'
// mensagem de erro

const notregister = `*Comando inexistente, envie !menu no CHAT PRIVADO ou no grupo do link abaixo.*
*https://chat.whatsapp.com/GQ42nfU8A9nCO8CuQkbfzj.*
*Caso envie esse comando aqui você será removido e bloqueado imediatamente.*\n (Ignore esta mensagem se ela for enviada no grupo de stickers).`

// MENSAGENS DE AUTOREPLY

const botlindo = '> <'
const linkbotlindo = 'https://i.pinimg.com/originals/03/da/69/03da699929be5066f998e4c5a3a8270b.jpg'
const botfeio = 'Tu parece um sirgueijo, um caranguejo amassado. 😡'
const cadebot = 'Me chamou 👉👈?'
const botfdp = 'Te foder rapaz, te deitar na porrada quando tiver dormindo.'
const botgostoso = 'owo'
const botfofo = 'uwu'
const botbaianor = 'Convidei sua placa-mãe pra minha rede seu corno.'
const botcorno = 'Falou o jogador de Fogo Livre.'
const botputa = 'Como está sua mãe?'
const botgay = 'Gay é você seu espremedor de linguiça 😠'
const botviado = 'Viado é você, seu pindola de mercadinho 😠'
const numbotfeio = 'E sua mãe, como está?'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde um pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em sticker. ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando só pode ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado pelo proprietário do grupo! ❌',
        ownerB: '❌ Este comando só pode ser usado pelo meu proprietário! ❌',
        admin: '❌ VOCÊ NÃO É UM ADMINISTRADOR DO GRUPO E VOCÊ SABE DISSO, NÃO SEI O MOTIVO DE VOCÊ TENTAR USAR ESSE COMANDO MESMO SABENDO QUE NÃO IREI OBEDECÊ-LO! ❌',
        Badmin: '❌ Este comando só pode ser usado quando eu me torno um admin do grupo ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:🌙 Haru\n' 
+ 'ORG:Haru;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557491143362:+55 74 9114-3362\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs