const message = document.getElementById("message");

let main = [];
let j = -1;
const container = document.querySelector(".container");
let obj = new Object();

function formValidation() {
  j++;
  const validation = document.getElementsByClassName("validation");

  const fields = document.querySelectorAll("input");
  let text = ["First Name", "Last name", "Age", "Email"];
  for (i = 0; i < 4; i++) {
    let data = fields[i].value;
    let Text = text[i];
    obj[Text] = data;
    obj.key = j;
  }
  // console.log(obj);
  main.push(obj);
  // console.log(main);
  localStorage.setItem("Array", JSON.stringify(main));

  const mainDiv = document.createElement("DIV");
  mainDiv.className = "mainDiv";
  document.body.appendChild(mainDiv);
  mainDiv.classList.add(j);
  container.appendChild(mainDiv);
  // console.log(main);

  for (let key in obj) {
    let div1 = document.createElement("DIV");
    // div1.className="display";
    div1.innerHTML = key + ":" + obj[key];
    mainDiv.appendChild(div1);
  }

  var button = document.createElement("BUTTON");
  mainDiv.appendChild(button);
  button.className = "button";
  button.classList.add(j);
  button.value = "Delma";
  // button.setAttribute("onclick", "Del()");

  button.addEventListener("click", () => {
    let btn = +button.classList[1];

    if (mainDiv.classList[1] === button.classList[1]) {
      mainDiv.style.display = "none";
      main.splice(btn, 1);
      JSON.stringify(main);
      // console.log(main);
      localStorage.setItem("Array", JSON.stringify(main));
    }
  });
}
// var displayArray = JSON.parse(localStorage.getItem("Array"));
// console.log(displayArray[0]);
// const mainDiv = document.createElement("DIV");
// mainDiv.className = "mainDiv";
// document.body.appendChild(mainDiv);
// container.appendChild(mainDiv);
// console.log(displayArray.length);

// for (i = 0; i < displayArray.length; i++) {
//   let div1 = document.createElement("DIV");
//   // div1.className="display";
//   // div1.innerHTML =;
//   mainDiv.appendChild(div1);
// }
