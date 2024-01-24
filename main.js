

/* PROXIMO PASSO É CRIAR OS CONTADORES E ADICIONAR VALORES EM CADA VARIAVEL E LISTAR OS PONTOS
   DEPOIS DISSO COLOCAR O SOMATORIO MELHOR DE 3 E GERAR O VENCEDOR (VC GANHOU DINAMICO) (VC PERDEU DINAMICO)
*/


const result = document.querySelector('.result');

const humanScore = document.getElementById('human-score') 
const machineScore = document.getElementById('machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissons'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine);

    if (human === machine) {
        result.innerHTML = "Deu empate!";
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissons') ||
        (human === 'scissons' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!";
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para a maquina';
    }
}

