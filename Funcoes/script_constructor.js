/*

    Function() constructor

    *expressão new
    * criar um novo objeto
    * this keyword
    
    Como se fosse um molde para criar diversos objetos
*/
//maiusculo na primeira letra é uma boa pratica
function Person(name){
    //this sempre refencia a variavel que esta convocando o constructor
    this.name = name
    this.walk = function () {
        return this.name  + " andando"
    }
}

const mayk = new Person("Mayk");
console.log(mayk.walk())