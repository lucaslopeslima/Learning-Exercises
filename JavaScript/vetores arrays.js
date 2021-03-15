/*//percurso em vetores
let valores = [2,5,4,9,1,3,6,7,0]
    console.log(valores)
    for (let posicao = 0; posicao < valores.length; posicao++){
        console.log(`A posicão ${posicao} tem o valor ${valores[posicao]}`)
    }*/

//Simplificado
let valores = [2,5,4,9,1,3,6,7,0]
console.log(valores)
for (let posicao in valores){
    console.log(`A posicão ${posicao} tem o valor ${valores[posicao]}`)
}