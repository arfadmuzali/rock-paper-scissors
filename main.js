/*
hand = paper
fist = rock
scissors = scisors
*/
let opponent = document.getElementById("opponent");
let array = ["hand", "fist", "scissors"];

function handleClick(value) {
  let random = Math.floor(Math.random() * array.length);
  let result = document.getElementById("result");
  opponent.src = `./component/${array[random]}.png`;
  switch (value + array[random]) {
    case "handfist":
    case "fistscissors":
    case "scissorshand":
      result.textContent = "YOU WIN!";
      break;
    case "fistfist":
    case "handhand":
    case "scissorsscissors":
      result.textContent = "DRAW";
      break;
    case "handscissors":
    case "fisthand":
    case "scissorsfist":
      result.textContent = "YOU LOSE!";
      break;
  }
  //   console.log(value + array[random]);
  //   setInterval(() => {
  //     location.reload();
  //   }, 2000);
}
