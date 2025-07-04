let box = document.querySelectorAll(".box")
let turnO = true
let winpattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      turnO = false
      box.textContent = "O"
    }
    else {
      turnO = true
      box.textContent = "X"
    }
    box.disabled = true
    winchecker()
  })
})

const winchecker = () => {
  for (let pattern of winpattern) {
    if (box[pattern[0]].innerText != "" && box[pattern[1]].innerText != "" && box[pattern[2]].innerText != "") {
      if (box[pattern[0]].innerText == "O" && box[pattern[1]].innerText == "O" && box[pattern[2]].innerText == "O") {
        show_winner("PLAYER-O WINS!")
        return
      }
      else if (box[pattern[0]].innerText == "X" && box[pattern[1]].innerText == "X" && box[pattern[2]].innerText == "X") {
        show_winner("PLAYER-X WINS!")
        return
      }
    }
  }
  const checkdraw=[...box].every(box=>box.textContent!="");
  if (checkdraw){
    show_winner("OOPS! ITS A DRAW 🤝")
  }
}

document.querySelector(".reset").addEventListener("click", () => {
  box.forEach((b) => {
    b.textContent = "";
    b.disabled = false;
  });
  document.querySelector(".winlayout").classList.add("hide");
  document.querySelector(".reset").textContent="RESET GAME"
  turnO = true;
});

const show_winner = (msg) => {
  document.querySelector(".reset").textContent="NEW GAME"
  document.querySelector(".winlayout").classList.remove("hide")
  document.querySelector(".msg").textContent = msg

}