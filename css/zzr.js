const controls = document.querySelector(".controls");
const wrapper = document.querySelector(".wrapper777");
const label = wrapper.querySelector(".label777");

controls.addEventListener("click", onControlsClick);

function onControlsClick(e) {
  const { size } = e.target.dataset;
  wrapper.style.backgroundSize = size;
  label.textContent = size;
}
