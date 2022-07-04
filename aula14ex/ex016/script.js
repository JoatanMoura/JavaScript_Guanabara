function conta () {
    var numIni = parseInt(document.getElementById('numIni').value)
    var numFim = parseInt(document.getElementById('numFim').value)
    var passo = parseInt(document.getElementById('passo').value)
    //var contador = contador + passo
    var valIni
    var valFim
    var somou
    var lista
    var lista2
    var res = document.getElementById('res')
    
    if (isNaN(numIni) || isNaN(numFim) || isNaN(passo)) {
        window.alert('Nenhum dos campos pode ser vazio.')
    } else {
        valFim = numIni
        //lista = valFim

        do {

            somou = valFim + passo
            lista2 = ' - '
           lista = valFim + lista2 + somou

        } while (valFim <= numFim)
    }

    //res.innerHTML = `Contando: <br>${numIni}<br>${numFim}<br>${passo}`
    res.innerHTML = lista
}

function conta2 () {
    var numIni = parseInt(document.getElementById('numIni').value)
    var numFim = parseInt(document.getElementById('numFim').value)
    var passo = parseInt(document.getElementById('passo').value)

    var res = document.getElementById('res')
    
    if (isNaN(numIni) || isNaN(numFim) || isNaN(passo)) {
        window.alert('Nenhum dos campos pode ser vazio.')
    } else {
        valFim = numIni
        lista = valFim + ' - '
        valFim = valFim + passo
        while (valFim <= numFim) {
            //window.alert(lista)
            lista = lista + valFim + ' - '
            valFim = valFim + passo
        } 
    }
    lista = lista + ' # '
    
    res.innerHTML = `Contando: <br>${lista}`
    //res.innerHTML = lista
}