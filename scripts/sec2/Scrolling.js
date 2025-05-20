const secs = document.querySelectorAll('.sec2-container');
const outer = document.querySelector('.sec2-outer');

/**
 * gsap实现全屏滚动
 */
gsap.registerPlugin(ScrollTrigger);

gsap.to(secs, {
    yPercent: -100 * (secs.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: outer,
        pin: true,
        scrub: 1,
        snap: 1 / (secs.length - 1),
        end: () => "+=" + (secs[0].offsetHeight * secs.length - window.innerHeight),
    }
}
)
