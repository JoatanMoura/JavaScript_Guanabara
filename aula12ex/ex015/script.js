function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero =  'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','crianca_m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovem_m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adulto_m.png')
            } else {
                //Idoso
                img.setAttribute('src','idoso_m.png')
            }
        } else if (fsex[1].checked) {
            gênero =  'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','crianca_f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovem_f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adulto_f.png')
            } else {
                //Idoso
                img.setAttribute('src','idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}