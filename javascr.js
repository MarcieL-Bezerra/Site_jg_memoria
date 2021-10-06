const cardBoard = document.querySelector("#cardboard");
const planetas = []

var todosplanetas = ["sol.png", "Jupiter.png", "Mercurio.png","Venus.png","Terra.png","Marte.png",
                    "Lua.png","Neturno.png","Plutao.png","Saturno.png","Urano.png","Terra.png"];
for (var i = 0; i < 6; i++) {
    var sorteio = Math.floor(Math.random() * (todosplanetas.length-1));
    var adicionar = planetas.unshift(todosplanetas[sorteio]);
    var removedItem = todosplanetas.splice(sorteio, 1);
}


var vidas = 4;
var acertos = 0;
let cardHTML = "";
var audio2 = new Audio('img/Era.mp3');

planetas.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
  <img class="front-face" src="img/${img}"/>
  <img class="back-face" src="img/ceu2.png">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim da Renderização HTML */

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");
  iniciandosom()

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}
function iniciandosom(){
  audio2.muted = false;
  audio2.play();
  audio2.loop =true;
}


function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  
  if (!isMatch) {
    vidas--;
    document.getElementById("pontando").innerText=vidas + " Vidas";
    if(vidas === 0){
      audio2.pause();
      var audio = new Audio('img/over.mp3');
      audio.play();
      let espera = setTimeout(function() {
        audio.remove();
        reiniciando();
        audio.scrollTop();
        }, 5000)
      
    }
  }


 

  !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 400);
}

(function shuffle(){
  cards.forEach(card => {
    let rand = Math.floor(Math.random() * 12);
    card.style.order = rand;
  });
})();
function reiniciando(){
  window.location.reload();
};
function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    acertos++;
    if (acertos == 6){
      audio2.pause();
      var vitoria = new Audio('img/fim.mp3')
      vitoria.play();
      let esperando = setTimeout(function() {
        vitoria.remove()
        window.location.href = 'fase2.html'
        vitoria.scrollTop()
        }, 5000)
      
    }
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));
