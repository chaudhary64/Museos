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
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#ImageContainer",
      start: "top 0%",
      end: "bottom -200%",
      scrub: 1,
      pin: true,
    },
  });

  tl.to(
    "#upperAndLowerImg",
    {
      scale: 1,
      transform: "translate(0%,0%)",
    },
    "GatherTheImagesTogether"
  );
  tl.to(
    "#centerImg",
    {
      scale: 1,
      transform: "translate(0%,-50%)",
    },
    "GatherTheImagesTogether"
  );
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

  function coverIt(elem, cover) {
    // Mouseenetr Event
    elem.addEventListener("mouseenter", () => {
      gsap.to(cover, {
        width: "100%",
        duration: 0.3,
        ease: "power1.inOut",
      });
      elem.style.color = "black";
      elem.style.transition = "transform 0.3s";
      elem.style.transform = "TranslateX(2%)";
    });

    // Mouseleave Event
    elem.addEventListener("mouseleave", () => {
      gsap.to(cover, {
        width: "0%",
        duration: 0.3,
        ease: "power1.inOut",
      });
      elem.style.color = "white";
      elem.style.transform = "TranslateX(0%)";
    });
  }
  coverIt(strip1, cover1);
  coverIt(strip2, cover2);
  coverIt(strip3, cover3);
}
CoverTheStrip();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#PinnedSection",
    start: "top 0%",
    end: "bottom -400%",
    scrub: 5,
    pin: true,
  },
});

tl.to("#clipPath", {
  clipPath: "circle(13% at 53% 63%)",
  ease: "power1.inOut",
  force3D: true, // Enable hardware acceleration
})
  .to("#clipPath", {
    clipPath: "circle(13% at 28% 63%)",
    ease: "power1.inOut",
    force3D: true, // Enable hardware acceleration
  })
  .to("#clipPath", {
    clipPath: "circle(13% at 62% 65%)",
    ease: "power1.inOut",
    force3D: true, // Enable hardware acceleration
  })
  .to("#clipPath", {
    clipPath: "circle(9% at 47% 35%)",
    ease: "power1.inOut",
    force3D: true, // Enable hardware acceleration
  })
  .to("#clipPath", {
    clipPath: "circle(10% at 14% 58%)",
    ease: "power1.inOut",
    force3D: true, // Enable hardware acceleration
  })
  .to("#clipPath", {
    clipPath: "circle(100% at 50% 50%)",
    ease: "power1.inOut",
    force3D: true, // Enable hardware acceleration
  });
