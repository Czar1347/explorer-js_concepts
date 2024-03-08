//function hoisting

sayMyName()

function sayMyName(){
    console.log('Mayk')
}

sayMyName()

//Assim não funciona pq ele considera que a function é uma variavel, ou seja, function expression(function anonymous) não funciona o hoisting
var sayMyName = function(){
    console.log('Mayk')
}