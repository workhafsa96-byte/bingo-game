// app.js

let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (!userGuess || userGuess < 1 || userGuess > 10) {
    message.innerHTML = "⚠ Please enter a number between 1 and 10";
    message.style.color = "#ffd60a";
    return;
  }

  if (userGuess === randomNumber) {
    message.innerHTML = "🎉 Bingo! Correct Answer!";
    message.style.color = "#00ff88";

    randomNumber = Math.floor(Math.random() * 10) + 1;
  } 
  else if (userGuess < randomNumber) {
    message.innerHTML = "📉 Too Low! Try Again";
    message.style.color = "#ff9f1c";
  } 
  else {
    message.innerHTML = "📈 Too High! Try Again";
    message.style.color = "#ff4d6d";
  }

  document.getElementById("guessInput").value = "";
}
