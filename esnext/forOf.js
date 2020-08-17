for (let letra of "Cod3r") {
    console.log(letra)
}

/*exemplo de for...in que percorre através
de índices e for...of nos valores*/

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
    console.log(i)
}

for(let assunto of assuntosEcma) {
    console.log(assunto)
}

//formas de obter chave e valor

const assuntosMap = new Map([
    ['Map', {abordado : true}],
    ['Set', {abordado : true}],
    ['Promise', {abordado : false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra);
    
}