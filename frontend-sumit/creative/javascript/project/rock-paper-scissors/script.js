
// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Ask for user and bot names
let userName = prompt("Enter your name:").toUpperCase();
let botName = prompt("Enter bot name:").toUpperCase();

// Fallback if user cancels or leaves blank
userName = userName?.trim() || "You";
botName = botName?.trim() || "BOT";

document.getElementById("user_name").innerHTML = userName;
document.getElementById("bot_name").innerHTML = botName;
// Define possible images and outcomes
const botImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
const outcomes = {
  RR: "Draw",
  RP: botName,
  RS: userName,
  PP: "Draw",
  PR: userName,
  PS: botName,
  SS: "Draw",
  SR: botName,
  SP: userName
};

// Event handler for image click
function handleOptionClick(event) {
  const clickedImage = event.currentTarget;
  const clickedIndex = Array.from(optionImages).indexOf(clickedImage);

  // Reset results and display "Wait..."
  userResult.src = botResult.src = "images/rock.png";
  result.textContent = "Wait...";

  // Activate clicked image and deactivate others
  optionImages.forEach((image, index) => {
    image.classList.toggle("active", index === clickedIndex);
  });

  gameContainer.classList.add("start");

  setTimeout(() => {
    gameContainer.classList.remove("start");

    // Set user and bot images
    const userImageSrc = clickedImage.querySelector("img").src;
    userResult.src = userImageSrc;

    const randomNumber = Math.floor(Math.random() * botImages.length);
    const botImageSrc = botImages[randomNumber];
    botResult.src = botImageSrc;

    // Determine the result
    const userValue = ["R", "P", "S"][clickedIndex];
    const botValue = ["R", "P", "S"][randomNumber];
    const outcomeKey = userValue + botValue;
    const outcome = outcomes[outcomeKey] || "Unknown";

    // Display the result
    if (userValue === botValue) {
      result.textContent = "Match Draw";
    } else {
      result.textContent = `${outcome} WON!`;
    }
  }, 1000);
}

// Attach event listeners to option images
optionImages.forEach(image => {
  image.addEventListener("click", handleOptionClick);
});

