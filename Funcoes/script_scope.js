//function scope
let subject

//function basicamente cria um scope proprio para ela dependendo do caso, caso exista uma variável fora e ela seja jogada para dentro da function, ele vai funcionar como variável comum, caso seja simplesmente um parametro, tem um funcionamente de escopo diferente

function createThink(){
    subject = 'study'
    return subject
}

console.log(subject)
createThink()
console.log(subject)