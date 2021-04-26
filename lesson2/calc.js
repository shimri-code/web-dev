let sum = 0;

let screen = document.querySelector(".screen");
// screen.innerText = "This is my screen";

let btns = document.querySelectorAll(".btn-calc-num");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sum += +e.target.textContent;
    console.log(`total sum ${sum}`);

    screen.innerHTML += `<button class="btn-calc-num" id="num7">${e.target.textContent}</button>`;
  });
});
