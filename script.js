const dumpBtn = document.getElementById("dumpBtn");
const thoughtInput = document.getElementById("thoughtInput");
const output = document.getElementById("output");
const quote = document.getElementById("quote");
const ytFrame = document.getElementById("ytFrame");

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

function displayQuoteAnimated(text) {
  quote.innerHTML = "";
  const words = text.split(" ");
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.opacity = "0";
    span.style.animation = `fadeIn 0.5s forwards`;
    span.style.animationDelay = `${index * 0.3}s`;
    quote.appendChild(span);
  });
}

dumpBtn.addEventListener("click", () => {
  const thought = thoughtInput.value.trim();
  if (thought === "") {
    alert("Please write something first.");
    return;
  }

  // ✅ Set YouTube autoplay embed URL
  ytFrame.src = "https://www.youtube.com/embed/cljv53Wvnx4?autoplay=1&loop=1&playlist=cljv53Wvnx4";

  thoughtInput.style.animation = "fadeOut 1s forwards";

  setTimeout(() => {
    document.body.classList.add("calm");
    thoughtInput.classList.add("hidden");
    dumpBtn.classList.add("hidden");
    output.classList.remove("hidden");
    displayQuoteAnimated(getRandomQuote());
  }, 1000);
});