// A tag <wbr> é utilizada para informar ao navegador onde ele poderá quebrar uma URL, caso necessário. (sempre será uma POSSIBILIDADE, e não uma obrigatoriedade.)
// Onde devem ser utilizadas: 
// • Após barras duplas (//)
// • Antes de uma barra simples (/); um til (~); um ponto (.); uma vírgula (,); um hífen (-); uma underline(_); uma interrogação (?); um jogo da velha (#); 
// • Antes ou depois de um simbolo igual (=); ou ampersand (&).

//Para não ter que envelopar cada possibilidade de um link manualmente, é possível utilizar o seguindo código em JavaScript:

function formatUrl(url) {
    let doubleSlash = url.split('//') // Divide uma URL em um ARRAY, para diferenciar as barras duplas (//) das barras simples (/).
    let formatted = doubleSlash.map(str => //Formata a STRING am ambos os lados da barra dupla (//), separadamente.
        str.replace(/(?<after>:)/giu, '$1<wbr>') // Coloca uma possibilidade de quebra após dois pontos (:)
            .replace(/(?<before>[/~.,\-_?#%])/giu, '<wbr>$1') // Coloca uma possibilidade de quebra antes de uma barra simples (/); um til (~); um ponto (.); uma vírgula (,); um hífen (-); uma underline (_); uma interrogação (?); um jogo da velha (#); e um simbolo de porcentagem (%) 
            .replace(/(?<beforeAndAfter>[=&])/giu, '<wbr>$1<wbr>') // Before and after an equals sign or ampersand
        ).join('//<wbr>') // Reconnect the strings with word break opportunities after double slashes

return formatted
}