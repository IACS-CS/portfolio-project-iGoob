// main.js

// List of image sources (placeholders)
const placeholderImages = [
  "placeholder1.png", // Placeholder 1
  "placeholder2.png", // Placeholder 2
  "placeholder3.png", // Placeholder 3
];

// Reference to the clickable item
const clickableItem = document.getElementById("clickable-placeholder");

// Reference to the image inside the clickable item
const imageElement = clickableItem.querySelector("img");

// Current image index
let currentIndex = 0;

// Click event listener to cycle through images
clickableItem.addEventListener("click", function () {
  // Change to the next image
  currentIndex = (currentIndex + 1) % placeholderImages.length;
  imageElement.src = placeholderImages[currentIndex]; // Update image source
});
