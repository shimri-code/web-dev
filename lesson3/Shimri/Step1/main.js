const operations = ["+", "-", "*", "/"];

let screen = document.querySelector(".screen"); //this is the screen of the calculator
let calcPanel = document.querySelector(".calc-panel");

const createChildElement = (type, classes, txt = "", elementParent) => {
  let element = document.createElement(type);
  element.classList.add(...classes);
  element.innerText = `${txt}`;
  elementParent.appendChild(element);
};

// Create buttons
for (let index = 0; index < 10; index++) {
  createChildElement(
    "button",
    ["btn", "num", `num${index}`],
    `${index}`,
    calcPanel
  );
}

operations.forEach((oper, index) => {
  createChildElement(
    "button",
    ["btn", "oper", `oper${index}`],
    `${oper}`,
    calcPanel
  );
});

createChildElement("button", ["btn", "dot"], `.`, calcPanel);
createChildElement("button", ["btn", "clear"], `C`, calcPanel);
createChildElement("button", ["btn", "result"], `=`, calcPanel);

// Add Events
const btnNumbers = document.querySelectorAll(".num");
const btnOper = document.querySelectorAll(".oper");
let allBtns = [...btnOper, ...btnNumbers];

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    screen.innerText += btn.innerText;
  });
});

const btnClear = document.querySelector(".btn.clear");
btnClear.addEventListener("click", () => {
  screen.innerText = "";
});

const btnResult = document.querySelector(".btn.result");
btnResult.addEventListener("click", () => {
  console.log("In Screen");
  screen.innerText = eval(screen.innerText);
});
