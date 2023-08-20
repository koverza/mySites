export function toTop() {
  console.log("toTop works");
  const toTop = document.querySelector(".toTop");
  const header__inner = document.querySelector(".header__inner");

  window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 100) { // header height or block height
      header__inner.classList.add("active");
      toTop.classList.add("active");
    } else {
      header__inner.classList.remove("active");
      toTop.classList.remove("active");
    }
  });
}
