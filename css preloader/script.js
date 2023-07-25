const h1 = document.querySelector(".preloader h1");
h1.innerHTML = "1%";

var i = 0;
let s = setInterval(() => {
  i++;
  h1.innerHTML = i + "%";

  if (i > 99) {
    i = 99;
    document.querySelector(".preloader").classList.add("animation");
    clearInterval(s);
    return;
  }
}, 18);
