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
    onComplete: function() {
      // Refresh the ScrollTrigger after loader animation is completed
      ScrollTrigger.refresh();
    }
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

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");

gsap.to(".img1", {
  scale : 1,
  objectPosition: "0 0",
  scrollTrigger: {
    trigger: ".imgcont1",
    start: "10% 55%",
    end: "bottom 20%",
    scrub: true,
    // markers: true,
  },
});

gsap.to(".img2", {
  scale : 1,
  objectPosition: "0 -20vh",
  scrollTrigger: {
    trigger: ".imgcont2",
    start: "top 75%",
    end: "40% 70%",
    scrub: true,
    // markers: true,
  },
});

gsap.to(".img3", {
  scale : 1,
  objectPosition: "0 -100vh",
  scrollTrigger: {
    trigger: ".imgcont3",
    start: "top 95%",
    end: "30% 80%",
    scrub: true,
    // markers: true,
  },
});

gsap.to(".img4", {
  scale : 1,
  objectPosition: "0 -140vh",
  scrollTrigger: {
    trigger: ".imgcont4",
    start: "top 100%",
    end: "30% 90%",
    scrub: true,
    markers: true,
  },
});
