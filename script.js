// ==============================
//  Goodnight Message — script.js
// ==============================

// --- Messages Pool ---
const messages = [
  `As the stars begin to fill the sky,<br />
I want you to know — I think of you.<br />
Every single night, without fail.<br />
Close your eyes, rest easy,<br />
and dream the sweetest dreams.`,

  `The world is quieter now,<br />
and somewhere in that stillness,<br />
you are the warmest thought I carry.<br />
Sleep well, my darling.<br />
Tomorrow, I'll love you even more.`,

  `May tonight be soft and gentle,<br />
may your sleep be deep and peaceful.<br />
You deserve every good thing —<br />
including the most beautiful dreams<br />
that are just for you. 🌸`,

  `I hope as your eyes grow heavy,<br />
you feel wrapped in something warm.<br />
That's me, loving you from here.<br />
Goodnight, my favorite person.<br />
Rest now. I've got your heart safe. 💕`,

  `The moon is watching over you tonight,<br />
just like I would if I could.<br />
Sleep peacefully, love.<br />
You are my last thought before dawn —<br />
and my very first when it arrives.`,

  `Not a night goes by<br />
that I don't count myself lucky<br />
to have someone like you to miss.<br />
Goodnight, sweet love.<br />
Dream of us. 🌙`,
];

let currentIndex = 0;

// --- Generate Stars ---
function createStars() {
  const container = document.getElementById('stars');
  const count = 140;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 2.2 + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = (Math.random() * 4 + 2).toFixed(1);
    const delay = (Math.random() * 6).toFixed(1);
    const opacity = (Math.random() * 0.7 + 0.3).toFixed(2);

    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}vw;
      top: ${y}vh;
      --dur: ${dur}s;
      --op: ${opacity};
      animation-delay: ${delay}s;
    `;

    container.appendChild(star);
  }
}

// --- Generate Floating Petals ---
function createPetals() {
  const container = document.getElementById('petals');
  const symbols = ['🌸', '✿', '🌺', '💮', '❀'];
  const count = 12;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const x = Math.random() * 100;
    const dur = (Math.random() * 12 + 10).toFixed(1);
    const delay = (Math.random() * 12).toFixed(1);
    const size = (Math.random() * 0.8 + 0.7).toFixed(2);

    petal.textContent = symbol;
    petal.style.cssText = `
      left: ${x}vw;
      --dur: ${dur}s;
      --size: ${size}rem;
      animation-delay: ${delay}s;
    `;

    container.appendChild(petal);
  }
}

// --- Cycle Messages ---
function cycleMessage() {
  const messageEl = document.getElementById('message');

  // Fade out
  messageEl.classList.add('fade-out');

  setTimeout(() => {
    // Advance to next message
    currentIndex = (currentIndex + 1) % messages.length;
    messageEl.innerHTML = messages[currentIndex];

    // Fade back in
    messageEl.classList.remove('fade-out');
    messageEl.classList.add('fade-in');

    setTimeout(() => {
      messageEl.classList.remove('fade-in');
    }, 400);
  }, 400);
}

// --- Auto-cycle every 8 seconds ---
function startAutoCycle() {
  setInterval(() => {
    cycleMessage();
  }, 8000);
}

// --- Button click ---
document.getElementById('changeMessage').addEventListener('click', () => {
  cycleMessage();
});

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  createPetals();
  startAutoCycle();
});