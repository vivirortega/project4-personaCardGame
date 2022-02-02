//pergunta quantas cartas o jogador quer e valida se é um número par de 4 a 14

let cards = prompt("Quantas cartas você deseja? (números pares de 4 a 14)");
while (cards % 2 !== 0 && cards == 14); {
    cards = prompt("Insira um número válido");
}