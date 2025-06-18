// 禁止滚动
document.body.style.overflow = 'hidden';

const outer = document.querySelector(".sec3-outer");
const sec3_container2 = document.querySelector(".sec3-container-2");
const sec3_container3 = document.querySelector(".sec3-container-3");
const sec3_container4 = document.querySelector(".sec3-container-4");
const rainbow1 = document.querySelector(".rainbow1");
const rainbow2 = document.querySelector(".rainbow2");
const rainbow3 = document.querySelector(".rainbow3");
const mountain1 = document.querySelector(".mountain1-container");
const mountain2 = document.querySelector(".mountain2-container");
const mountain3 = document.querySelector(".mountain3-container");
const start1 = document.querySelector(".sec3-start-1");

const desert = document.querySelector(".desert-container");

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);
// ScrollSmoother插件
gsap.registerPlugin(ScrollSmoother);

const mainTimeline = gsap.timeline();
// 初始化
mainTimeline
    .set([outer], { opacity: 0 })
    .to(start1, {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.in'
    });
// 初始化点击次数
let clickCount = 0;
// 点击事件
document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1) {
        // 恢复滚动
        document.body.style.overflow = '';
        const clickTimeline = gsap.timeline();
        clickTimeline
            .to(start1, {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.in'
            })
            .set(start1, {display: 'none'})
            .to(outer, {
                opacity: 1,
                duration: 1,
                ease: 'power2.in'
            });
    }
});
