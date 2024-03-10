//callback function
//Uma callback function (ou função de retorno de chamada) em JavaScript é uma função que é passada como argumento para outra função e executada após a conclusão de uma determinada operação assíncrona ou evento. A função de retorno de chamada é "chamada de volta" quando o evento ou a operação assíncrona é concluída.
function sayMyName(name) {
  console.log("antes de executar a funcao callback");

  name();

  console.log("depois de executar a callback");
}

sayMyName(() => {
  console.log("estou em uma callback");
});
