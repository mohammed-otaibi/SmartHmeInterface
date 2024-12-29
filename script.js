// Add an event listener to the toggle switch for the "change" event
document.getElementById("light-toggle").addEventListener("change", function () {
  // Select the element that displays the light status
  const statusText = document.getElementById("light-status");
  
  // Check if the toggle switch is turned on (checked state)
  if (this.checked) {
    // Update the status text to indicate that the lights are ON
    statusText.textContent = "Lights are ON";
  } else {
    // Update the status text to indicate that the lights are OFF
    statusText.textContent = "Lights are OFF";
  }
});



// Set initial temperature
let currentTemperature = 78;

// Get elements
const temperatureDisplay = document.getElementById("temperature-display");
const increaseButton = document.getElementById("temp-increase");
const decreaseButton = document.getElementById("temp-decrease");

// Update temperature display
function updateTemperatureDisplay() {
  temperatureDisplay.textContent = `${currentTemperature}°F`;
}

// Increase temperature
increaseButton.addEventListener("click", () => {
  currentTemperature += 1;
  updateTemperatureDisplay();
});

// Decrease temperature
decreaseButton.addEventListener("click", () => {
  currentTemperature -= 1;
  updateTemperatureDisplay();
});

// Initialize display
updateTemperatureDisplay();




// Array of funny song names
const songs = [
  "Dancing Potato Jam",
  "Funky Unicorn Anthem",
  "Penguins on Parade",
  "Rockin' Rubber Duckies",
  "Llama Groove Beats",
  "Space Cat Symphony"
];

// Variables to track current song and state
let currentSongIndex = -1;

// Get elements
const songNameDisplay = document.getElementById("song-name");
const playButton = document.getElementById("play-music");
const pauseButton = document.getElementById("pause-music");
const nextButton = document.getElementById("next-track");

// Play Music
playButton.addEventListener("click", () => {
  if (currentSongIndex === -1) {
    // Select a random song if no song is currently playing
    currentSongIndex = Math.floor(Math.random() * songs.length);
  }
  songNameDisplay.textContent = `Now Playing: ${songs[currentSongIndex]}`;
});

// Pause Music
pauseButton.addEventListener("click", () => {
  if (currentSongIndex !== -1) {
    songNameDisplay.textContent = `Paused: ${songs[currentSongIndex]}`;
  } else {
    songNameDisplay.textContent = "No song is playing";
  }
});

// Next Track
nextButton.addEventListener("click", () => {
  // Move to the next song
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  songNameDisplay.textContent = `Now Playing: ${songs[currentSongIndex]}`;
});
