const ownerNumber = ["557491143362@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557491143362' 
// mude para seu numero

var gimagenotregister = true
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'O anti chat está ativado e você não é meu proprietário, logo será bloqueado.'
//mensagem do antinewchat

const urlaudiomenu = 'https://j.top4top.io/m_19939y1xz0.mp3'
// link direto da url do audio

const antipvmsg = '*🚫 CHAT PRIVADO BLOQUEADO! 🚫*'
//mensagem do antipv

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nEnvie ${prefix}menu no chat privado para receber a lista de comandos!`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, battery) => {
    return `MENU ANDROID NO.18, BATERIA: ${battery}`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BEM-VINDO'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `http://imgur.com/a/rmHlD87.png`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `http://imgur.com/a/rmHlD87.png`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `http://imgur.com/a/FcWoiqb.jpeg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'f803ac10228ceed0df2420dd9d797c8a'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = 'ANDROID NÚMERO 18\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '🚫'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contate o propitetário do bot para saber o pq🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Esta palavra está na minha lista de palavras proíbidas... Adeus! 👋🏻*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Esta palavra está na minha lista de palavras proíbidas.*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Enviando pornografia aqui mesmo sabendo que não pode... Adeus! 👋🏻 \n\n(Em caso de remoção de forma injusta ou não intencional entre em contato com algum dos administradores do grupo).'
// mensagem de ban no antiporn

const adminmsgporn = '*Você é um admin e deveria ter mais respeito quanto a isso, espero que isso não se repita!*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Corra Membro comum, O ban está próximo...'
// mensagem de ban no antilink

const adminmsglink = 'Isso é um link... Ah é verdade, você é um admin e só por isso não irei te remover do grupo :)'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Isso está na minha lista de palavras proibidas.'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palavra proibida? Já sabe né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 0
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Deu erro, tente novamente :/'
// mensagem de erro

const notregister = `*Comando não registrado, escreva ${prefix}menu no chat privado para ver a lista de comandos, caso envie esse comando no grupo será removido imediatamente e bloqueado.*`

// MENSAGENS DE AUTOREPLY

const botlindo = '><'
const linkbotlindo = 'https://i.pinimg.com/originals/03/da/69/03da699929be5066f998e4c5a3a8270b.jpg'
const botfeio = 'Tu parece um sirgueijo, um caranguejo amassado 😡'
const cadebot = 'Me chamou 👉👈?'
const botfdp = 'Te foder rapaz, te deitar na porrada quando tiver dormindo'
const botgostoso = 'owo'
const botfofo = 'uwu'
const botbaianor = 'Convidei sua placa-mãe pra minha rede seu corno'
const botcorno = 'Falou o jogador de Fogo Livre'
const botputa = 'Como está sua mãe?'
const botgay = 'Gay é você seu espremedor de linguiça 😠'
const botviado = 'Viado é você, seu pindola de mercadinho 😠'
const numbotfeio = 'senhora sua mãe 😡'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde um pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em sticker ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando só pode ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado pelo grupo proprietário! ❌',
        ownerB: '❌ Este comando só pode ser usado pelo número proprietário! ❌',
        admin: '❌ VOCÊ NÃO É UM ADMINISTRADOR DO GRUPO E VOCÊ SABE DISSO, NÃO SEI NEM O MOTIVO DE VOCÊ TENTAR USAR ESSE COMANDO MESMO SABENDO QUE NÃO IREI OBEDECÊ-LO! ❌',
        Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador do grupo! ❌'
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


// Nem ouse mexer aqui se n quiser que de erro
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