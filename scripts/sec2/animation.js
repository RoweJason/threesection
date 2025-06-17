const start1 = document.querySelectorAll('.sec2-start-1');
const start2 = document.querySelectorAll('.sec2-start-2');
// the const outer is exist last javascript file
const gunfirelist = document.querySelectorAll('.gunfire-en-list > div');
const gunfire = document.querySelector('.gunfire');
const gunfiretext = document.querySelector('.gunfire-text');
// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);
// ScrollSmoother插件
gsap.registerPlugin(ScrollSmoother);

// Create the main timeline
const mainTimeline = gsap.timeline();

// Initial setup and first animation
mainTimeline
    .set([start1, start2, gunfire, gunfiretext], { opacity: 0 })
    .to(start1, {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.in'
    });

let clickCount = 0;
// Click event timeline
document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1) {
        const clickTimeline = gsap.timeline();
        clickTimeline
            .to(start1, {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            })
            .to(start2, {
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
    } else if (clickCount === 2) {
        const secondTimeline = gsap.timeline();
        secondTimeline
            // 第二次点击后
            .to(start2, {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            })
            // 隐藏start1和start2
            .set([start1, start2], { display: 'none' })
            // 显示outer
            .set(outer, { display: 'block', opacity: 0 })
            .to(outer, {
                opacity: 1,
                duration: 2,
                ease: 'power3.out'
            })
            // gunfire文本依次出现
            .staggerFrom(gunfirelist, 1, { opacity: 0, y: 50 }, 0.2)
            // gunfire其他内容出现
            .set(gunfire, { display: 'block', opacity: 0 })
            .to(gunfire, {
                opacity: 1,
                duration: 2,
                ease: 'power3.out'
            })
            .set(gunfiretext, { display: 'block', opacity: 0 })
            .to(gunfiretext, {
                opacity: 1,
                duration: 2,
                ease: 'power3.out'
            })
    }
});