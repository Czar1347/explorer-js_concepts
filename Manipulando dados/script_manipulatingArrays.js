// manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo 
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1,3)) // A função console.log(techs.slice(1,3)) retorna os elementos do Array "techs" a partir do índice 1 até o índice 2 (não incluindo o índice 3).
// remover 1 ou mais items em qualquer posição do array
techs.splice(1,2) //O método techs.splice(1,2) é utilizado para remover elementos de um array a partir de uma determinada posição. No exemplo dado, o método está removendo 2 elementos a partir da posição 1 do array techs. Portanto, após a execução desse método, serão removidos os elementos que estão nas posições 1 e 2 do array techs.
// encontrar a posicão de um elemento no array
let index = techs.indexOf('nodejs')
techs.splice(index, 1)

console.log(techs)