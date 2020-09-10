// Variables for the navigation part of the website
const explainText = document.querySelector(".explainText");
const buttonsDiv = document.querySelector(".buttonText");
const contentDiv = document.querySelector(".content");
const upperDiv = document.querySelector(".startGame");
const round1 = document.querySelector(".round1");
const round2 = document.querySelector(".round2");
const round3 = document.querySelector(".round3");
const round4 = document.querySelector(".round4");
const playerContent = document.getElementsByClassName("playerDIV");
let lastPlayerContentCount = 0;
let nextPlayerContentCount = 1;
let nav = document.querySelector(".buttons");
// button variables
let buttonRed;
let buttonRedText;
let buttonBlack;
let buttonBlackText;

// variable for Calculating player
let playerCount;
let player = {};
let activePlayerCount = 1;
let lastPlayerCount = 0;
// let activePlayer;

// Variables for showing a card
let showCardHtml;
let tagIMG;

// variables for Create a Deck
let deck;
const suiteDeck = ["hearts", "diamonds", "clubs", "spades"];
const valueDeck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let lastCard;
let randomItem;
let placeDeck;

document.getElementById("start").addEventListener("click", theGameBegins);

function theGameBegins() {
  // deze functie verziet van alle functies die gebruikt worden om het spel aan te maken
  // spelers, de kaarten, het deck en de knoppen

  playerCount = document.getElementById("countPlayers").value;

  if (playerCount > 20) {
    alert("dont use players above the 20 players.");
    playerCount = 0;
  } else if (playerCount == 0 || playerCount < 0) {
    alert("You can't play with no players.");
  } else {
    for (let i = 1; i <= playerCount; i++) {
      createPlayer(i);
      createContentPlayer(i);
    }
    createContentNavigatie();
    upperDiv.style.display = "none";
    createDeck();
  }

  document.getElementById("btnRed").addEventListener("click", gameRound1);
  document.getElementById("btnBlack").addEventListener("click", gameRound1);
  document.getElementById("btnHigher").addEventListener("click", gameRound2);
  document.getElementById("btnLower").addEventListener("click", gameRound2);
  document.getElementById("btnInside").addEventListener("click", gameRound3);
  document.getElementById("btnOutside").addEventListener("click", gameRound3);
}

function card(suiteDeck, valueDeck) {
  this.suiteDeck = suiteDeck;
  this.valueDeck = valueDeck;
}

function createDeck() {
  deck = [];
  deck.length = 0;
  // Create 52 cards using for each loop
  suiteDeck.forEach((suite) => {
    valueDeck.forEach((value) => {
      //push each card object into deck array
      deck.push(new card(suite, value));
    });
  });
}

function createPlayer(countplayers) {
  // Maakt players aan op bazis van de input de gebruiker geeft
  // Iedere player krijgt een array Cards en een ID
  // In de array van Cards komen alle kaarten die de speler verzameld
  // ID wordt gebruikt voor een player ID
  for (let i = 1; i <= countplayers; i++) {
    player[countplayers] = { cards: [], id: countplayers };
    // console.log(player[countplayers].id);
  }
}

function createContentPlayer(countPlayers) {
  // Maakt player elementen aan en maak een div voor iedere speler met een class en ID
  // De player elementen worden in de div content geplaatst
  playerDIV = document.createElement("div");
  playerDIV.classList.add("playerDIV");
  playerDIV.setAttribute("id", player[countPlayers].id);

  alignDiv = document.createElement("div");
  alignDiv.classList.add("alignDiv");
  alignDiv.setAttribute("id", "align" + player[countPlayers].id);

  if (player[countPlayers].id === 1) {
    playerDIV.classList.add("active");
  }
  playerDIV.appendChild(alignDiv);
  contentDiv.appendChild(playerDIV);
}
function createContentNavigatie() {
  ///De spelhandleiding van de game

  //Titel
  let explainTextTitel = document.createElement("h2");
  let explainTextTitelText = document.createTextNode("Hoe speel je bussen?");
  explainTextTitel.appendChild(explainTextTitelText);
  explainTextTitel.classList.add("titles");
  explainText.appendChild(explainTextTitel);

  // Text
  let explainTextGuide = document.createElement("p");
  let explainTextGuideText = document.createTextNode(
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
  );
  explainTextGuide.appendChild(explainTextGuideText);
  explainTextGuide.classList.add("text");
  explainText.appendChild(explainTextGuide);

  // // Buttons
  let buttonTitle = document.createElement("h2");
  let buttonTitleText = document.createTextNode("Buttons");
  buttonTitle.classList.add("titles");
  buttonTitle.appendChild(buttonTitleText);
  buttonsDiv.appendChild(buttonTitle);

  buttonRed = document.createElement("BUTTON");
  buttonRedText = document.createTextNode("Rood");
  buttonRed.appendChild(buttonRedText);
  buttonRed.classList.add("allButton");
  buttonRed.setAttribute("id", "btnRed");
  round1.appendChild(buttonRed);

  buttonBlack = document.createElement("BUTTON");
  buttonBlackText = document.createTextNode("Zwart");
  buttonBlack.appendChild(buttonBlackText);
  buttonBlack.classList.add("allButton");
  buttonBlack.setAttribute("id", "btnBlack");
  round1.appendChild(buttonBlack);

  let buttonHigher = document.createElement("BUTTON");
  let buttonHigherText = document.createTextNode("Hoger");
  buttonHigher.appendChild(buttonHigherText);
  buttonHigher.classList.add("allButton");
  buttonHigher.setAttribute("id", "btnHigher");
  round2.appendChild(buttonHigher);

  let buttonLower = document.createElement("BUTTON");
  let buttonLowerText = document.createTextNode("Lager");
  buttonLower.appendChild(buttonLowerText);
  buttonLower.classList.add("allButton");
  buttonLower.setAttribute("id", "btnLower");
  round2.appendChild(buttonLower);

  let buttonOutside = document.createElement("BUTTON");
  let buttonOutSideText = document.createTextNode("Er binnen");
  buttonOutside.appendChild(buttonOutSideText);
  buttonOutside.classList.add("allButton");
  buttonOutside.setAttribute("id", "btnInside");
  round3.appendChild(buttonOutside);

  let buttonBetween = document.createElement("BUTTON");
  let buttonBetweenText = document.createTextNode("Er buiten ");
  buttonBetween.appendChild(buttonBetweenText);
  buttonBetween.classList.add("allButton");
  buttonBetween.setAttribute("id", "btnOutside");
  round3.appendChild(buttonBetween);

  let buttonHearts = document.createElement("BUTTON");
  let buttonHeartsText = document.createTextNode("Harten");
  buttonHearts.appendChild(buttonHeartsText);
  buttonHearts.classList.add("allButton");
  buttonHearts.setAttribute("id", "btnHearts");
  round4.appendChild(buttonHearts);

  let buttonDiamonds = document.createElement("BUTTON");
  let buttonDiamondsText = document.createTextNode("Ruiten");
  buttonDiamonds.appendChild(buttonDiamondsText);
  buttonDiamonds.classList.add("allButtonFive");
  buttonDiamonds.setAttribute("id", "btnDiamonds");
  round4.appendChild(buttonDiamonds);

  let buttonSpades = document.createElement("BUTTON");
  let buttonSpadesText = document.createTextNode("Schoppen");
  buttonSpades.appendChild(buttonSpadesText);
  buttonSpades.classList.add("allButtonFive");
  buttonSpades.setAttribute("id", "btnSpades");
  round4.appendChild(buttonSpades);

  let buttonClubs = document.createElement("BUTTON");
  let buttonClubsText = document.createTextNode("Klaveren");
  buttonClubs.appendChild(buttonClubsText);
  buttonClubs.classList.add("allButtonFive");
  buttonClubs.setAttribute("id", "btnClubs");
  round4.appendChild(buttonClubs);

  let buttonRainbow = document.createElement("BUTTON");
  let buttonRainbowText = document.createTextNode("Rainbow");
  buttonRainbow.appendChild(buttonRainbowText);
  buttonRainbow.classList.add("allButtonFive");
  buttonRainbow.setAttribute("id", "btnRainbow");
  round4.appendChild(buttonRainbow);
}

//Game Round 1: Alle functies om de eerste ronden goed door te komen

function gameRound1() {
  if (this.id == "btnRed") {
    if (activePlayerCount < playerCount) {
      showingCard();
      checkRed();
      deleteCard();
      nextPlayer();
    } else if (activePlayerCount == playerCount) {
      showingCard();
      checkRed();
      deleteCard();
      nextPlayerRound();
      round1.style.display = "none";
      round2.style.display = "block";
    }
  }

  if (this.id == "btnBlack") {
    if (activePlayerCount < playerCount) {
      showingCard();
      checkBlack();
      deleteCard();
      nextPlayer();
    } else if (activePlayerCount == playerCount) {
      showingCard();
      checkBlack();
      deleteCard();
      nextPlayerRound();
      round1.style.display = "none";
      round2.style.display = "block";
    }
  }
}

function gameRound2() {
  if (this.id == "btnHigher") {
    if (activePlayerCount < playerCount) {
      showingCard();
      checkHigher();
      deleteCard();
      nextPlayer();
    } else if (activePlayerCount == playerCount) {
      showingCard();
      checkHigher();
      deleteCard();
      nextPlayerRound();
      round2.style.display = "none";
      round3.style.display = "block";
    }
  }

  if (this.id == "btnLower") {
    if (activePlayerCount < playerCount) {
      showingCard();
      checkLower();
      deleteCard();
      nextPlayer();
    } else if (activePlayerCount == playerCount) {
      showingCard();
      checkLower();
      deleteCard();
      nextPlayerRound();
      round2.style.display = "none";
      round3.style.display = "block";
    }
  }
}

function gameRound3() {
  if (this.id == "btnInside") {
    if (activePlayerCount < playerCount) {
      showingCard();

      deleteCard();
      nextPlayer();
    } else if (activePlayerCount == playerCount) {
      showingCard();

      deleteCard();
      nextPlayerRound();
      round3.style.display = "none";
      round4.style.display = "block";
    }
  }

  if (this.id == "btnOutside") {
    if (activePlayerCount < playerCount) {
      showingCard();

      deleteCard();
      nextPlayer();
    } else if (activePlayerCount == playerCount) {
      showingCard();

      deleteCard();
      nextPlayerRound();
      round3.style.display = "none";
      round4.style.display = "block";
    }
  }
}

function checkRed() {
  if (
    //heart
    lastCard.suiteDeck === suiteDeck[0] ||
    //diamond
    lastCard.suiteDeck === suiteDeck[1]
  ) {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#a3ffa9";
  } else {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#ff7373";
  }
}

function checkBlack() {
  if (
    //heart
    lastCard.suiteDeck === suiteDeck[2] ||
    //diamond
    lastCard.suiteDeck === suiteDeck[3]
  ) {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#a3ffa9";
  } else {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#ff7373";
  }
}

function checkHigher() {
  if (lastCard.valueDeck > player[activePlayerCount].cards[0].valueDeck) {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#a3ffa9";
  } else if (
    lastCard.valueDeck == player[activePlayerCount].cards[0].valueDeck
  ) {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#ff7373";
  } else {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#ff7373";
  }
}

function checkLower() {
  if (lastCard.valueDeck < player[activePlayerCount].cards[0].valueDeck) {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#a3ffa9";
  } else if (
    lastCard.valueDeck == player[activePlayerCount].cards[0].valueDeck
  ) {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#ff7373";
  } else {
    document.getElementById(activePlayerCount).style.backgroundColor =
      "#ff7373";
  }
}

function checkInside() {}

function showingCard() {
  randomItem = deck[Math.floor(Math.random() * deck.length)];
  tagIMG = document.createElement("img");
  tagIMG.src = "img/" + randomItem.suiteDeck + randomItem.valueDeck + ".png";
  showCardHtml = document.getElementById("align" + activePlayerCount);
  showCardHtml.appendChild(tagIMG);
  lastCard = randomItem;
  player[activePlayerCount].cards.push(lastCard);
}

function deleteCard() {
  placeDeck = deck.indexOf(lastCard);
  deck.splice(placeDeck, 1);
}

function nextPlayer() {
  lastPlayerCount = activePlayerCount;
  activePlayerCount = activePlayerCount + 1;

  if (player[lastPlayerCount].id === lastPlayerCount) {
    playerContent[lastPlayerContentCount].classList.remove("active");
  }

  if (player[activePlayerCount].id == activePlayerCount) {
    playerContent[nextPlayerContentCount].classList.add("active");
  }
  lastPlayerContentCount++;
  nextPlayerContentCount++;
}

function nextPlayerRound() {
  nextPlayerContentCount = 0;

  if (player[activePlayerCount].id == activePlayerCount) {
    playerContent[lastPlayerContentCount].classList.remove("active");
    lastPlayerContentCount = 0;
  }
  if (player[activePlayerCount].id == activePlayerCount) {
    playerContent[nextPlayerContentCount].classList.add("active");
    activePlayerCount = 1;
    nextPlayerContentCount++;
  }
}
