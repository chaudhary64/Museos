function coundown() {
  let counter = 0;
  let counterElem = document.getElementById("counter");

  let timer = setInterval(() => {
    if (counter === 100) {
      clearInterval(timer);
    }
    counterElem.textContent = counter;
    counter++;
  }, 20);
}
coundown();

function LoaderRemover() {
  let MainContent = document.querySelector(".MainContent");
  let loader = document.querySelector(".Loader");
  let tl = gsap.timeline();

  tl.to(".Loader", {
    duration: 1,
    y: "-100%",
    delay: 2,
    onEnd: function () {
      setTimeout(() => (loader.style.display = "none"), 1000);
      MainContent.style.display = "inline-block";
    },
  }).to(".MainContent", {
    duration: 2,
    y: "-100%",
  });
}
LoaderRemover();