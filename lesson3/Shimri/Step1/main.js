// const operations = ["+", "-", "*", "/"];

// let screen = document.querySelector(".screen"); //this is the screen of the calculator
// let calcPanel = document.querySelector(".calc-panel");

// const createChildElement = (type, classes, txt = "", elementParent) => {
//   let element = document.createElement(type);
//   element.classList.add(...classes);
//   element.innerText = `${txt}`;
//   elementParent.appendChild(element);
// };

// // Create buttons 
// for (let index = 0; index < 10; index++) {
//   createChildElement(
//     "button",
//     ["btn", "num", `num${index}`],
//     `${index}`,
//     calcPanel
//   );
// }

// operations.forEach((oper, index) => {
//   createChildElement(
//     "button",
//     ["btn", "oper", `oper${index}`],
//     `${oper}`,
//     calcPanel
//   );
// });

// createChildElement("button", ["btn", "dot"], `.`, calcPanel);
// createChildElement("button", ["btn", "cls"], `C`, calcPanel);
// createChildElement("button", ["btn", "result"], `=`, calcPanel);

// // Add Events 
// const btnNumbers = document.querySelectorAll(".num");
// const btnOper = document.querySelectorAll(".oper");
// let allBtns = [...btnOper, ...btnNumbers];

// allBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     screen.innerText += btn.innerText;
//   });
// });

// const btnClear = document.querySelector(".btn.cls");
// btnClear.addEventListener("click", () => {
//   screen.innerText = "";
// });

// const btnResult = document.querySelector(".btn.result");
// btnResult.addEventListener("click", () => {
//   screen.innerText = eval(screen.innerText);
// });

// //now we will add (dynamically) the buttons of the calculator to the document
// // for (let index = 0; index < 10; index++) {
// //   calcPanel.innerHTML += `<button class="btn-num${index}">${index}</button>`;
// // }

// // let num_btns_arr = new Array();
// // for (let index = 0; index < 10; index++) {
// //   //now we gonna fill the buttons array with numbers
// //   num_btns_arr[index] = document.querySelector(".btn-num".concat(index));
// // }

// // //now we gonna fill the rest of the buttons array(except from the equals button) with the rest of the buttons
// // num_btns_arr.push(
// //   document.getElementById("oper/"),
// //   document.getElementById("oper+"),
// //   document.getElementById("oper*")
// // );
// // num_btns_arr.push(
// //   document.getElementById("dot"),
// //   document.getElementById("oper-")
// // );

// // num_btns_arr.forEach((el) => {
// //   el.addEventListener("click", (e) => {
// //     //the goal of the next boolean expression is to keep the screen element in the same line
// //     if (
// //       screen.innerText.localeCompare("\n") == 0 ||
// //       screen.innerText.localeCompare("This is my screen") == 0
// //     )
// //       screen.innerText = el.innerText;
// //     else screen.innerText += el.innerText;
// //   });
// // });

// // //now we gonna add a button to clear the screen
// // let clear = document.querySelector(
// //   "#oper-clear"
// // ); /*instead of the text in screen we will add a new line to keep
// // everything in place and clear the screen */
// // clear.addEventListener("click", (e) => {
// //   screen.innerText = "\n";
// // });
