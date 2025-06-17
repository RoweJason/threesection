const angel = document.querySelector(".angel");
const sec2_2 = document.querySelector(".sec2-container-2");
const sec2_outer = document.querySelector(".sec2-outer")
// 滚动到屏幕中间时，锁定天使位于中间，并让天使缓慢出现

// 让天使初始透明
gsap.set(angel, { opacity: 0 });

// 天使锁定在中间
ScrollTrigger.create({
    trigger: sec2_outer,
    start: "top top",
    end: "bottom bottom",
    // markers: true,
    pin: angel
});
