"use strict";

// function emekaAte(junk, food) {
//   console.log(junk, food);
//   const meal = `Emeka ate ${junk} junk and ${food} food today`;
//   return meal;
// }
// const foodJunk = emekaAte(3, 0);
// console.log(foodJunk);

// const calcAge = (birthyear) => 2022 - birthyear;
// const age3 = calcAge(1998);
// console.log(age3);

// const firstName = "julie";
// const gender = "female";
// if (`${firstName} === ${gender}`) {
//   console.log("julie is a girl");
// } else {
//   console.log("julie is a boy");
// }

// let greet = "hello";

// for (let i = 1; i <= 5; i++) {
//   console.log("greet");
// }

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //  if no number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";

    // if player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📉Too High";
      score--;
      document.querySelector(".score").textContent = score;

      //   when u lose the game
    } else {
      document.querySelector(".message").textContent = " 🗑 you lost the game";
      document.querySelector(".score").textContent = 1;
    }

    // if guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📈Too Low";
      score--;
      document.querySelector(".score").textContent = score;

      //   when you lose
    } else {
      document.querySelector(".message").textContent = " 🗑 you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = " Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
});
