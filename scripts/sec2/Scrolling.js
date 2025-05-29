const secs = document.querySelectorAll('.sec2-container');
const outer = document.querySelector('.sec2-outer');
// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);

// 创建时间线，每一屏移动100%
const maintl = gsap.timeline({
    scrollTrigger: {
        trigger: outer,
        pin: true,
        scrub: 1,
        // snap: {
        //     snapTo: (value, self) => {
        //         const sections = secs.length - 1;
        //         const snapIndex = value * sections;
        //         // 超过一半吸附下一屏，否则保持当前位置
        //         if (snapIndex % 1 > 0.5) {
        //             return (Math.floor(snapIndex) + 1) / sections;
        //         }
        //         return value;

        //     },
        //     duration: { min: 0.1, max: 0.3 },
        //     delay: 0,
        //     ease: "power3.inOut"
        // },
        end: () => "+=" + (secs[0].offsetHeight * secs.length - window.innerHeight),
    }
});

// 每一屏依次向上移动
for (let i = 1; i < secs.length; i++) {
    maintl.to(secs, {
        yPercent: -100 * i,
        duration: 1,
        ease: "none"
    });
}
