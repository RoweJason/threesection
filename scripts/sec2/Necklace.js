const nk = document.querySelector(".necklace");
gsap.registerPlugin(ScrollTrigger);

// 滚动到屏幕中间时，锁定项链位于中间

const nktl = gsap.timeline({
    scrollTrigger: {
        trigger: nk,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // pin: true,
        markers: true
    }
});
// 让项链在滚动到屏幕中间时锁定在中间
nktl.to(nk, {
    // y: () => (window.innerHeight / 2 - nk.offsetHeight / 2),
    y : () => window.innerHeight + nk.offsetHeight / 2,
    duration: 1,
    ease: "none"
}, 0);