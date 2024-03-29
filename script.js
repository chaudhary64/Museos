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
  })
    .to(".MainContent", {
      duration: 1.8,
      top: 0,
    })
    .to(["#jmb", "#wordSpaceReducing"], {
      duration: 1.8,
      top: 0,
      delay: -1,
    })
    .to("nav p", {
      top: 0,
      duration: 1,
      delay: -2.5,
      stagger: 0.4,
    });
}
LoaderRemover();

function imageGatherer() {
  let ip1 = document.querySelector("#ip1");
  let ip2 = document.querySelector("#ip2");
  let ip3 = document.querySelector("#ip3");
  let ip4 = document.querySelector("#ip4");

  gsap.to("#ip1", {
    objectPosition: "top",
    scale: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#ip1",
      scroll: "body",
      scrub: 5,
      start: "400px 30%",
      end: "500px 20%",
    },
  });

  gsap.to("#ip2", {
    objectPosition: "0% -20vh",
    scale: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#ip2",
      scroll: "body",
      scrub: 5,
      start: "400px 30%",
      end: "430px 20%",
    },
  });

  gsap.to("#ip3", {
    objectPosition: "0% -80vh",
    scale: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#ip3",
      scroll: "body",
      scrub: 5,
      start: "400px 30%",
      end: "430px 20%",
    },
  });

  gsap.to("#ip4", {
    objectPosition: "0% -100vh",
    scale: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#ip4",
      scroll: "body",
      scrub: 5,
      start: "400px 30%",
      end: "430px 20%",
    },
  });
}
imageGatherer();

function yearIncreser() {
  let yi = document.querySelector("#yearIncrease");
  let initialYear = 1000;
  let increaser = setInterval(() => {
    yi.textContent = initialYear;
    initialYear++;
    if (initialYear === 1899) {
      clearTimeout(increaser);
    }
  }, 0.0001);
}
yearIncreser();

let intro = document.querySelector(".Introduction");
let zeroPara = document.querySelector("#zeroPara");
let textMoveUp = document.querySelector("#textMoveUp");
