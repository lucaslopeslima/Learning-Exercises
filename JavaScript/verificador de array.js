//ARREY Verify -
let array = [2,5,4,9,1,3,6,7,0]
    let verify = array
    console.log(`O Array é: ${verify}`)
    console.log(`O Array tem ${verify.length} elementos.`)
    for (let key = 0; key < verify.length; key++){
        console.log(`A posicão ${key} tem o valor ${verify[key]}`)
    }
    console.log(`O Array em ordem crescente é: ${verify.sort()}`)