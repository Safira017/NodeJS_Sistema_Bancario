//camada de serviços
import notas from './../CamadaDados/notas.js'

function totalNotas() {
    let saldo_banco = notas.reduce((total, nota) => {
        return total + nota.quantidade
    },0)
    return saldo_banco;
}

function verificaSaque(saldo, saque) {
    if(saque <= saldo && saque > 0){
        return true;
    }
    else {
        return false;
    }   
}

function contarCelulas(saldo, saque, notas) {
    while (saque < saldo && saque > 0 ) {
        if(saque >= 200 && notas[7].quantidade > 0) {
            let contador = 0
            while (saque >= 200) {
                notas[7].quantidade -= 1
                saldo -= 200
                saque -= 200
                contador++  
            }
            console.log("Foram emitidas "+contador+" notas de 200 reais");
        }
        else if(saque >= 100 && notas[6].quantidade > 0) {
            let contador = 0
            while (saque >= 100) {
                notas[6].quantidade -= 1
                saldo -= 100
                saque -= 100
                contador++  
            }
            console.log("Foram emitidas "+contador+" notas de 100 reais");
        }
        else if(saque >= 50 && notas[5].quantidade > 0) {
            let contador = 0
            while (saque >= 50) {
                notas[5].quantidade -= 1
                saldo -= 50
                saque -= 50
                contador++  
            }
            console.log("Foram emitidas "+contador+" notas de 50 reais");
        }
        else if(saque >= 20 && notas[4].quantidade > 0) {
            let contador = 0
            while (saque >= 20) {
                notas[4].quantidade -= 1
                saldo -= 20
                saque -= 20
                contador++  
            }
            console.log("Foram emitidas "+contador+" notas de 20 reais");
        }
        else if(saque >= 10 && notas[3].quantidade > 0) {
            let contador = 0
            while (saque >= 10) {
                notas[3].quantidade -= 1
                saldo -= 10
                saque -= 10
                contador++  
            }
            console.log("Foram emitidas "+contador+" notas de 10 reais");
        }
        else if(saque >= 5 && notas[2].quantidade > 0) {
            let contador = 0
            while (saque >= 5) {
                notas[2].quantidade -= 1
                saldo -= 5
                saque -= 5
                contador++  
            }
            console.log("Foram emitidas "+contador+" notas de 5 reais");  
        }
        else if(saque >= 2 && notas[1].quantidade > 0) {
            let contador = 0
            while (saque >= 2) {
                notas[1].quantidade -= 1
                saldo -= 2
                saque -= 2
                contador++  
            }
            console.log("Foram emitidas "+contador+" notas de 2 reais");
        }
        else if(saque >= 1 && notas[0].quantidade > 0 ) {
            let contador = 0
            while (saque >= 1) {
                notas[0].quantidade -= 1
                saldo -= 1
                saque -= 1
                contador++  
            }
            console.log("Foram emitidas "+contador+" notas de 1 reais");
        }
    }   
}

export {totalNotas, verificaSaque, contarCelulas}