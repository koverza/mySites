import {
  darkTheme, // NEW
  dragDrop, // NEW
  useDynamicAdapt,
  // anchors,
  animation,
  burger,
  // chart,
  // form,
  ibg, // NEW
  inputMaskMin, // NEW
  // lazyLoading,
  more,
  // noUiSlider,
  pagination, // NEW
  paginationMin, // NEW
  parallax,
  popup,
  quantity,
  dataPicker, // NEW
  // range,
  // ratings,
  select,
  spoiler,
  swipe, // NEW
  // swiper,
  switchButton,
  tabs,
  toTop,
  typed, // NEW
  video // NEW
  // webp,
  // zoom,
} from './other/index.js';

window.addEventListener('load', () => {
  // Dynamic adaptive
  useDynamicAdapt(); // data-da=".content__column-garden,992,2"

  // inputMask
  // let inputs = document.querySelectorAll('input[type="tel"]');
  // let im = new Inputmask('+38 (999) 999-99-99');
  // im.mask(inputs);
  // placeholder="+38 (___) ___-__-__"
});
