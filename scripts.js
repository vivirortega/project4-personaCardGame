let cardsGame = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 a 14"));
const cards = [
    './images/akechi.gif',
    './images/ann.gif',
    './images/futaba.gif',
    './images/joker.gif',
    './images/makoto.gif',
    './images/ryuji.gif',
    './images/yusuke.gif'
]
function random() {
    return Math.random() - 0.5;

}

//pergunta quantas cartas o jogador quer e valida se é um número par de 4 a 14
function allCards () {
    while (cardsGame % 2 !== 0 || cardsGame > 14 || cardsGame < 4) {
    cardsGame = prompt("Insira um número válido");
}}
allCards();

//função que retorna a quantidade de cartas que o jogador informou anteriormente
function gameStart() {
    let cardsInGame = [];
    for (let i = 0; i < cardsGame / 2; i++) {
      cardsInGame.push(cards[i]);
      cardsInGame.push(cards[i]);
    }
  
    cardsInGame.sort(random);
  
    const include = document.querySelector(".all-cards");
    for (let x = 0; x < cardsInGame.length; x++) {
      include.innerHTML =
        include.innerHTML +
        ` <article class="card" onclick="" data-identifier="card">
        <img src="./images/plogo.png" class="img-card front-face face" data-identifier="front-face" />
         <img src="${cardsInGame[x]}" class="img-card back-face face" data-identifier="back-face"/ >
     </article>`;
    }
  }
  gameStart();

  function clickCard() {
    
  }