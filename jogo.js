const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const numeroSecreto = Math.floor(Math.random() * 101) + 100 ;
let tentativas = 0;

console.log("Jogo de Adivinhação ");
console.log("Tente adivinhar o número entre 100 e 200");

const jogar = () => {
  rl.question("Qual o seu palpite? ", (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
      rl.close();
    } else if (palpite < numeroSecreto) {
      console.log("Muito baixo! Tente novamente.");
      jogar();
    } else {
      console.log("Muito alto! Tente novamente.");
      jogar();
    }
  });
};

jogar();
