const relaxText = document.getElementById("relaxText");

const relaxSteps = [
  "Gently close your eyes...",
  "Take a slow deep breath in...",
  "And slowly breathe out...",
  "Bring awareness to your toes and feet...",
  "Relax your legs and knees...",
  "Soften your belly and lower back...",
  "Drop your shoulders and relax your arms...",
  "Let your face soften completely...",
  "Feel your body sinking into calm...",
  "You are safe. You are calm. You are enough. 🌿"
];

let index = 0;
relaxText.textContent = relaxSteps[index];

const relaxInterval = setInterval(() => {
  index++;
  if (index < relaxSteps.length) {
    relaxText.textContent = relaxSteps[index];
  } else {
    clearInterval(relaxInterval);
    relaxText.textContent += "\n\n🌈 Session Complete. Take your time.";
  }
}, 5000);
