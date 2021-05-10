const valor = "global"

function func() {
    console.log(valor)
}
func()

function exec(){
    const valor ="local"
    func()
}
exec()