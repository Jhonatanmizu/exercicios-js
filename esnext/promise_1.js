let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['nope', 'hi', 'Ol'])
})

p.then(valor => valor[0])
.then(primeiro => primeiro[0])
.then(letra =>  letra.toUpperCase())
.then(letraM => console.log(letraM))