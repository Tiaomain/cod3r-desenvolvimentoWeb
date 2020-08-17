const escola = [{
    nome: 'Turma A1',
    alunos: [{
        nome: 'Bernardo',
        nota: 8.5
    },{
        nome:'Érika',
        nota: 9
    }]
},{
    nome: 'Turma A2',
    alunos: [{
        nome: 'Lindalva',
        nota: 8.7
    },{
        nome: 'Antonio Carlos',
        nota: 8
    }]
}]

const recebeAlunoNota = aluno => aluno.nota
const recebeTurmaNota = turma => turma.alunos.map(recebeAlunoNota)

const notas1 = escola.map(recebeTurmaNota)

console.log(notas1)