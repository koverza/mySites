export function toTop() {
  console.log("toTop works");
  const toTop = document.querySelector(".toTop");
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 500) { // header height or block height
      header.classList.add("active");
      toTop.classList.add("active");
    } else {
      header.classList.remove("active");
      toTop.classList.remove("active");
    }
  });
}
