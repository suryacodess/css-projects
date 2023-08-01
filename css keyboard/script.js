const mainInner = document.querySelector(".main-inner");

const divnames = ["one", "two", "three", "four"];
for (var i = 0; i < 4; i++) {
  const one = document.createElement("div");
  one.classList.add(divnames[i]);
  mainInner.appendChild(one);
}

// one
const one = document.querySelector(".one");
const oneInnerDivData = [
  "~`",
  `1!`,
  "2@",
  "3#",
  "4$",
  "5%",
  "6^",
  "7&",
  "8*",
  "9(",
  "10)",
  "_-",
  "=+",
  "Backspace",
];
for (var i = 0; i < 14; i++) {
  const oneinnerdivs = document.createElement("div");
  oneinnerdivs.classList.add("one-inner-div");
  oneinnerdivs.classList.add("key");
  oneinnerdivs.innerText = oneInnerDivData[i];
  one.appendChild(oneinnerdivs);
}

// two
const two = document.querySelector(".two");
const twoInner = document.createElement("div");
twoInner.classList.add("two-inner");
two.appendChild(twoInner);
const twoOne = document.createElement("div");
twoOne.classList.add("two-one");
twoInner.appendChild(twoOne);
const twoTwo = document.createElement("div");
twoTwo.classList.add("two-two");
twoInner.appendChild(twoTwo);
const twoThree = document.createElement("div");
twoThree.classList.add("two-three");
two.appendChild(twoThree);

const twoInnerDivData = [
  "Tab",
  `Q`,
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{[",
  "]}",
];

// two-one
const two_one = document.querySelector(".two-one");
for (var i = 0; i < 13; i++) {
  const twoinnerdivs = document.createElement("div");
  twoinnerdivs.classList.add("two-inner-div");
  twoinnerdivs.classList.add("key");
  twoinnerdivs.innerText = twoInnerDivData[i];
  two_one.appendChild(twoinnerdivs);
}

// two-two
const two_two = document.querySelector(".two-two");
const threeInnerDivData = [
  "CapsLock",
  `A`,
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "k",
  "L",
  ";:",
  `" '`,
  "|",
];
for (var i = 0; i < 13; i++) {
  const threeinnerdivs = document.createElement("div");
  threeinnerdivs.classList.add("three-inner-div");
  threeinnerdivs.classList.add("key");
  threeinnerdivs.innerText = threeInnerDivData[i];
  two_two.appendChild(threeinnerdivs);
}

// two-three
const two_three = document.querySelector(".two-three");
two_three.classList.add("three-inner-div");
two_three.classList.add("key");
two_three.innerText = "Enter";

// three
const three = document.querySelector(".three");
const fourInnerDivData = [
  "Shift",
  `Z`,
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",<",
  ".>",
  "?/",
  `Shift`,
];
for (var i = 0; i < 12; i++) {
  const fourinnerdivs = document.createElement("div");
  fourinnerdivs.classList.add("four-inner-div");
  fourinnerdivs.classList.add("key");
  fourinnerdivs.innerText = fourInnerDivData[i];
  three.appendChild(fourinnerdivs);
}

// four
const four = document.querySelector(".four");
const fiveInnerDivData = ["Ctrl", "", "Alt", "Space", "Alt", `Fn`, "", "Ctrl"];
for (var i = 0; i < 8; i++) {
  const fiveinnerdivs = document.createElement("div");
  fiveinnerdivs.classList.add("five-inner-div");
  fiveinnerdivs.classList.add("key");
  if (i === 1) {
    fiveinnerdivs.innerHTML = "<i class='fa-brands fa-windows'></i>";
  }
  if (i === 3) {
    fiveinnerdivs.classList.add("space");
  }
  if (i === 6) {
    fiveinnerdivs.innerHTML = "<i class='fa-regular fa-lightbulb'></i>";
    fiveinnerdivs.classList.add("bulb");
  }
  if (i !== 1 && i !== 6) {
    fiveinnerdivs.innerText = fiveInnerDivData[i];
  }

  four.appendChild(fiveinnerdivs);
}

//////////////////////////////////////////////////////

const keys = document.querySelectorAll(".key");
const mode = document.querySelector(".bulb");

mode.addEventListener("click", () => {
  keys.forEach((key) => {
    key.classList.toggle("black");
  });
});
