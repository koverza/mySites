export function popup() {
  console.log("popup works");

  const popupOpen = document.querySelector(".btn");
  const popups = document.querySelectorAll(".popup");

  popups.forEach((popup) => {
    const popupCross = popup.querySelector(".popup-top__cross");

    // popupOpen.addEventListener('click', () => {
    //   popup.classList.add('active')
    //   document.body.style.overflowY = 'hidden'
    // })

    popupCross.addEventListener("click", () => {
      popup.classList.remove("active");
      document.body.style.overflowY = "visible";
    });
  });
}
