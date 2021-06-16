const welcome = (number, groupname) => {
    return `*Olá @${number}. Seja bem-vindo(a) ao grupo ${groupname}, leia as informações na descrição e divirta-se :)*`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adeus @${number}. 👋🏻`
}
exports.bye = bye