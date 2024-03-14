// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!";
let teste = phrase.split(" "); // argumento que eu quero separar, transforma em array
let phraseWithUnderscore = teste.join("_"); // argumento que eu quero juntar
console.log(teste);
console.log(phraseWithUnderscore.toLowerCase());
