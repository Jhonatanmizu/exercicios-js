Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ["Horse","Julio","King","Luck"]
aprovados.forEach2(function(name,idade){
    console.log(`${idade + 1} ${name}`)
})
