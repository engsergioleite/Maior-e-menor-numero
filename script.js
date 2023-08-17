
function maior(){
var n1 = Number(document.getElementById('n1').value)
var n2 = Number(document.getElementById('n2').value)
var n3 = Number(document.getElementById('n3').value)
var res = document.getElementById('res')
var resm = document.getElementById('resmenor')

//if para ver o maior
if (n1 > n2 && n1 > n3){ //outra opção é fazer uma variável "maior" e ja mandar imprimir um valor nela e testar. Conforme for testando, ela vai recebendo os maiores valores.
    res.innerHTML = `O maior número é o: ${n1}`
} else if (n2 > n1 && n2 > n3) {
    res.innerHTML = `O maior número é o: ${n2}`
} else if (n3 > n1 && n3 > n2) {
    res.innerHTML = `O maior número é o: ${n3}`
    }

    //if para o menor de outro jeito

    var menor = Number(n1)
if (n2 < n1) {
    menor = n2;
} else if (n3 < n2) {
    var menor = n3;
}
resm.innerHTML = `O menor número é o: ${menor}`
}

    