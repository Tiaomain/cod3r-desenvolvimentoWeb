// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto

const funcionario = { nome: 'Bernardo', salario: 123456.78}
const clone = { ativo: true, ...funcionario}

console.log(clone)

// usar spread como array
const grupoA = ['Erika', 'Nathan', 'Sebastião']
const grupoFinal = ['Lindalva', ...grupoA,'Angra']
console.log(grupoFinal)