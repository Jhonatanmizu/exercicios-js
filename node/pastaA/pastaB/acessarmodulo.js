const A = require('/home/jhonatanjesus/Projetos-web/javascript/node/moduloA.js')
console.log(A.ola)
const http = require('http')
http.createServer((req, res)=>{
        res.write("Bom dia")
        res.end()
}).listen(8080)