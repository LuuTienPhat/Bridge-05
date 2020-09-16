// STRIPS AND BLOCKS ======================
gsap
    .timeline()
    .from(".strip", {
        duration: 2,
        height: 0,
        ease: "expo.inOut"
    })
    .to(".block", {
        duration: 1,
        stagger: 0.2,
        width: 0,
        ease: "expo.inOut"
    });

//  LOGO AND CONTACT ========================
gsap
    .timeline({delay: 2.5})
    .from(".logo", {
        duration: 1,
        x: 20,
        opacity: 0,
        ease: "expo.inOut"
    })
    .from(".contact div", {
        duration: 1,
        stagger: 0.5,
        x: 20,
        opacity: 0,
        ease: "expo.inOut"
    }, "<");

// DESC ==================================
gsap
    .timeline({delay: 2.5})
    .from(".info .desc", {
        delay: 0.5,
        duration: 1,
        y: -20,
        opacity: 0,
        ease: "expo.inOut"
    }, "<")
    .from(".info .name", {
        delay: 0.5,
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "expo.inOut"
    }, "<")

//  NAVBAR ===============================
gsap
    .timeline({delay: 2.8})
    .from(".navbar .language, .navbar .search, .navbar .menu", {
        duration: 0.9,
        stagger: 0.3,
        x: 20,
        opacity: 0,
        ease: "expo.inOut"
    })

// MEDIA =======================================
gsap
    .timeline({delay: 2.8})
    .from(".media", {
        duration: 1,
        x: 20,
        opacity: 0,
        ease: "expo.inOut"
    })

// BOTTOM-NAV ====================================
gsap
    .timeline({delay: 2.8})
    .from(".bottom-nav .button", {
        duration: 1,
        stagger: 0.5,
        x: 20,
        opacity: 0,
        ease: "expo.inOut"
    })