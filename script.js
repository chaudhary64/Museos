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
    height: 0,
    delay: 2,
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
  gsap.to("#ip1", {
    objectPosition: "top",
    scale: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#ImageContainer",
      scroll: "body",
      scrub: 5,
      start: `top 30%`,
      end: `bottom 20%`,
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
      start: `400px 30%`,
      end: `430px 20%`,
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
      start: `400px 30%`,
      end: `430px 20%`,
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
      start: `400px 30%`,
      end: `430px 20%`,
    },
  });

  gsap.to("#ip5", {
    objectPosition: "0% -130vh",
    scale: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#ip4",
      scroll: "body",
      scrub: 5,
      start: `400px 30%`,
      end: `430px 20%`,
    },
  });
}
imageGatherer();
