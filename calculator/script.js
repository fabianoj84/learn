class Calculator {
  constructor() {
    this.upperValue = document.querySelector("#upper-number")
    this.resultValue = document.querySelector("#result-number")
    this.reset = 0
  }
  btnPress() {
    console.log("apertou")
  }
}

// Start Obj

let calc = new Calculator()

// Start btns
let buttons = document.querySelectorAll(".btn")

//map all buttons
for (let i = 0; buttons.length > i; i++) {
  buttons[i].addEventListener("click", calc.btnPress)
}
