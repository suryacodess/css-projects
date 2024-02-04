const h1 = document.querySelector("#one");
const h2 = document.querySelector("#two");
const h3 = document.querySelector("#three");
const h4 = document.querySelector("#four");
const h5 = document.querySelector("#five");

const h6 = document.querySelector("#six");
const h7 = document.querySelector("#seven");
const h8 = document.querySelector("#eight");
const h9 = document.querySelector("#nine");
const h10 = document.querySelector("#ten");
const h11 = document.querySelector("#eleven");
const h12 = document.querySelector("#tweleve");

const alpha = [
  "A",
  "B",
  " C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  " M",
  "N",
  " O",
  "P",
  " Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let eight = 0;
let nine = 0;
let ten = 0;
let eleven = 0;
let tweleve = 0;

setTimeout(() => {
  let timer = setInterval(() => {
    h1.innerText = alpha[one];
    one++;
    if (one == alpha.length) {
      one = 0;
      h1.innerText = alpha[one];
      h1.style.color = "red";
      clearInterval(timer);
      timer2();
    }
  }, 50);
}, 1000);

function timer2() {
  let timer2 = setInterval(() => {
    h2.innerText = alpha[two];
    two++;
    if (two === alpha.length) {
      two = 0;
      h2.innerText = "F";
      clearInterval(timer2);
      timer3();
    }
  }, 50);
}

function timer3() {
  let timer3 = setInterval(() => {
    h3.innerText = alpha[three];
    three++;
    if (three === alpha.length) {
      three = 0;
      h3.innerText = "R";
      clearInterval(timer3);
      timer4();
    }
  }, 50);
}

function timer4() {
  let timer4 = setInterval(() => {
    h4.innerText = alpha[four];
    four++;
    if (four === alpha.length) {
      four = 0;
      h4.innerText = "O";
      clearInterval(timer4);
      timer5();
    }
  }, 50);
}

function timer5() {
  let timer5 = setInterval(() => {
    five++;
    h5.innerText = alpha[five];
    if (five === alpha.length) {
      five = 0;
      h5.innerText = "N";
      clearInterval(timer5);
      timer6();
    }
  }, 50);
}

function timer6() {
  let timer6 = setInterval(() => {
    h6.innerText = alpha[six];
    six++;
    if (six === alpha.length) {
      six = 0;
      h6.innerText = "T";
      clearInterval(timer6);
      timer7();
    }
  }, 50);
}

function timer7() {
  let timer7 = setInterval(() => {
    h7.innerText = alpha[seven];
    seven++;
    if (seven === alpha.length) {
      seven = 0;
      h7.innerText = "E";
      clearInterval(timer7);
      timer8();
    }
  }, 50);
}

function timer8() {
  let timer8 = setInterval(() => {
    h8.innerText = alpha[eight];
    eight++;
    if (eight === alpha.length) {
      eight = 0;
      h8.innerText = "N";
      clearInterval(timer8);
      timer9();
    }
  }, 50);
}

function timer9() {
  let nine = 0;
  let timer9 = setInterval(() => {
    h9.innerText = alpha[nine];
    nine++;

    if (nine === 26) {
      nine = 0;
      h9.innerText = "D";
      clearInterval(timer9);
      timer10();
    }
  }, 50);
}

function timer10() {
  let timer10 = setInterval(() => {
    h10.innerText = alpha[ten];
    ten++;
    if (ten === 26) {
      ten = 0;
      h10.innerText = "D";
      clearInterval(timer10);
      timer11();
    }
  }, 50);
}

function timer11() {
  let timer11 = setInterval(() => {
    h11.innerText = alpha[eleven];
    eleven++;
    if (eleven === 26) {
      eleven = 0;
      h11.innerText = "E";
      clearInterval(timer11);
      timer12();
    }
  }, 50);
}

function timer12() {
  let timer12 = setInterval(() => {
    h12.innerText = alpha[tweleve];
    tweleve++;
    if (tweleve === 26) {
      tweleve = 0;
      h12.innerText = "V";
      clearInterval(timer12);
    }
  }, 50);
}
