export function switchButton() {
  console.log("switch works");

  const switches = document.querySelectorAll(".switch");
  switches.forEach((switchItem) => {
    const switchBall = switchItem.querySelector(".switch__ball");
    switchItem.addEventListener("click", () => {
      switchBall.classList.toggle("active");
      switchItem.classList.toggle("active");
    });
  });
}
