function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    //lenght= se tiver 0 letras 
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] faltam dados!')
        res.innerHTML ='Impossivel contar'
     }  else{
   res.innerHTML = 'contando:'
   let i = Number(ini.value)//convertendo numero
   let f = Number(fim.value)//convertendo numero
   let p = Number(passo.value)//convertendo numero
   if(p <= 0) {
    window.alert('considerando passo 1')
    p = 1 
   }
   if ( i < f) {
        //contagem crescente
    for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
}

    } else {
        //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        
       
    }
    
res.innerHTML += `\u{1F3C1}`
  
     }
}
