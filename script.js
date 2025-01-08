//queryselector selects the #move element
const capybara = document.querySelector("#move");
//pos is the position of the capybara
const pos = { x: 0, y: 0 };

const move = (e) => (capybara.style.translate = `${pos.x}px ${pos.y}px`);
//map of arrow keys
const keyActions = {
  ArrowUp: () => move((pos.y -= 40)),
  ArrowDown: () => move((pos.y += 40)),
  ArrowLeft: () => move((pos.x -= 40)),
  ArrowRight: () => move((pos.x += 40)),
};


addEventListener("keydown", (evt) => {
  evt.preventDefault();
  // if (!evt.repeat) //does not move when key is held, removing this will make it move when key is held
     keyActions[evt.key]?.();
});
