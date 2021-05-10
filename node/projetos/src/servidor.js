const porta = 3032;
const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const bancoDB = require("./bancoDados");
//
app.use(bodyParser.urlencoded({extended:true}))
// 
app.get("/produtos", (req, res, next) => {
  res.send(bancoDB.getProdutos());
});
app.get("/produtos/:id", (req, res) => {
  res.send(bancoDB.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDB.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`servidor executando na porta ${porta}`);
});
