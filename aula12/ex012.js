var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora > 17) {
    console.log('Boa noite!') 
} else {
    console.log('Boa tarde!')
}