const tl = gsap.timeline({ paused: true });

const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", () => {
  tl.play();
});

tl.to("#close-btn", { duration: 1, rotate: 90 });
