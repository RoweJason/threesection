const desertbg = document.querySelector(".desert-container");

// 横向移动
gsap.to(desertbg, {
    x: "-100%",
    scrollTrigger: {
        trigger: desertbg,
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});