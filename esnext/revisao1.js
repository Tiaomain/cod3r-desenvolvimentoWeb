// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é 
caro!`)

// Destructuring
const [l, e, s, ...mas] = "Tectiao"
console.log(l, e, s, mas);

const [x, , z] = [8, 9, 10]
console.log(x, z)

const {idade, nome} = { nome: 'Bernardo', idade: 7}
console.log(idade, nome)