import gsap from 'gsap'

export function gsapLine($el, duration) {
  gsap.fromTo(
    $el,
    {
      autoAlpha: 1,
      width: '0%',
    },
    {
      duration,
      autoAlpha: 1,
      width: '100%',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: $el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    }
  );
}