const secs = document.querySelectorAll('.sec2-container');
const outer = document.querySelector('.sec2-outer');
// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);
// ScrollSmoother插件
gsap.registerPlugin(ScrollSmoother);
const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true
});

const maintl = gsap.timeline({
    
});

