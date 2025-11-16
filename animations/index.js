import gsap, { Power3 } from "gsap";

export const stagger = (target, fromvVars, toVars) => {
  // Use requestAnimationFrame to defer animation and prevent scroll blocking
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      const animation = gsap.fromTo(
        target,
        { opacity: 0, ...fromvVars },
        { opacity: 1, ...toVars, stagger: 0.2, ease: Power3.easeOut, onComplete: resolve }
      );
    });
  });
};
