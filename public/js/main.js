window.addEventListener("load", () => {
  const stars = document.querySelector(".Stars");
  const cloud = document.querySelector(".Cloud");
  const cloudTwo = document.querySelector(".CloudTwo");
  const text = document.querySelector(".showText");
  const text2 = document.querySelector(".showText2");
  const img1 = document.querySelector(".topicOneImg");
  const img2 = document.querySelector(".topicTwoImg");
  const img3 = document.querySelector(".topicThreeImg");
  const topicOneData = document.querySelector(".topicOneData");
  const topicOneTitle = document.querySelector(".topicOneTitle");
  const topicTwoTitle = document.querySelector(".topicTwoTitle");
  const topicTwoData = document.querySelector(".topicTwoData");
  const topicThreeDataUp = document.querySelector(".topicThreeDataUp");
  const topicThreeTitle = document.querySelector(".topicThreeTitle");
  const topicThreeData = document.querySelector(".topicThreeData");
  const topicFourDataup = document.querySelector(".topicFourDataup");
  const topicFourTitle = document.querySelector(".topicFourTitle");
  const topicFourData = document.querySelector(".topicFourData");
  const topicFourSubTitle = document.querySelector(".topicFourSubTitle");
  const SkipButton = document.querySelector(".SkipButton");
  const welcome = document.querySelector(".welocme");
  const takeOffBtn = document.querySelector(".takeOff");
  const mainContainer = document.getElementById("mainContainer");
  const yesTitle = document.querySelector(".yesTitle");
  const rocket = document.querySelector(".rocket");
  const takeOffText = document.querySelector(".takeOffText");

  const timeouts = [];

  // Function to run animation sequence
  function runSequence() {
    timeouts.push(
      setTimeout(() => {
        stars.style.opacity = "1";
        stars.style.transition = "opacity 2000ms linear";
      }, 1)
    );

    timeouts.push(
      setTimeout(() => {
        cloudTwo.style.transition = "opacity 3000ms linear";
        cloudTwo.style.opacity = "1";
      }, 1000)
    );
    timeouts.push(
      setTimeout(() => {
        cloud.style.transition = "opacity 3000ms linear";
        cloud.style.opacity = "1";
      }, 1000)
    );
    timeouts.push(
      setTimeout(() => {
        SkipButton.style.transition = "opacity 3000ms linear";
        SkipButton.style.opacity = "1";
      }, 1000)
    );

    timeouts.push(
      setTimeout(() => {
        text.style.transition = "opacity 1000ms linear";
        text.style.opacity = "1";
      }, 4000)
    );

    timeouts.push(
      setTimeout(() => {
        text2.style.transition = "opacity 1000ms linear";
        text2.style.opacity = "1";
      }, 5000)
    );

    timeouts.push(
      setTimeout(() => {
        text.style.opacity = "0";
      }, 7000)
    );

    timeouts.push(
      setTimeout(() => {
        text2.style.opacity = "0";
      }, 7000)
    );

    // Topic One
    timeouts.push(
      setTimeout(() => {
        img1.style.transition = "width 3000ms linear, opacity 3000ms linear";
        img1.style.opacity = "1";
        img1.style.width = "40%";
      }, 8000)
    );

    timeouts.push(
      setTimeout(() => {
        topicOneData.style.transition = "opacity 900ms linear";
        topicOneData.style.opacity = "1";
      }, 10000)
    );

    timeouts.push(
      setTimeout(() => {
        topicOneTitle.style.transition = "opacity 900ms linear";
        topicOneTitle.style.opacity = "1";
      }, 10700)
    );

    timeouts.push(
      setTimeout(() => {
        img1.style.opacity = "0";
        img1.style.transition = "opacity 900ms linear";
      }, 13000)
    );

    timeouts.push(
      setTimeout(() => {
        topicOneData.style.opacity = "0";
      }, 13000)
    );

    timeouts.push(
      setTimeout(() => {
        topicOneTitle.style.opacity = "0";
      }, 13000)
    );

    // Topic Two
    timeouts.push(
      setTimeout(() => {
        img2.style.transition = "width 3000ms linear, opacity 3000ms linear";
        img2.style.opacity = "1";
        img2.style.width = "40%";
      }, 14000)
    );

    timeouts.push(
      setTimeout(() => {
        topicTwoTitle.style.transition = "opacity 900ms linear";
        topicTwoTitle.style.opacity = "1";
      }, 16000)
    );

    timeouts.push(
      setTimeout(() => {
        topicTwoData.style.transition = "opacity 900ms linear";
        topicTwoData.style.opacity = "1";
      }, 16700)
    );

    timeouts.push(
      setTimeout(() => {
        img2.style.opacity = "0";
        img2.style.transition = "opacity 900ms linear";
      }, 19000)
    );

    timeouts.push(
      setTimeout(() => {
        topicTwoTitle.style.opacity = "0";
      }, 19000)
    );

    timeouts.push(
      setTimeout(() => {
        topicTwoData.style.opacity = "0";
      }, 19000)
    );

    // Topic Three
    timeouts.push(
      setTimeout(() => {
        img3.style.transition = "width 3000ms linear, opacity 3000ms linear";
        img3.style.opacity = "1";
        img3.style.width = "40%";
      }, 20000)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeDataUp.style.transition = "opacity 900ms linear";
        topicThreeDataUp.style.opacity = "1";
      }, 22000)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeTitle.style.transition = "opacity 900ms linear";
        topicThreeTitle.style.opacity = "1";
      }, 22700)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeData.style.transition = "opacity 900ms linear";
        topicThreeData.style.opacity = "1";
      }, 23400)
    );

    timeouts.push(
      setTimeout(() => {
        img3.style.opacity = "0";
        img3.style.transition = "opacity 900ms linear";
      }, 25700)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeDataUp.style.opacity = "0";
      }, 25700)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeTitle.style.opacity = "0";
      }, 25700)
    );

    timeouts.push(
      setTimeout(() => {
        topicThreeData.style.opacity = "0";
      }, 25700)
    );

    // Topic Four
    timeouts.push(
      setTimeout(() => {
        topicFourDataup.style.transition = "opacity 900ms linear";
        topicFourDataup.style.opacity = "1";
      }, 26700)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourTitle.style.transition =
          "opacity 900ms linear, font-size 900ms linear";
        topicFourTitle.style.opacity = "1";
        topicFourTitle.style.fontSize = "45px";
      }, 27400)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourData.style.transition = "opacity 900ms linear";
        topicFourData.style.opacity = "1";
      }, 28300)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourSubTitle.style.transition = "opacity 900ms linear";
        topicFourSubTitle.style.opacity = "1";
      }, 29000)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourDataup.style.opacity = "0";
      }, 31400)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourTitle.style.opacity = "0";
      }, 31400)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourData.style.opacity = "0";
      }, 31400)
    );

    timeouts.push(
      setTimeout(() => {
        topicFourSubTitle.style.opacity = "0";
      }, 31400)
    );

    timeouts.push(
      setTimeout(() => {
        cloudTwo.style.transition = "visibility 1000ms linear";
        cloudTwo.style.visibility = "visible";
      }, 30200)
    );
    timeouts.push(
      setTimeout(() => {
        cloud.style.transition = "visibility 1000ms linear";
        cloud.style.visibility = "hidden";
        cloud.style.width = "0";
      }, 30000)
    );

    // Hide Skip Button and show welcome
    timeouts.push(
      setTimeout(() => {
        SkipButton.style.transition = "opacity 1s linear";
        SkipButton.style.opacity = "0";
        setTimeout(() => {
          SkipButton.style.display = "none";
          SkipButton.style.transition = "display 1s linear";
        }, 1000);
      }, 31000)
    );

    timeouts.push(
      setTimeout(() => {
        welcome.style.visibility = "visible";
        welcome.style.opacity = "0";
        welcome.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
          welcome.style.opacity = "1";

          // Hide the yesTitle initially
          const yesTitle = document.querySelector(".yesTitle");
          if (yesTitle) {
            yesTitle.style.visibility = "hidden";
            yesTitle.style.opacity = "0";
            yesTitle.style.transition = "opacity 1s ease-in-out";

            // Show the yesTitle with a 1s delay after welcome appears
            setTimeout(() => {
              yesTitle.style.visibility = "visible";
              yesTitle.style.opacity = "1";
            }, 1000);
          }
        }, 50);
      }, 32200)
    );

    // Default yesTitle fade out at 35000ms (only if skip not clicked)
    timeouts.push(
      setTimeout(() => {
        yesTitle.style.transition = "opacity 1s linear";
        yesTitle.style.opacity = "0";
        setTimeout(() => {}, 1000);
      }, 35000)
    );
    timeouts.push(
      setTimeout(() => {
        rocket.classList.add("rocketShow");
        setTimeout(() => {}, 1000);
      }, 35000)
    );
    timeouts.push(
      setTimeout(() => {
        takeOffBtn.classList.add("expand");
      }, 37200)
    );
    timeouts.push(
      setTimeout(() => {
        takeOffText.classList.add("show");
      }, 38200)
    );
  }

  runSequence();
  SkipButton.addEventListener("click", () => {
    timeouts.forEach(clearTimeout);

    const elementsToFade = [
      text,
      text2,
      img1,
      img2,
      img3,
      topicOneData,
      topicOneTitle,
      topicTwoTitle,
      topicTwoData,
      topicThreeDataUp,
      topicThreeTitle,
      topicThreeData,
      SkipButton,
    ];

    elementsToFade.forEach((el) => {
      el.style.transition = "opacity 2s linear";
      el.style.opacity = "0";
    });

    // Hide all elements after fading out
    setTimeout(() => {
      elementsToFade.forEach((el) => {
        el.style.display = "none";
      });

      welcome.style.visibility = "visible";
    }, 100);

    // Cloud visibility transitions
    cloudTwo.style.opacity = "0";
    cloudTwo.style.visibility = "visible";
    cloudTwo.style.transition = "opacity 1s linear, visibility 3s linear";
    setTimeout(() => {
      cloudTwo.style.opacity = "1";
    }, 100); // trigger opacity after visibility set

    cloud.style.opacity = "1";
    cloud.style.transition = "opacity 1s linear, visibility 3s linear";
    setTimeout(() => {
      cloud.style.opacity = "0";
      cloud.style.visibility = "hidden";
    }, 100); // fade out and then hide

    // Continue with rest of the transitions
    setTimeout(() => {
      yesTitle.style.transition = "opacity 1s linear";
      yesTitle.style.opacity = "0";
    }, 1800);

    setTimeout(() => {
      rocket.classList.add("rocketShow");
    }, 1800);

    setTimeout(() => {
      takeOffBtn.classList.add("expand");
    }, 4000);

    setTimeout(() => {
      takeOffText.classList.add("show");
    }, 5000);

    welcome.style.visibility = "visible";
    welcome.style.opacity = "0";
    welcome.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      welcome.style.opacity = "1";

      // Hide the yesTitle initially
      const yesTitle = document.querySelector(".yesTitle");
      if (yesTitle) {
        yesTitle.style.visibility = "hidden";
        yesTitle.style.opacity = "0";
        yesTitle.style.transition = "opacity 1s ease-in-out";

        // Show the yesTitle with a 1s delay after welcome appears
        setTimeout(() => {
          yesTitle.style.visibility = "visible";
          yesTitle.style.opacity = "1";
        }, 1000);
      }
    }, 50);
  });

  // Load animations
  const blueExplosion = lottie.loadAnimation({
    container: document.getElementById("blueExplosion"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../json/Blue-explosion.json",
  });

  const yellow = lottie.loadAnimation({
    container: document.getElementById("yellow-explosion"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../json/yellow-explosion.json",
  });

  const our_mission = lottie.loadAnimation({
    container: document.getElementById("our_mission"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/our-mission.json", // path to the animation json
  });
  const ourDedication = lottie.loadAnimation({
    container: document.getElementById("our-dedication"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/our-dedication.json", // path to the animation json
  });
  const radio = lottie.loadAnimation({
    container: document.getElementById("radio"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/radio-tower.json", // path to the animation json
  });

  const ourVision = lottie.loadAnimation({
    container: document.getElementById("our-vision"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/our-vision.json", // path to the animation json
  });

  const pinkExplosion = lottie.loadAnimation({
    container: document.getElementById("pinkExplosion"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../json/pink-explosion.json",
  });

  // Function to play the animation three times
  function playThrice(animation) {
    return new Promise((resolve) => {
      let playCount = 0;

      const playNext = () => {
        if (playCount < 3) {
          animation.play();
          playCount++;

          animation.onComplete = playNext; // Play again when it completes
        } else {
          resolve(); // Resolve the promise after 3 plays
        }
      };

      playNext(); // Start the first play
    });
  }

  // Function to start the animations
  function startAnimations() {
    // Start the animations after "welocme" becomes block
    const welcomeElement = document.querySelector(".welocme");

    // If "welocme" is initially display:block, trigger animations immediately
    if (
      welcomeElement &&
      window.getComputedStyle(welcomeElement).display === "block"
    ) {
      Promise.all([
        playThrice(blueExplosion),
        playThrice(yellow),
        playThrice(pinkExplosion),
      ]).then(() => {
        blueExplosion.style.visibility = "hidden";
        yellow.style.visibility = "hidden";
        pinkExplosion.style.visibility = "hidden";
      });
    }

    // Observe changes to the display property of .welocme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          welcomeElement.style.display === "block"
        ) {
          // Trigger animations to run three times when .welcome becomes block
          Promise.all([
            playThrice(blueExplosion),
            playThrice(yellow),
            playThrice(pinkExplosion),
          ]).then(() => {
            // Hide them after animation
            blueExplosion.style.visibility = "hidden";
            yellow.style.visibility = "hidden";
            pinkExplosion.style.visibility = "hidden";
          });
        }
      });
    });

    // Set observer for the 'style' attribute change
    observer.observe(welcomeElement, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }

  // Call the function to start the animations
  startAnimations();

  // Rocket Animation Setup
  const rocketAnimationInstance = lottie.loadAnimation({
    container: document.getElementById("rocketAnimation"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../json/rocket-iwth-hearts.json",
  });

  const starsForQuestions = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const starsForQuestionsTwo = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-two"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const starsForQuestionsThree = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-Three"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const starsForQuestionsFour = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-Four"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  
  const rocketWithBoosterOnly = lottie.loadAnimation({
    container: document.getElementById("rocketWithBoosterOnly"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/rocket-with-booster-only.json", // path to the animation json
  });
  const starsForQuestionsFive = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-five"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const starsForQuestionsSix = lottie.loadAnimation({
    container: document.getElementById("stars-for-questions-six"),
    renderer: "svg",
    loop: true, // run only once
    autoplay: true, // play automatically
    path: "../json/stars-for-questions.json", // path to the animation json
  });
  const countDown = lottie.loadAnimation({
    container: document.getElementById("count-down"),
    renderer: "svg",
    loop: false,
    autoplay: false, // Set autoplay to false, so it won't play automatically
    path: "../json/count-down.json",
  });


  const starScreen = lottie.loadAnimation({
    container: document.getElementById("star-screen"),
    renderer: "svg",
    loop: false, // run only once
    autoplay: true, // play automatically
    path: "../json/star-screen.json", // path to the animation json
  });
  const cloudsOpt = lottie.loadAnimation({
    container: document.getElementById("clouds_opt"),
    renderer: "svg",
    loop: true, // run continuously
    autoplay: true, // play automatically
    path: "../json/clouds_opt.json", // path to the animation json
  });

  // Update Take Off button functionality to hide itself when clicked

  takeOffBtn.addEventListener("click", () => {
    // Hide the "Take Off" button
    takeOffBtn.style.display = "none";

    // Hide the "Tab to Take off" text when countdown starts
    const takeOffText = document.querySelector(".takeOffText");
    if (takeOffText) {
      takeOffText.style.visibility = "hidden"; // Hide the text by making it invisible
      takeOffText.style.opacity = "0"; // Alternatively, hide it by making it transparent
    }

    // 1. Show and Start Countdown Animation
    const countDownContainer = document.getElementById("count-down");
    countDownContainer.style.display = "block"; // Show countdown

    // Play countdown animation
    countDown.play();

    // Listen for the animation complete event
    countDown.addEventListener("complete", function () {
      // Ensure countdown has finished, then hide countdown and trigger the next step
      countDownContainer.style.display = "none"; // Hide countdown after it completes

      // 2. Add a small delay to ensure the countdown has fully disappeared before taking off actions
      setTimeout(() => {
        // Proceed with "Take Off" logic
        const children = mainContainer.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (
            !child.classList.contains("Stars") &&
            child.id !== "rocketAnimation" &&
            !child.classList.contains("welocme")
          ) {
            child.style.display = "none";
          }
        }

        const takeOffContainer = document.querySelector(".TakeOffContainer");
        if (takeOffContainer) {
          takeOffContainer.style.display = "none";
        }
        const mainTopicContainer = document.querySelector(".mainTopicContainer");
        
        if (mainTopicContainer) {
          mainTopicContainer.style.display = "none";
        }

        const rocketContainer = document.getElementById("rocketAnimation");
        rocketContainer.style.display = "block";
        rocketContainer.style.visibility = "visible";
        rocketContainer.style.opacity = "1";

        if (stars) stars.style.opacity = "1";
        if (cloud) cloud.style.opacity = "1";
        if (cloudTwo) cloudTwo.style.opacity = "1";

        rocketAnimationInstance.goToAndPlay(0, true); // Start Rocket Animation
      });
    });
  });

  rocketAnimationInstance.addEventListener("complete", function () {
    const animationDuration = rocketAnimationInstance.totalFrames;
    const stopAtFrame = animationDuration * 0.9;
    rocketAnimationInstance.goToAndStop(stopAtFrame, true);

    const rocketContainer = document.getElementById("rocketAnimation");
    rocketContainer.style.opacity = "0";
    rocketContainer.style.visibility = "hidden";
    setTimeout(() => {
      rocketContainer.style.display = "none";
    }, 100);

    // Show scroolDataMain from the top, not the bottom
    const scroolDataMain = document.getElementById("scroolDataMain");
    scroolDataMain.style.display = "block";
    scroolDataMain.style.opacity = "1";
    scroolDataMain.style.visibility = "visible";
    scroolDataMain.style.transition = "opacity 1s ease";
    // Always start at the top
    scroolDataMain.scrollTop = 0;

    // Hide the main container
    mainContainer.style.display = "none";
  });
});

// Load Lottie Rocket Animation
const rocketAnimationInstance = lottie.loadAnimation({
  container: document.getElementById("rocketAnimation"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "rocket-animation.json", // Correct path to your Lottie file
});

// When animation completes (~90%)
rocketAnimationInstance.addEventListener("complete", function () {
  const animationDuration = rocketAnimationInstance.totalFrames;
  const stopAtFrame = animationDuration * 0.9;
  rocketAnimationInstance.goToAndStop(stopAtFrame, true);

  const rocketContainer = document.getElementById("rocketAnimation");
  rocketContainer.style.opacity = "0";
  rocketContainer.style.visibility = "hidden";
  setTimeout(() => {
    rocketContainer.style.display = "none";
  }, 100);

  // Show scroolDataMain from the top, not the bottom
  const scroolDataMain = document.getElementById("scroolDataMain");
  scroolDataMain.style.display = "block";
  scroolDataMain.style.opacity = "1";
  scroolDataMain.style.visibility = "visible";
  scroolDataMain.style.transition = "opacity 1s ease";
  // Always start at the top
  scroolDataMain.scrollTop = 0;

  // Hide the main container
  mainContainer.style.display = "none";
});

const target = document.getElementById("scroolDataMain");

const observer = new MutationObserver(() => {
  const style = window.getComputedStyle(target);
  if (style.display !== "none") {
    window.scrollTo({
      top: target.scrollHeight,
      behavior: "smooth",
    });
    observer.disconnect(); // Stop watching once done
  }
});

observer.observe(target, {
  attributes: true,
  attributeFilter: ["style", "class"],
});

// Zoom effect based on rocket position
const rocketImg = document.querySelector(".sticky-rocket-img");
const targetImgs = document.querySelectorAll(".img_Icon");
const targetImgsTwo = document.querySelectorAll(".img_Icon-two");
const img_iconText = document.querySelectorAll(".img_iconText");
const img_iconTextTwo = document.querySelectorAll(".img_iconTextTwo");
const img_iconTextThree = document.querySelectorAll(".img_iconTextThree");
console.log(img_iconText);

function scaleImagesNearRocket() {
  const rocketRect = rocketImg.getBoundingClientRect();
  targetImgs.forEach((img) => {
    const imgRect = img.getBoundingClientRect();
    const distance = Math.abs(
      (imgRect.top + imgRect.bottom) / 2 -
        (rocketRect.top + rocketRect.bottom) / 2
    );
    if (distance < 150) {
      img.classList.add("scale-up");
    } else {
      img.classList.remove("scale-up");
    }
  });
  targetImgsTwo.forEach((img) => {
    const imgRect = img.getBoundingClientRect();
    const distance = Math.abs(
      (imgRect.top + imgRect.bottom) / 2 -
        (rocketRect.top + rocketRect.bottom) / 2
    );
    if (distance < 300) {
      img.classList.add("scale-up");
    } else {
      img.classList.remove("scale-up");
    }
  });
  img_iconText.forEach((text) => {
    const textRect = text.getBoundingClientRect();
    const textCenterY = (textRect.top + textRect.bottom) / 2;
    const rocketCenterY = (rocketRect.top + rocketRect.bottom) / 2;

    const distance = textCenterY - rocketCenterY;

    // Add class when rocket is nicely above
    if (distance > 10 && distance < 400) {
      text.classList.add("mt_space");
    } else {
      // Remove class as soon as rocket goes below (scrolling down)
      // or too far above (scrolling up)
      text.classList.remove("mt_space");
    }
  });
  img_iconTextTwo.forEach((text) => {
    const textRect = text.getBoundingClientRect();
    const textCenterY = (textRect.top + textRect.bottom) / 2;
    const rocketCenterY = (rocketRect.top + rocketRect.bottom) / 2;

    const distance = textCenterY - rocketCenterY;

    // Add class when rocket is nicely above
    if (distance > 10 && distance < 400) {
      text.classList.add("mt_spaceTwo");
    } else {
      // Remove class as soon as rocket goes below (scrolling down)
      // or too far above (scrolling up)
      text.classList.remove("mt_spaceTwo");
    }
  });
   img_iconTextThree.forEach((text) => {
    const textRect = text.getBoundingClientRect();
    const textCenterY = (textRect.top + textRect.bottom) / 2;
    const rocketCenterY = (rocketRect.top + rocketRect.bottom) / 2;

    const distance = textCenterY - rocketCenterY;

    // Add class when rocket is nicely above
    if (distance > -100 && distance < 400) {
      text.classList.add("mt_spaceTwo");
    } else {
      // Remove class as soon as rocket goes below (scrolling down)
      // or too far above (scrolling up)
      text.classList.remove("mt_spaceTwo");
    }
  });
}
let isExistingFunctionsDone = false; // Flag to track if existing functions are done

// Monitor when your existing functions are done
// You can set this flag to true at the appropriate point in your existing code
// For example, after the MutationObserver or other logic completes
const observerLast = new MutationObserver(() => {
  const target = document.getElementById("scroolDataMain");
  const style = window.getComputedStyle(target);
  if (style.display !== "none") {
    isExistingFunctionsDone = true; // Mark as done
    observerLast.disconnect(); // Stop observing
  }
});

window.addEventListener("scroll", scaleImagesNearRocket);

// Ensure this code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const scroolDataMain = document.getElementById("scroolDataMain");
  const rocketStops = document.getElementById("rocketStops");
  const lastDis = document.querySelector(".lastDis");

  if (!scroolDataMain || !rocketStops || !lastDis) {
    console.error("Required elements are missing in the DOM.");
    return;
  }

  // Create an IntersectionObserver to detect when .lastDis enters the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Wait for 0.5 seconds before hiding scroolDataMain and showing rocketStops
          setTimeout(() => {
            scroolDataMain.style.display = "none";
            rocketStops.style.display = "block";
            document.querySelector(".sec-1-file1").style.display = "block";
          }, 500); // 0.5 seconds
        }
      });
    },
    {
      threshold: 1.0, // Trigger when the entire .lastDis element is in view
    }
  );

  // Observe the .lastDis element
  observer.observe(lastDis);
});

// Update Go Back button functionality to ensure the rocket image appears at the bottom

document.getElementById("goBackButton").addEventListener("click", () => {
  const scroolDataMain = document.getElementById("scroolDataMain");
  const rocketStops = document.getElementById("rocketStops");
  const rocketImg = document.querySelector(".sticky-rocket-img");
  const rocketVideoTwo = document.querySelector(".sticky-rocket-videoTwo");

  // Hide the current section
  rocketStops.style.display = "none";

  // Show the first section and directly jump to its bottom
  scroolDataMain.style.display = "block";
  scroolDataMain.style.opacity = "1";
  scroolDataMain.style.visibility = "visible";
  scroolDataMain.style.transition = "opacity 1s ease";

  // Ensure the rocket image is visible and the video is hidden
  if (rocketImg && rocketVideoTwo) {
    rocketImg.classList.add("show-rocket");
    rocketVideoTwo.classList.remove("show-rocket");
  }

  // Directly set the scroll position to the bottom of the section
  window.scrollTo({
    top: scroolDataMain.scrollHeight,
    behavior: "auto", // Use "auto" to jump directly without smooth scrolling
  });
});

// LAST PART JS

// Keep your existing Lottie initializations
const ringsLottie = lottie.loadAnimation({
  container: document.getElementById("rings"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/RocketRing.json",
});

const boosterLottieFile1 = lottie.loadAnimation({
  container: document.getElementById("booster"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/booster-open-from-lotus-flower.json",
});

const rocketAnimation = document.querySelector(".rocket-img div");
const reverseImg = document.querySelector(".reverse-img img");

// Section Transition Controller
function initSectionTransitions() {
  const sections = {
    sec1File1: document.querySelector(".sec-1-file1"),
    sec1File2: document.querySelector(".sec-1-file2"),
    sec2File2: document.querySelector(".sec-2-file2"),
  };

  // Initial state setup
  // Assuming these are handled by your main page load CSS/JS initially
  // sections.sec1File2.style.display = "none";
  // sections.sec1File2.style.opacity = "0";
  // sections.sec2File2.style.display = "none";
  // sections.sec2File2.style.opacity = "0";

  // Rocket animation completion handler
  // Make sure rocketAnimation exists before adding listener
  if (rocketAnimation) {
    rocketAnimation.addEventListener("animationend", () => {
      handleRocketAnimationEnd(sections);
    });
  }


  // Transition event listeners (Ensure elements exist before adding listeners)
  if (sections.sec1File1) {
      sections.sec1File1.addEventListener("transitionend", (e) => {
        if (
          e.propertyName === "opacity" &&
          sections.sec1File1.style.opacity === "0"
        ) {
          // Hide sec-1-file1 after fade out
          sections.sec1File1.style.display = "none";
          // Show sec-1-file2
          if (sections.sec1File2) {
              sections.sec1File2.style.display = "flex";
              sections.sec1File2.style.opacity = "1";
              setTimeout(() => {
                sections.sec1File2.style.opacity = "0";
              }, 8000);
          }
        }
      });
  }


  // IMAGES TRANSITIONS

  // Transition event listeners
  if (sections.sec1File2) {
      sections.sec1File2.addEventListener("transitionend", (e) => {
        if (
          e.propertyName === "opacity" &&
          sections.sec1File2.style.opacity === "0"
        ) {
          // Hide sec-1-file2 after fade out
          sections.sec1File2.style.display = "none";
          // Show sec-2-file2
          if (sections.sec2File2) {
              sections.sec2File2.style.display = "block";
              sections.sec2File2.classList.add("visibility"); // Assuming 'visibility' class applies initial styles
              setTimeout(() => {
                setTimeout(() => {
                  sections.sec2File2.style.opacity = "1";
                  // After sec2File2 is visible, show sec2Img and focusDiv
                  const sec2Img = document.querySelector(".sec-2-text-file2 img");
                  const focusDiv = document.getElementById("Focus"); // Start with Focus
                  const sec2ImgFadeInDelay = 2000;
                  const mainFocusDivAppearDelay = 5000; // Delay before first Focus appears

                  if (sec2Img) {
                     setTimeout(() => {
                        sec2Img.classList.add("fade-in");
                        // Start sequential appearance of Focus elements after image fades in
                        if (focusDiv) {
                            setTimeout(() => {
                                focusDiv.classList.add("visible");
                                const whiteDivInFocus = focusDiv.querySelector(".white-div-file2");
                                if (whiteDivInFocus) whiteDivInFocus.classList.add("Blink");

                                // Staggered reveal of Focus1, Focus2, Focus3, Focus4, Focus5
                                const focusElements = ["Focus2", "Focus3", "Focus1", "Focus4", "Focus5"]; // Adjusted order based on original JS
                                let delay = 2000; // Delay after the first Focus appears

                                focusElements.forEach(id => {
                                    setTimeout(() => {
                                        const el = document.getElementById(id);
                                        if (el) {
                                            el.classList.add("visible");
                                            const whiteDiv = el.querySelector(".white-div-file2");
                                            if (whiteDiv) whiteDiv.classList.add("Blink");
                                        }
                                    }, delay);
                                    delay += 2000; // Increase delay for next element
                                });

                                // Assuming startFocusDivSequence is a function that might exist elsewhere
                                // if (typeof startFocusDivSequence === "function") startFocusDivSequence();

                            }, mainFocusDivAppearDelay - sec2ImgFadeInDelay); // Adjust delay start
                         }
                     }, sec2ImgFadeInDelay);
                  }
                }, 100);
              }, 100);
          }
        }
      });
  }
}

function handleRocketAnimationEnd(sections) {
  const ring2Div = document.getElementById("ring2");
  if (ring2Div) {
    setTimeout(() => {
      ring2Div.style.opacity = "1";
      ring2Div.style.transition = "opacity 1s ease-in-out";
      ring2Div.style.transform = "rotate(-60deg)";
    }, 4500);
  }


  setTimeout(() => {
    ["rings", "ring2", "white", "white2", "white3", "white4"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.opacity = "0";
        el.style.transition = "opacity 2s ease-out";
        // Note: Adding fade-out class here seems redundant if opacity is set directly
        // if (id === "ring2") el.classList.add("fade-out"); // Check if this class exists and is needed
      }
    });
  }, 4500);

  if (sections.sec1File1) {
      setTimeout(() => {
        sections.sec1File1.style.opacity = "0";
        sections.sec1File1.style.transition = "opacity 2s ease-out";

        setTimeout(() => {
          ["rings", "ring2", "reverse-img"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.style.display = "none";
            // function initSec2File2Animations() {} // This line inside the loop seems incorrect
          });
          // This function call might belong outside the loop if needed
          // initSec2File2Animations(); // Ensure this function is defined if called
        }, 2000); // Delay after sec1File1 starts fading out
      }, 5000); // Delay from rocket animation end
  }
}

// Initialize transitions
// window.addEventListener("DOMContentLoaded", function () { // This listener is already open below, don't duplicate
//   initSectionTransitions();
// }); // Closing the listener opened below

// Keep existing Lottie initializations
const FocusLottie = lottie.loadAnimation({
  container: document.getElementById("Focus"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/Focus-Wheel.json",
});
const Focus1Lottie = lottie.loadAnimation({
  container: document.getElementById("Focus1"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/magnet.json",
});
const Focus2Lottie = lottie.loadAnimation({
  container: document.getElementById("Focus2"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/fast deactivation.json",
});
const Focus3Lottie = lottie.loadAnimation({
  container: document.getElementById("Focus3"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/water fall.json",
});
const Baloon = lottie.loadAnimation({
  container: document.getElementById("thank-img"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../json/thanks.json",
});


// --- NEW MODAL & SLIDER JS ---

function initModals() {
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  const modals = document.querySelectorAll(".modal"); // Get all modals if you have more
  const closeButtons = document.querySelectorAll(".modal .close-btn"); // Get close buttons within modals

  // Function to open a modal
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("show"); // Add the 'show' class to make it visible
      document.body.style.overflow = "hidden"; // Prevent scrolling background
      // Re-initialize or reset slider when modal opens (optional but good practice)
      const slider = modal.querySelector('.slider');
      if (slider) {
          // Assuming initSlider takes the modal element or slider element
          initSlider(modal); // Pass the modal or slider to initSlider
      }
      modal.dispatchEvent(new Event("modal:open"));
    }
  }

  // Function to close a modal
  function closeModal(modalElement) {
    if (modalElement) {
      modalElement.classList.remove("show"); // Remove the 'show' class
      document.body.style.overflow = ""; // Restore scrolling
    }
  }

  // Add click listeners to triggers
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal");
      if (modalId) {
        openModal(modalId);
      }
    });
  });

  // Add click listeners to close buttons
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the closest parent modal element
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  // Add click listener to close modal when clicking outside the modal content
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      // Check if the click was directly on the modal overlay (the modal element itself),
      // not inside the modal-content
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
}


function initSlider(modalElement) {
  // Get elements specific to the modal's slider
  const slider = modalElement.querySelector('.slider');
  if (!slider) return; // Exit if no slider found in this modal

  const slidesContainer = slider.querySelector('.slides-container');
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');
  const dotsContainer = modalElement.querySelector('.dots'); // Dots are outside .slider but within the modal
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];

  if (!slidesContainer || slides.length === 0) return; // Exit if no slides

  let currentSlideIndex = 0;

  // Function to show a specific slide
  function showSlide(index) {
    if (index < 0) {
        currentSlideIndex = slides.length - 1; // Wrap around to the last slide
    } else if (index >= slides.length) {
        currentSlideIndex = 0; // Wrap around to the first slide
    } else {
        currentSlideIndex = index;
    }

    // Calculate the transform value
    const offset = -currentSlideIndex * 100; // Assumes slides are 100% width
    slidesContainer.style.transform = `translateX(0%)`;

    // Update active dot
    dots.forEach((dot, i) => {
      if (i === currentSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Handle button visibility if not wrapping (optional)
    
    if (prevBtn) prevBtn.style.visibility = currentSlideIndex > 0 ? 'visible' : 'hidden';
    if (nextBtn) nextBtn.style.visibility = currentSlideIndex < slides.length - 1 ? 'visible' : 'hidden';
  }

  // Event listeners for buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlideIndex === 0) {
        showSlide(slides.length - 1);
      } else {
        showSlide(currentSlideIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlideIndex === slides.length - 1) {
        showSlide(0);
      }
    });
  }

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Initialize the first slide state when the slider is found/initialized
  // showSlide(0); // Called when the modal opens inside initModals
}

// Utility function to reset slides in a modal
function resetModalSlides(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  const slides = modal.querySelectorAll('.slide');
  const dots = modal.querySelectorAll('.dot');
  slides.forEach((slide, idx) => {
    if (idx === 0) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  dots.forEach((dot, idx) => {
    if (idx === 0) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Attach event listeners to all modal triggers
document.querySelectorAll('.modal-trigger').forEach(trigger => {
  trigger.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    resetModalSlides(modalId);
  });
});

// --- Existing code from your snippet ---
document.addEventListener("DOMContentLoaded", () => {
  // ... your existing code ...
  initSectionTransitions(); // Keep existing init

  // Original image animation handlers
  const sec1ImagesFile1 = document.querySelectorAll(".sec-1-images-file1 img");
  sec1ImagesFile1.forEach((img) => {
    // Check if handler is already added or only add once
    // img.removeEventListener("animationend", fadeOutAfterDelay); // Prevent duplicates if this runs multiple times
     img.addEventListener("animationend", function fadeOutAfterDelay() {
      setTimeout(() => img.classList.add("fade-out"), 1500);
    });
  });

  // Lottie initializations
  const ring2Lottie = lottie.loadAnimation({
    container: document.getElementById("ring2"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../json/RocketRing.json",
  });

  // White stars initialization
  ["white", "white2", "white3", "white4"].forEach((id) => {
    const container = document.getElementById(id);
    if(container) { // Check if container exists
        lottie.loadAnimation({
          container: container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "../json/white-Stars-Burst.json",
        });
    }
  });

 
  // Focus white stars initialization (Keep these)
  ["F0", "F1", "F2", "F3", "F4", "F5"].forEach((prefix) => {
    loadWhiteStars(prefix, ["1", "2", "3", "4"]);
  });

  // --- Call the new modal and slider initializers ---
  initModals();

  // Existing rocket observer logic
  const rocketImg = document.querySelector(".sticky-rocket-img");
  const rocketVideo = document.querySelector(".sticky-rocket-video");
  const rocketVideoTwo = document.querySelector(".sticky-rocket-videoTwo");
  const starsBg = document.querySelector(".BgVideoRocket");

  const showOnly = (el) => {
    [rocketImg, rocketVideo, rocketVideoTwo].forEach((e) =>
      e.classList.remove("show-rocket")
    );
    if(el) el.classList.add("show-rocket"); // Added check for el
  };

  if (starsBg) { // Check if starsBg exists
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Ensure rocket elements exist before trying to show them
          if (entry.isIntersecting && rocketVideo) {
            showOnly(rocketVideo); // section in view
          } else {
            const rect = entry.boundingClientRect;
            if (rect.top > 0 && rocketVideoTwo) {
              showOnly(rocketVideoTwo); // scrolling up
            } else if (rocketImg) {
              showOnly(rocketImg); // scrolling down
            }
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(starsBg);
  }

}); // End of existing DOMContentLoaded listener

// Keep your loadWhiteStars function
function loadWhiteStars(focusElementIdPrefix, starIdSuffixes) {
  starIdSuffixes.forEach((idSuffix) => {
    const container = document.getElementById(
      `white-${focusElementIdPrefix}-${idSuffix}`
    );
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "../json/white-Stars-Burst.json",
      });
    }
  });
}

// Rzwin
// Rzwin


// Modal functionality
const modalTriggers = document.querySelectorAll(".modal-trigger");
const closeBtns = document.querySelectorAll(".close-btn");
const closeBtnsn = document.querySelectorAll(".close-btn_main");
const modals = document.querySelectorAll(".modal");
const overlay = document.getElementById("overlay");

// Track if any modal is open
let isModalOpen = false;

// Open modal when clicking on an image
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    overlay.style.display = "block";
    if (modalId === "modalG") {
      var modalGOverlay = document.getElementById("modalG-overlay");
      if (modalGOverlay) modalGOverlay.style.display = "flex";
    }
    document.body.style.overflow = "hidden";
    setSlide(0, modal);
    modal.dispatchEvent(new Event("modal:open"));
    isModalOpen = true;
  });
});

// Close modal when clicking close button
closeBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const modal = this.closest(".modal");
    modal.style.display = "none";
    overlay.style.display = "none";
    if (modal && modal.id === "modalG") {
      var modalGOverlay = document.getElementById("modalG-overlay");
      if (modalGOverlay) modalGOverlay.style.display = "none";
    }
    document.body.style.overflow = "";
    isModalOpen = false;
  });
});
closeBtnsn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const modal = this.closest(".modal");
    modal.style.display = "none";
    overlay.style.display = "none";
    if (modal && modal.id === "modalG") {
      var modalGOverlay = document.getElementById("modalG-overlay");
      if (modalGOverlay) modalGOverlay.style.display = "none";
    }
    document.body.style.overflow = "";
    isModalOpen = false;
  });
});



// Close modal when clicking anywhere
document.addEventListener("click", function (e) {
  if (isModalOpen) {
    // Check if click is outside modal content
    const clickedInsideModal =
      e.target.closest(".modal-content") ||
      e.target.closest(".modal-trigger") ||
      e.target.classList.contains("close-btn");

    if (!clickedInsideModal) {
      modals.forEach((modal) => {
        if (modal.id === "modalG") {
          var modalGOverlay = document.getElementById("modalG-overlay");
          if (modalGOverlay) modalGOverlay.style.display = "none";
        }
        modal.style.display = "none";
      });
      overlay.style.display = "none";
      document.body.style.overflow = "";
      isModalOpen = false;
    }
  }
});

// Debugging for modal2
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    const modalId = this.getAttribute("data-modal");
    console.log("Trigger clicked for modal:", modalId);
    if (modalId === "modal2") {
      console.log("Attempting to open modal2");
    }
  });
});

// Set slide function
function setSlide(index, modalElement) {
  const slider = modalElement.querySelector(".slider");
  const slides = slider.querySelectorAll(".slide");
  const dots = modalElement.querySelectorAll(".dot");

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Initialize dots for all modals
modals.forEach((modal) => {
  const slides = modal.querySelectorAll(".slide");
  const dotsContainer = modal.querySelector(".dots");
  const prevBtn = modal.querySelector(".prev-btn");
  const nextBtn = modal.querySelector(".next-btn");

  // Store currentSlide as a property of the modal
  modal.currentSlide = 0;

  // Create dots
  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.currentSlide = index;
      updateSlide();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === modal.currentSlide);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === modal.currentSlide);
    });

    // Always show both buttons for wrap-around
    if (prevBtn) prevBtn.style.display = slides.length > 1 ? "inline-block" : "none";
    if (nextBtn) nextBtn.style.display = slides.length > 1 ? "inline-block" : "none";
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (modal.currentSlide === 0) {
        modal.currentSlide = slides.length - 1; // Wrap to last
      } else {
        modal.currentSlide--;
      }
      updateSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (modal.currentSlide === slides.length - 1) {
        modal.currentSlide = 0; // Wrap to first
      } else {
        modal.currentSlide++;
      }
      updateSlide();
    });
  }

  // When modal is opened, always reset to first slide
  modal.addEventListener("modal:open", () => {
    modal.currentSlide = 0;
    updateSlide();
  });

  // Initialize
  updateSlide();
});
const thank = document.querySelectorAll(".thank-btn");
thank.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const modal = this.closest(".modal");
    if (modal) {
      modal.style.display = "none";
      document.getElementById("modalG-overlay").style.display = "none";

    }
    if (typeof overlay !== 'undefined') {
      overlay.style.display = "none";
    }
    document.body.style.overflow = "";
    isModalOpen = false;
    document.getElementById("modalG").style.display = "block";
    document.getElementById("modalG-overlay").style.display = "flex";    
  });
});
