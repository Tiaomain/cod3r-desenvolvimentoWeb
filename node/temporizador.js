const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 0', () => {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout( function () {
    tarefa1.cancel(),
    console.log('Cancelando Tarefa 1');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 5;
regra.second = 25;

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
});


setTimeout( function () {
    tarefa2.cancel(),
    console.log('Cancelando Tarefa 2', new Date().getSeconds());
}, 30000);