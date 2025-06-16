const dumpBtn = document.getElementById("dumpBtn");
const thoughtInput = document.getElementById("thoughtInput");
const output = document.getElementById("output");
const quote = document.getElementById("quote");
const ytFrame = document.getElementById("ytFrame");
const breatheText = document.getElementById("breatheText");
const moodSelector = document.getElementById("moodSelector");
const moodButtons = document.querySelectorAll(".mood-btn");

// New working YouTube video IDs for gentle sounds
const moodAudio = {
  rain: "cljv53Wvnx4",       // Rain
  ocean: "PfQWMrLO3hQ",      // Gentle night waves :contentReference[oaicite:1]{index=1}
  fireplace: "eyU3bRy2x44",  // Fireplace
  forest: "1wn-OSiNVjE"      // Forest stream & bird song :contentReference[oaicite:2]{index=2}
};

let selectedMood = "rain"; // default mood

// Mood selection logic
moodButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    moodButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedMood = btn.dataset.mood;
  });
});

// Breathing cycle display
const phases = ["Inhale...", "Hold...", "Exhale...", "Hold..."];
let phaseIndex = 0;
setInterval(() => {
  breatheText.textContent = phases[phaseIndex];
  phaseIndex = (phaseIndex + 1) % phases.length;
}, 3000);

// Quotes list
const quotes = [
  "Breathe in peace. Breathe out chaos.",
  "You did something good for yourself today.",
  "Every thought dumped is a step to clarity.",
  "Letting go is healing.",
  "Storms don’t last forever. Neither do thoughts."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Display quote one word at a time
function displayQuoteAnimated(text) {
  quote.innerHTML = "";
  text.split(" ").forEach((word, idx) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.opacity = "0";
    span.style.animation = `fadeIn 0.5s forwards`;
    span.style.animationDelay = `${idx * 0.3}s`;
    quote.appendChild(span);
  });
}

// Dump button click handler
dumpBtn.addEventListener("click", () => {
  const thought = thoughtInput.value.trim();
  if (!thought) {
    alert("Please write something first.");
    return;
  }

  // Hide mood selector icons
  moodSelector.style.display = "none";

  // Load and play selected mood's YouTube audio
  const vid = moodAudio[selectedMood];
  ytFrame.src = `https://www.youtube.com/embed/${vid}?autoplay=1&loop=1&playlist=${vid}`;

  // Fade out thought input
  thoughtInput.style.animation = "fadeOut 1s forwards";

  // Reveal output after fade-out
  setTimeout(() => {
    document.body.classList.add("calm");
    thoughtInput.classList.add("hidden");
    dumpBtn.classList.add("hidden");
    output.classList.remove("hidden");
    displayQuoteAnimated(getRandomQuote());
  }, 1000);
});
