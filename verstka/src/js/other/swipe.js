// swipe
export function swipe() {
  console.log("swipe works");

  // const menu = document.querySelector('.menu') // add class to menu

  document.body.addEventListener("touchstart", swipeStart, false);
  document.body.addEventListener("touchmove", swipeMove, false);
  let x1 = null;
  let y1 = null;

  function swipeStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  }

  function swipeMove(event) {
    if (!x1 || !y1) {
      return false;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // right
        // menu.style.left = 0 + '%'
      } else {
        // left
        // menu.style.left = -100 + '%'
      }
    } else {
      if (yDiff > 0) {
        // down
      } else {
        // top
      }
    }
    x1 = null;
    y1 = null;
  }
}
