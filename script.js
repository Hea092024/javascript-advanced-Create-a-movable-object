const capybara = document.querySelector("#move");
const pos = { x: 0, y: 0 };

const move = (e) => (capybara.style.translate = `${pos.x}px ${pos.y}px`);

const keyActions = {
  ArrowLeft: () => move((pos.x -= 40)),
  ArrowRight: () => move((pos.x += 40)),
};

addEventListener("keydown", (evt) => {
  evt.preventDefault();
  if (!evt.repeat) keyActions[evt.key]?.();
});

