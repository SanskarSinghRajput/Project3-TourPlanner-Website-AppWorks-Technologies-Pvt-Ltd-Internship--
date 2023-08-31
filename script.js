const greeting = ["Hello!", "Welcome to TourPlanner", "Plan Your Journey Now", "Book Now !"];
let currentGreetingIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;
let isPaused = false;
let pauseEnd = 0;

function typeWriterEffect() {
  const greetingElement = document.getElementById("typing");

  if (isPaused && Date.now() > pauseEnd) {
    isPaused = false;
    if (isDeleting) {
      currentGreetingIndex = (currentGreetingIndex + 1) % greeting.length;
      isDeleting = false;
    } else {
      isDeleting = true;
    }
  }

  if (
    !isPaused &&
    !isDeleting &&
    currentCharacterIndex === greeting[currentGreetingIndex].length
  ) {
    isPaused = true;
    pauseEnd = Date.now() + 800;
    return setTimeout(typeWriterEffect, 50);
  }

  if (!isPaused && isDeleting && currentCharacterIndex === 0) {
    isPaused = true;
    pauseEnd = Date.now() + 200;
    return setTimeout(typeWriterEffect, 50);
  }

  const timeout = isDeleting ? 100 : 200;
  greetingElement.innerText = greeting[currentGreetingIndex].substring(
    0,
    currentCharacterIndex
  );
  currentCharacterIndex = isDeleting
    ? currentCharacterIndex - 1
    : currentCharacterIndex + 1;
  setTimeout(typeWriterEffect, timeout);
}

typeWriterEffect();
