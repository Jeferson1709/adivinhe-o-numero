// alert('Hello World !');

alert('Boas vindas ao jogo do número secreto.');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);
//enquanto chute não for igualao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}` );
    // Se o chute for igual ao número secreto 
    if (chute == numeroSecreto) {
        break;
    } else {

        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);

        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'testativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto  ${numeroSecreto} com ${tentativas}  ${palavraTentativa}.`)
