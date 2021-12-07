//camada de inicialização
import saque_usuario from 'readline-sync'
import repetir_saque from 'readline-sync'

import {totalNotas, verificaSaque, contarCedulas} from './CamadaServicos/funcoes.js'
import notas from './CamadaDados/notas.js'
console.log("")
console.log("================= BEM VINDO(A) AO BANCO SAFIREX ! =====================")
console.log("")
let saldo = totalNotas();
let repetir = '';
do{
    console.log("")
    console.log("O banco tem o saldo de: " + saldo + " reais")
    console.log("")

    let saque = parseInt(saque_usuario.question("----> Quanto deseja sacar?(Apenas números): "))

    let saqueValido = verificaSaque(saldo, saque);

    //tudo que está dentro do if é true e dentro do else false
    //por isso não precisa colocar saqueValido == true (redundancia)
    if(saqueValido){
        contarCedulas(saldo, saque, notas)
    }
    else {
        console.log("")
        console.log("Você utilizou um comando INCORRETO, ou sacou mais do que devia.")
        break
    }
    saldo -= saque
    if(saldo == 0) {
        console.log("")
        console.log("Você sacou todo o seu saldo e está indisponível para realizar outro saque!")
        break;
    }
    else{
        console.log("")
        repetir = repetir_saque.question("Deseja continuar sacando? [S/N]: ");      
    }

}while( repetir == 'S' || repetir == 's' && saldo > 0)
console.log("")
console.log("Obrigada por utilizar nosso banco")

