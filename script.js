const tl = gsap.timeline()

tl.from("#nav-part2 h3", {
    x: 70,
    opacity: 0,
    duration: 0.5
})
gsap.from("#nav i", {
    x: -50,
    opacity: 0,
    duration: 0.5
})

tl.from("#page1 h1", {
    y: 200,
    opacity: 0,
    delay: -0.2,
    duration: 0.5,
})

gsap.to("#page2 video", {
    width: "85%",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        scrub: 1,
        end: "top -15%"
    }
})

gsap.to("#page3 h1", {
    left: "-120%",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        // end: "top -100%",
        scrub: 2,
        pin: true
    }
})