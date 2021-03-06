import gsap from 'gsap'

export function gsapShorthand($el, duration, top, delay) {
  gsap.fromTo(
    $el,
    {
      autoAlpha: 0,
      top,
    },
    {
      duration,
      delay,
      autoAlpha: 1,
      top: 0,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: $el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    }
  );
}