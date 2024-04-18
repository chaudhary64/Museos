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

function pinnedSectionAnimation() {
  let pb = document.querySelector("#progressBar");

  let descriptionData = {
    data1:
      "In the foreground, we see a woman with Caucasian features representing the homeland—a white, pure, radiant, and civilized homeland ascending triumphantly. Created in the image and likeness of a Europe that embodies everything the nation should admire and pursue for success.",
    data2:
      "She is seated on a rock, at a higher level than the rest of the symbolic elements. She has a fabric draped over her body with the stripes of the national flag printed on it, stained with the blood of the Charrúa people. A flag that represents the patrician project of a nation-state born from the Charrúa genocide.",
    data3:
      "In the background or second layer, we see the stereotyped figure of an indigenous person in a fallen posture, looking up at the resplendent homeland.",
    data4:
      "The woman is sitting on a jaguar skin, perhaps a rug that the indigenous person obediently placed for her to sit on. The jaguar skin represents the most dangerous and wild animal of these lands, which the indigenous person killed for and because of her.",
    data5:
      "The figure of the Montevideo Hill fortress symbolizes for us the planting of the Spanish flag over the Charrúa people who fiercely resisted the establishment of this fort, symbolizing the beginning of settler colonialism, territorial dispossession.",
    data6:
      "Finally, we see the presence of a steamship in the bay of Montevideo, the means of transportation by which immigrants arrived to colonize these lands.",
  };

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#PinnedSection",
      start: "top 0%",
      end: "bottom -400%",
      scrub: 3,
      pin: true,
      onUpdate: (self) => {
        pb.style.width = self.progress.toFixed(2) * 100 + "%"; // Gettin the progress value and converting it to percentage
      },
    },
  });

  // Firts Animation in timeline
  tl.to(
    "#clipPath",
    {
      clipPath: "circle(13% at 58% 25%)",
      ease: "power1.inOut",
      force3D: true, // Enable hardware acceleration
      onStart: function () {
        descriptionPositionSetter(1, 60, descriptionData.data1, 50, 25);
      },
    },
    "[ 1 ]"
  )
    .to(
      ["#heading", "#descriptionContainer"],
      {
        opacity: 1,
      },
      "[ 1 ]"
    )
    // Changing the text when the opacity is 0
    .to(["#heading", "#descriptionContainer"], {
      opacity: 0,
      onComplete: function () {
        changeTheHeading("[ 2 ]", "White woman");
      },
    })

    // Second Animation in timeline
    .to(
      "#clipPath",
      {
        clipPath: "circle(13% at 53% 63%)",
        ease: "power1.inOut",
        force3D: true, // Enable hardware acceleration
        onStart: function () {
          descriptionPositionSetter(1, 13, descriptionData.data2, 35, 33);
        },
        onReverseComplete: function () {
          changeTheHeading("[ 1 ]", "White woman");
          descriptionPositionSetter(1, 60, descriptionData.data1, 50, 25);
        },
      },
      "[ 2 ]"
    )
    .to(
      ["#heading", "#descriptionContainer"],
      {
        opacity: 1,
      },
      "[ 2 ]"
    )
    // Changing the text when the opacity is 0
    .to(["#heading", "#descriptionContainer"], {
      opacity: 0,
      onComplete: function () {
        changeTheHeading("[ 3 ]", "Charrua Indigenous");
      },
    })

    // Third Animation in timeline
    .to(
      "#clipPath",
      {
        clipPath: "circle(13% at 28% 63%)",
        ease: "power1.inOut",
        force3D: true, // Enable hardware acceleration
        onStart: function () {
          descriptionPositionSetter(1, 13, descriptionData.data3, 42, 15);
        },
        onReverseComplete: function () {
          changeTheHeading("[ 2 ]", "White woman");
          descriptionPositionSetter(1, 13, descriptionData.data2, 35, 33);
        },
      },
      "[ 3 ]"
    )
    .to(
      ["#heading", "#descriptionContainer"],
      {
        opacity: 1,
      },
      "[ 3 ]"
    )
    // Changing the text when the opacity is 0
    .to(["#heading", "#descriptionContainer"], {
      opacity: 0,
      onComplete: function () {
        changeTheHeading("[ 4 ]", "Jaguar");
      },
    })

    // Fourth Animation in timeline
    .to(
      "#clipPath",
      {
        clipPath: "circle(13% at 62% 65%)",
        ease: "power1.inOut",
        force3D: true, // Enable hardware acceleration
        onStart: function () {
          descriptionPositionSetter(1, 13, descriptionData.data4, 40, 28);
        },
        onReverseComplete: function () {
          changeTheHeading("[ 3 ]", "Charrua Indigenous");
          descriptionPositionSetter(1, 13, descriptionData.data3, 42, 15);
        },
      },
      "[ 4 ]"
    )
    .to(
      ["#heading", "#descriptionContainer"],
      {
        opacity: 1,
      },
      "[ 4 ]"
    )
    // Changing the text when the opacity is 0
    .to(["#heading", "#descriptionContainer"], {
      opacity: 0,
      onComplete: function () {
        changeTheHeading("[ 5 ]", "Montevideo Hill");
      },
    })

    // Fifth Animation in timeline
    .to(
      "#clipPath",
      {
        clipPath: "circle(9% at 47% 35%)",
        ease: "power1.inOut",
        force3D: true, // Enable hardware acceleration
        onStart: function () {
          descriptionPositionSetter(50, 60, descriptionData.data5, 47, 20);
        },
        onReverseComplete: function () {
          changeTheHeading("[ 4 ]", "Jaguar");
          descriptionPositionSetter(1, 13, descriptionData.data4, 40, 28);
        },
      },
      "[ 5 ]"
    )
    .to(
      ["#heading", "#descriptionContainer"],
      {
        opacity: 1,
        delay: 0.28,
      },
      "[ 5 ]"
    )
    // Changing the text when the opacity is 0
    .to(["#heading", "#descriptionContainer"], {
      opacity: 0,
      onComplete: function () {
        changeTheHeading("[ 6 ]", "Ship");
      },
    })

    // Sixth Animation in timeline
    .to(
      "#clipPath",
      {
        clipPath: "circle(10% at 14% 58%)",
        ease: "power1.inOut",
        force3D: true, // Enable hardware acceleration
        onStart: function () {
          descriptionPositionSetter(50, 20, descriptionData.data6, 47, 15);
        },
        onReverseComplete: function () {
          changeTheHeading("[ 5 ]", "Montevideo Hill");
          descriptionPositionSetter(50, 60, descriptionData.data5, 47, 20);
        },
      },
      "[ 6 ]"
    )
    .to(
      ["#heading", "#descriptionContainer"],
      {
        opacity: 1,
      },
      "[ 6 ]"
    )
    // Changing the text when the opacity is 0
    .to(["#heading", "#descriptionContainer"], {
      opacity: 0,
    })
    .to("#clipPath", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut",
      force3D: true, // Enable hardware acceleration
    });

  function changeTheHeading(number, heading) {
    let numberForPinnedSection = document.querySelector(
      "#numberForPinnedSection"
    );
    let headingForPinnedSection = document.querySelector(
      "#textForPinnedSection"
    );
    numberForPinnedSection.innerText = number;
    headingForPinnedSection.innerText = heading;
  }

  function descriptionPositionSetter(x, y, text, w, h) {
    let description = document.querySelector("#description");
    let descriptionContainer = document.querySelector("#descriptionContainer");
    description.style.left = x + "%";
    description.style.top = y + "%";
    description.style.height = h + "%";
    descriptionContainer.innerText = text;
    description.style.width = w + "%";
  }
}
pinnedSectionAnimation();
