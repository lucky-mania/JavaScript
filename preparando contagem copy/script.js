function contar(){
    var ini = window.document.querySelector("#txti")
    var fim = window.document.querySelector("#txtf")
    var passo = window.document.querySelector("#txtp")
    var res = window.document.querySelector("#res")
    //lenght= se tiver 0 letras 
    if(ini.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0 ){
        window.alert("error, Falatm dados")
    }else{
        res.innerHTML='contando'
        let i = Number(ini.value)//convertendo numero
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        for(let c=i; c<= f; c+=p){
            res.innerHTML += `${c}`
        }
    }
}