const fs = require('fs')
const caminho = __dirname + '/arquivo.json'
//  sincrono
const content = fs.readFileSync(caminho, 'utf-8')
console.log(content)

// assincrono
fs.readFile(caminho, 'utf-8',(erro, content)=>{
    const config = JSON.parse(content)
    console.log(`${config.db.host}: ${config.db.port}`)
})
// 
const data = require(`./arquivo.json`)
console.log(data.db)

fs.readdir(__dirname, (err, arquivos) =>{
    console.log("Conteúdo da pasta\n")
    console.log(arquivos)
})
