const angel = document.querySelector(".angel");
const sec2_2 = document.querySelector(".sec2-container-2");
const sec2_outer = document.querySelector(".sec2-outer")
gsap.registerPlugin(ScrollTrigger);

// 滚动到屏幕中间时，锁定天使位于中间

ScrollTrigger.create({
    trigger: sec2_outer,
    scrub: true,
    start: "1300 top",
    end: "bottom bottom",
    markers: true,
    pin: angel
})