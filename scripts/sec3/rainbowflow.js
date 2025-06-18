// 已在另一文件获取元素
// 已在另一文件注册scroll插件

// 随滚动进度改变css变量scroll_progress1的值(彩虹1进度)
ScrollTrigger.create({
    trigger: sec3_container2,
    start: "450 600",
    end: "1350 bottom",
    // markers: true,
    onUpdate: (self) => {
        rainbow1.style.setProperty('--scroll_progress1', self.progress);
    },
});
// 随滚动进度改变css变量scroll_progress2的值(彩虹2进度)
ScrollTrigger.create({
    trigger: sec3_container3,
    // start: "1400 bottom",
    // end: "2800 bottom",
    start: "top 900",
    end: "1500 bottom",
    // markers: true,
    onUpdate: (self) => {
        rainbow2.style.setProperty('--scroll_progress2', self.progress);
    },
});
// 随滚动条改变css变量scroll_progress3的值(彩虹3进度)
ScrollTrigger.create({
    trigger: sec3_container4,
    start: "top top",
    end: "2500 bottom",
    // markers: true,
    onUpdate: (self) => {
        rainbow3.style.setProperty('--scroll_progress3', self.progress);
    },
});