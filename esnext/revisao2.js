//Arrow function
const soma = (a, b) => a + b
console.log(soma(300, 725))

//this sempre aponta para module.exports/exports dentro da Arrow Function
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//teste this em global
const lexico3 = () => console.log(this === global)
const lexico4 = lexico3.bind({})

lexico3()
lexico4()

//Parametro Default
function log(texto = 'Node') {
    console.log(texto)
}
/*foi estabelecido um padrão para o log em caso de valor vazio,
caso seja passado algum valor, será atribuido o novo valor
para o log*/
log()
// Se for descomentado o seguinte log, voltará o resultado undefined. log(undefined)

//Operador (Spread) Rest
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(5, 10, 15, 20))