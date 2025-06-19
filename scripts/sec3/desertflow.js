const desertbg = document.querySelector(".desert-container");

// 横向移动
gsap.to(desertbg, {
    x: "-75%",
    scrollTrigger: {
        trigger: desertbg,
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
    }
});
// 山的移动
gsap.to(desert_mountain1, {
    x: "70%",
    scrollTrigger: {
        trigger: desertbg,
        start: "top top",
        end: "300 top",
        scrub: true,
        // markers: true,
    }
});
gsap.to(desert_mountain2, {
    x: "20%",
    scrollTrigger: {
        trigger: desertbg,
        start: "top top",
        end: "320 top",
        scrub: true,
        // markers: true,
    }
});
gsap.to(desert_mountain3, {
    x: "20%",
    scrollTrigger: {
        trigger: desertbg,
        start: "top top",
        end: "400 top",
        scrub: true,
        // markers: true,
    }
});
// 骆驼移动
gsap.to(camel, {
    x: "-50%",
    y: "-30%",
    scrollTrigger: {
        trigger: desertbg,
        start: "1000 top",
        end: "bottom top",
        scrub: true,
        markers: true,
    }
});