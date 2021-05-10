const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 3', ()=>{
    console.log("Say it", new Date().getSeconds())
})

setTimeout(function(){ 
    tarefa1.cancel() 
    console.log("tarefa cancelada")
}, 20000)

// 
const regras = new schedule.RecurrenceRule()
regras.dayOfweek = [new schedule.Range(1,5)]
regras.hour = 22
regras.second = 30
const tarefa2 = schedule.scheduleJob(regras, function(){
    console.log("Executando tarefa2!", new Date().getSeconds())
})
 
