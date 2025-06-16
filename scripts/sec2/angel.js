const angel = document.querySelector(".angel");
const sec2_2 = document.querySelector(".sec2-container-2");
const sec2_outer = document.querySelector(".sec2-outer")
gsap.registerPlugin(ScrollTrigger);
// 滚动到屏幕中间时，锁定天使位于中间，并让天使缓慢出现

// 让天使初始透明
gsap.set(angel, { opacity: 0 });

// 天使淡入动画
gsap.to(angel, {
    opacity: 1,
    scrollTrigger: {
        trigger: sec2_outer,
        start: "top 80%", // 当sec2_outer进入视口80%时开始淡入
        end: "top 50%",   // 到达视口50%时完全显示
        scrub: true
    }
})

// 天使锁定在中间
ScrollTrigger.create({
    trigger: sec2_outer,
    start: "top top",
    end: "bottom bottom",
    markers: true,
    pin: angel
});