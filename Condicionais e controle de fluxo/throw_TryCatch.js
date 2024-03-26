 // throw

function sayMyName(name = ''){
    if(name === ''){
        // throw new Error('Nome é necessario')
        throw 'Nome é obrigatorio'
    }
    console.log(name)
}

 //try...catch

 try{
    sayMyName('césar')
 } catch(e){
    console.log(e)
 }
 console.log('após o try/catch')