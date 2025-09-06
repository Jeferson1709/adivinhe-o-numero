/* Desafios

    Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

    Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

    Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

    Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

    Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
 */

    let diadaSemana = prompt('Digite que dia é hoje: ');
    
    console.log("Dia da semana escolhido: " + diadaSemana);
    

    
    if (diadaSemana === "Domingo" || diadaSemana === "Sádodo") {
        alert('Bom fim de semana !');
    }else{
        alert('Boa semana!');
    }

    let numero = prompt ('Digite um número: ');

    if (numero >= 0) {
        alert(`O número ${numero}  é positivo!`);
    }else{
        alert(`O número ${numero}  é positivo!`);
    }

    let pontuacao = prompt('Digite sua pontuação: ');

    console.log('Pontuação digitada: ' + pontuacao);
    if(pontuacao >= 100){
        alert('Parabéns, você venceu!');
    }else{
        alert('Tente novamente para ganhar.');
    }

    let saldo =  1000; 

    alert(`Seu saldo é:  ${saldo}.`);

    let nome =  prompt('Digite seu nome: ');
    alert('Seja bem-vindo '+ nome +"!")