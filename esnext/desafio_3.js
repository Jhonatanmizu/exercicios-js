const fs = require('fs')
const path = require('path')


function readFile(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(__, content){
            resolve(content.toString())



        })
        console.log("Depois de ler")
    })
}
const caminho = path.join(__dirname, 'dados.txt')
readFile(caminho)
.then(content => content.split('\n'))
.then(linhas => linhas.join(','))
.then(console.log)
