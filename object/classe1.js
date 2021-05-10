class lancamento{
    constructor(nome = "gênerico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}
class ciclofinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano  = ano
        this.lancamento = []

    }
    addlanc(...lancamento){
        lancamento.forEach(i  => this.lancamento.push(i))
    }
    sumario(){
        let valorconsolidado = 0
        this.lancamento.forEach(i =>{
            valorconsolidado += i.valor

        })
        return valorconsolidado
    }
}
const salario = new lancamento("Salario",45000)
const contadeluz = new lancamento("luz",-100)
const contas = new ciclofinanceiro(6,2018)
contas.addlanc(salario,contadeluz)
console.log(contas.sumario())