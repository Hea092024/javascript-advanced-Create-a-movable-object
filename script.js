const capybara = document.querySelector("#move");
const pos = { x: 0, y: 0 };

const move = (evt) => (capybara.style.translate = `${pos.x}px ${pos.y}px`);

// map of arrow keys
const keyActions = {
  ArrowUp: () => {
    pos.y -= 40;
    constrainPosition();
  },
  ArrowDown: () => {
    pos.y += 40;
    constrainPosition();
  },
  ArrowLeft: () => {
    pos.x -= 40;
    constrainPosition();
  },
  ArrowRight: () => {
    pos.x += 40;
    constrainPosition();
  },
};

addEventListener("keydown", (evt) => {
  evt.preventDefault();
  keyActions[evt.key]?.();
});

// moves capybara to the clicked position
addEventListener("click", (evt) => {
  // Get click coordinates
  pos.x = evt.clientX;
  pos.y = evt.clientY;
  pos.x -= capybara.offsetWidth / 2;
  pos.y -= capybara.offsetHeight / 2;
  move();
});

let welcome = document.getElementById("title");
let greeting = "Welcome to Capybara Land";
welcome.textContent = greeting;

let vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
let vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

const constrainPosition = () => {
  const capybaraWidth = capybara.offsetWidth;
  const capybaraHeight = capybara.offsetHeight;

  pos.x = Math.min(Math.max(pos.x, 0), vw - capybaraWidth);
  pos.y = Math.min(Math.max(pos.y, 0), vh - capybaraHeight);
  move();
};

// Window resize event listener
window.addEventListener("resize", () => {
  vw = window.innerWidth;
  vh = window.innerHeight;
  constrainPosition();
});
