//uso do while:
//No nosso sistema, o usuário será solicitado para inserir vários números, um após o outro
//Quando ele digitar o número '0', devemos parar de solicitar novos inputs 
//e imprimir no console a soma de todos os números por ele indicados
function somaNum() {
    let valor = 100
    let soma = 0
    while (valor !== 0) {
        valor = Number(prompt('digite um numero: \n'))
        soma += valor
    
    }
    return soma;
}
console.log(somaNum())

//o uso do for
//Escreva uma função que receba um array com números e devolva qual o maior dentro dele
//Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O maior número é 18"
let numero = [140, 150, 80, 544, 225, 389]
function maiorNumero(numero) {
    let maior= 0
   for (let i = 0; i <= numero.length; i++) {
    if(numero[i] > maior) {
        maior = numero[i]
    }
   }
   return maior
} 
console.log(numero)
console.log(maiorNumero(numero))

//uso do for.. of
//Considere que você tem um array com várias palavras. Nossa tarefa é criar uma função 
//para imprimi-las em uma só mensagem colocando um espaço entre elas.
//Ex: Para este array ["Oi", "sumido", "tudo", "bem?", "Saudades"], 
//dar a mensagem "Oi sumido tudo bem? Saudades"
let palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
function devolverMensagem(palavras) {
for (const palavra of palavras) {
    return palavra
}
}

console.log(devolverMensagem(palavras))

let paissAr = ['brasil', 'argentina', 'russia', 'linchtein']
let contadorAr = 1
for (let pais of paissAr) {
    console.log(contadorAr++ + '- ' + pais); //Brasil
    switch (pais) {
        case 'brasil':
         console.log(contadorAr++ + '- ' + pais + '/BR')
         break;
            case 'argentina':
           console.log(contadorAr++ + '- ' + pais + '/AR')
             break; 
              case 'russia':
               console.log(contadorAr++ + '- ' + pais + '/UR')
                 break; 
                  case 'lichtein':
                  console.log(contadorAr++ + '- ' + pais + '/LI')
                    break; 
        default:
            console.log('pais não encontradado')
            break;
    }
}