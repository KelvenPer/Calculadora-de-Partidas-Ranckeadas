//# Calculadora de partidas Rankeadas
//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções


// Objetivo:


//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
function ranckedMatch(win, loss) {
    //depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
    let partidas = win - loss;

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

    let level;   // declarando variavel para o nivel do jogador 

    if (partidas < 10) {
        level = "Ferro";
    } else if (partidas >= 10 && partidas <= 20) {
        level = "Bronze";
    } else if (partidas >= 21 && partidas <= 50) {
        level = "Prata";
    } else if (partidas >= 51 && partidas <= 80) {
        level = "Ouro";
    } else if (partidas >= 81 && partidas <= 90) {
        level = "Diamante";
    } else if (partidas >= 91 && partidas <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    //## Saída
    return {
        partidas: partidas,
        level: level
    };
}

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
let resultado = ranckedMatch(60, 59);
console.log(`O Herói tem saldo de ${resultado.partidas} está no nível de ${resultado.level}`);

