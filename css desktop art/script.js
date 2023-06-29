//music symbols animations
gsap.fromTo(
  "#one",
  { opacity: 0, scale: 0 },
  {
    scale: 1.5,
    opacity: 1,
    x: 20,
    y: -100,
    duration: 2,
    ease: "power1",
    repeat: -1,
  }
);
gsap.fromTo(
  "#two",
  { opacity: 0, scale: 0 },
  {
    scale: 1.6,
    opacity: 1,
    x: 40,
    y: -100,
    duration: 2,
    ease: "power1",
    repeat: -1,
  }
);
gsap.fromTo(
  "#three",
  { opacity: 0, scale: 0 },
  {
    scale: 1.5,
    opacity: 1,
    x: -60,
    y: -100,
    duration: 2,
    ease: "power1",
    repeat: -1,
  }
);
gsap.fromTo(
    "#four",
    { opacity: 0, scale: 0 },
    {
      scale: 1.5,
      opacity: 1,
      x: -100,
      y: -40,
      duration: 2,
      ease: "power1",
      repeat: -1,
    }
  );

// rocket animation
gsap.fromTo(
  ".rocket p",
  { x: -250 },
  { x: 250, duration: 3, ease: "power", repeat: -1, ease: "power", opacity: 1 }
);
