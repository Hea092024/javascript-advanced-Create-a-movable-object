//queryselector selects the #move element
const capybara = document.querySelector("#move");
//pos is the position of the capybara
const pos = { x: 0, y: 0 };

const move = (evt) => (capybara.style.translate = `${pos.x}px ${pos.y}px`);
//map of arrow keys
const keyActions = { ArrowUp: () => { pos.y -= 40; constrainPosition(); }, ArrowDown: () => { pos.y += 40; constrainPosition(); }, ArrowLeft: () => { pos.x -= 40; constrainPosition(); }, ArrowRight: () => { pos.x += 40; constrainPosition(); }, }; addEventListener("keydown", (evt) => { evt.preventDefault(); if (keyActions[evt.key]) { keyActions[evt.key](); } });

const constrainPosition = () => {
  pos.x = Math.min(Math.max(pos.x, 0), vw - capybara.offsetWidth);
  pos.y = Math.min(Math.max(pos.y, 0), vh - capybara.offsetHeight);
  move();
};

addEventListener("keydown", (evt) => {
  evt.preventDefault();
  // if (!evt.repeat) //does not move when key is held, removing this will make it move when key is held
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