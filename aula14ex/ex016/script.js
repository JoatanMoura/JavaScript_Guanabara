function conta () {
    let numIni = parseInt(document.getElementById('numIni').value)
    let numFim = parseInt(document.getElementById('numFim').value)
    let passo = parseInt(document.getElementById('passo').value)
    let res = document.getElementById('res')
    
    if (isNaN(numIni) || isNaN(numFim) || isNaN(passo)) {
        window.alert('Nenhum dos campos pode ser vazio.')
    /*} else if (numIni < numFim) {
        valFim = numIni
        lista = valFim + ` \u{1F449}`
        valFim += passo
        while (valFim <= numFim) {
            lista = lista + valFim + ` \u{1F449}`
            valFim += passo
        }*/
    } else if (numFim < numIni) {
            valFim = numFim
            lista = valFim + ` \u{1F449}`
            valFim -= passo
            while (valFim >= numFim) {
                lista = lista + valFim + ` \u{1F449}`
                valFim -= passo
            }
    } 
    lista = lista + ` \u{1F3C1}`
    
    res.innerHTML = `Contando: <br>${lista}`
    //res.innerHTML = lista
}

/*
function conta () {
    let numIni = parseInt(document.getElementById('numIni').value)
    let numFim = parseInt(document.getElementById('numFim').value)
    let passo = parseInt(document.getElementById('passo').value)
    let res = document.getElementById('res')
    
    if (isNaN(numIni) || isNaN(numFim) || isNaN(passo)) {
        window.alert('Nenhum dos campos pode ser vazio.')
    } else if (numIni < numFim) {
        valFim = numIni
        lista = valFim + ` \u{1F449}`
        valFim += valFim + passo
        while (valFim <= numFim) {
            lista = lista + valFim + ` \u{1F449}`
            valFim = valFim + passo
        }
    } else if (numFim < numIni) {
            valFim = numFim
            lista = valFim + ` \u{1F449}`
            valFim = valFim - passo
            while (valFim >= numFim) {
                lista = lista + valFim + ` \u{1F449}`
                valFim = valFim - passo
            }
    } 
    lista = lista + ` \u{1F3C1}`
    
    res.innerHTML = `Contando: <br>${lista}`
    //res.innerHTML = lista
}

*/