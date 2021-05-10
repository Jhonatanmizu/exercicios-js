const fordabutt = ["king","Queen","prince","bod"]
fordabutt.forEach(function(nome, i){
    console.log(`${i + 1}°) ${nome}`)
})
fordabutt.forEach( name => {
    console.log(name)
})
const exibir = name => console.log(fordabutt)
fordabutt.forEach(exibir)
