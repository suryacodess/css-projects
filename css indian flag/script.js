const tl = gsap.timeline({paused:true});
const play = document.getElementById("playbtn");
const rewind = document.getElementById("rewindbtn");

play.addEventListener("click", () => {
  tl.play();
});

rewind.addEventListener("click", () => {
  tl.reverse();
});

//top
tl.from(".top-bar", { x: "-100%" });
tl.from(".right-bar", { top: -75 });
tl.from(".bottom-bar", { x: "100%" });
tl.from(".left-bar", { y: "150px" });
tl.from(".top-bg", { x: "-100%" });

// //middle
tl.from(".middle-top-bar", { x: "100%" });
tl.from(".middle-left-bar", { top: -75 });
tl.from(".middle-bottom-bar", { x: "-100%" });
tl.from(".middle-right-bar", { y: "150px" });
tl.from(".middle-bg", { x: "100%" });

//bottom
tl.from(".bottom-top-bar", { x: "-100%" });
tl.from(".bottom-right-bar", { top: -74 });
tl.from(".bottom-bottom-bar", { x: "100%" });
tl.from(".bottom-left-bar", { y: "150px" });
tl.from(".bottom-bg", { x: "-100%" });

// chakra
tl.from(".chakra-img img", {
  scale: 0,
  duration: 1.5,
});

gsap.from(".chakra-img img", {
  duration: 3,
  ease: "none",
  rotate: "-360deg",
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % 500), //force x value to be between 0 and 500 using modulus
  },
  repeat: -1,
});
