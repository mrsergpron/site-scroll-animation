//регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// если листаем не на устройствах с Touch
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    // объект
    ".hero-section",
    // значение до
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        // элемент триггера
        trigger: ".hero-section",
        // начать анимацию когда элемент в центре
        start: "center",
        // закончить анимацию
        end: "1020",
        scrub: true,
      },
    }
  );

  //   для левой части
  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  //   для правой части
  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          end: "top",
          scrub: true,
        },
      }
    );
  });
}
