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
    onComplete: function () {
      // Refresh the ScrollTrigger after loader animation is completed
      ScrollTrigger.refresh();
    },
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

function ImageGatherer() {
  let img1 = document.querySelector(".img1");
  let img2 = document.querySelector(".img2");
  let img3 = document.querySelector(".img3");
  let img4 = document.querySelector(".img4");

  gsap.to(".img1", {
    scale: 1,
    objectPosition: "0 0",
    scrollTrigger: {
      trigger: ".imgcont1",
      start: "10% 55%",
      end: "bottom 20%",
      scrub: true,
    },
  });

  gsap.to(".img2", {
    scale: 1,
    objectPosition: "0 -20vh",
    scrollTrigger: {
      trigger: ".imgcont2",
      start: "top 75%",
      end: "40% 70%",
      scrub: true,
    },
  });

  gsap.to(".img3", {
    scale: 1,
    objectPosition: "0 -100vh",
    scrollTrigger: {
      trigger: ".imgcont3",
      start: "top 95%",
      end: "30% 80%",
      scrub: true,
    },
  });

  gsap.to(".img4", {
    scale: 1,
    objectPosition: "0 -140vh",
    scrollTrigger: {
      trigger: ".imgcont4",
      start: "top 100%",
      end: "30% 90%",
      scrub: true,
    },
  });
}
ImageGatherer();

function YearIncreser() {
  let YearContainer = document.querySelector("#YearContainer");

  let sid0 = document.querySelector(".stripId0");
  let sid1 = document.querySelector(".stripId1");
  let sid2 = document.querySelector(".stripId2");
  let sid3 = document.querySelector(".stripId3");

  function moveTheStrip(stripID, distance, a, b) {
    gsap.to(stripID, {
      y: `-${distance}%`,
      duration: a,
      delay: b,
      ease: "power1.inOut",
    });
  }

  gsap.to(YearContainer, {
    scrollTrigger: {
      trigger: YearContainer,
      start: "top 90%",
      end: "10% 10%",
      scrub: true,
    },
    onStart: function () {
      moveTheStrip(sid3, 800, 2.5, 0);
      moveTheStrip(sid2, 900, 2.5, 0.5);
      moveTheStrip(sid1, 800, 2.5, 1);
      moveTheStrip(sid0, 100, 1.8, 1.8);
    },
  });
}
YearIncreser();

function CoverTheStrip() {
  let strip1 = document.querySelector(".strip1");
  let strip2 = document.querySelector(".strip2");
  let strip3 = document.querySelector(".strip3");

  let cover1 = document.querySelector(".cover1");
  let cover2 = document.querySelector(".cover2");
  let cover3 = document.querySelector(".cover3");

  function coverIt(elem , cover) {
    // Mouseenetr Event
    elem.addEventListener("mouseenter", () => {
      gsap.to(cover, {
        width: "100%",
        duration: 0.3,
        ease: "power1.inOut",
      });
      elem.style.color = "black";
      elem.style.transform = "TranslateX(2%)"
    });

    // Mouseleave Event
    elem.addEventListener("mouseleave", () => {
      gsap.to(cover, {
        width: "0%",
        duration: 0.3,
        ease: "power1.inOut",
      });
      elem.style.color = "white";
      elem.style.transform = "TranslateX(0%)"
    });
  }
  coverIt(strip1,cover1);
  coverIt(strip2,cover2);
  coverIt(strip3,cover3);
}
CoverTheStrip();
