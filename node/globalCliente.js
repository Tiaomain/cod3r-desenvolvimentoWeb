require('./global')

console.log(myApp.saudacao())

myApp.nome = 'Problema!'

console.log(myApp.nome)
console.log(Object.isFrozen(myApp))