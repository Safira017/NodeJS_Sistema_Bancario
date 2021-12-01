//camada de inicialização
import saque_usuario from 'readline-sync'
import repetir_saque from 'readline-sync'

import {totalNotas, verificaSaque, contarCelulas} from './CamadaServicos/funcoes.js'
import notas from './CamadaDados/notas.js'

console.log("Bem vindo ao banco!")
let saldo = totalNotas();
let repetir = '';
do{
    console.log("O banco tem o saldo de: " + saldo + " reais")

    let saque = parseInt(saque_usuario.question("Quanto deseja sacar?"))

    let saqueValido = verificaSaque(saldo, saque);

    if(saqueValido){
        contarCelulas(saldo, saque, notas)
    }
    else {
        console.log("Não é possível sacar mais do que tem disponível ou não é possível sacar 0 reais!")
        break
    }
    saldo -= saque
    if(saldo == 0) {
        console.log("Você sacou todo o seu saldo e está indisponível para realizar outro saque!")
        break;
    }
    else{
        repetir = repetir_saque.question("Deseja continuar sacando?");
    }

}while( repetir == 'S' || repetir == 's' && saldo > 0)

