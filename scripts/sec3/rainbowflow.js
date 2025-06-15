const sec3_container2 = document.querySelector(".sec3-container-2");
const sec3_container3 = document.querySelector(".sec3-container-3");
const rainbow1 = document.querySelector(".rainbow1");
const rainbow2 = document.querySelector(".rainbow2");

// 注册scroll插件
gsap.registerPlugin(ScrollTrigger);

// 随滚动进度改变css变量scroll_progress1的值(彩虹1进度)
ScrollTrigger.create({
    trigger: sec3_container2,
    start: "450 600",
    end: "1350 bottom",
    markers: true,
    onUpdate: (self) => {
        rainbow1.style.setProperty('--scroll_progress1', self.progress);
    },
});
// 随滚动进度改变css变量scroll_progress2的值(彩虹2进度)
ScrollTrigger.create({
    trigger: sec3_container3,
    start: "top 900",
    end: "1500 bottom",
    // markers: true,
    onUpdate: (self) => {
        rainbow2.style.setProperty('--scroll_progress2', self.progress);
        console.log(self.progress);
    },
});
// 随滚动进度改变山的位置
ScrollTrigger.create({
    trigger: sec3_container4,
    start: "top 900",
    end: "1500 bottom",
    onUpdate: (self) => {
        
    },
});