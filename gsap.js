gsap.timeline()
            .from(".strip", {
                duration: 2,
                height: 0,
                ease: "expo.inOut"
            })
            .to(".block", {
                duration: 1,
                stagger: 0.2,
                width:0,
                ease: "expo.inOut"
            })    

        gsap.timeline({delay: 3})
            .from(".logo", {
                duration: 1,
                x: -20,
                opacity: 0,
                ease: "expo.inOut"
            })
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
            .from(".contact div:nth-child(1)", {
                delay: 0.5,
                duration: 1,
                x: -20,
                opacity: 0,
                ease: "expo.inOut"
            }, "<")
            .from(".contact div:nth-child(2)", {
                delay: 0.5,
                duration: 1,
                x: -20,
                opacity: 0,
                ease: "expo.inOut"
            }, "<")

        gsap.timeline({delay: 3})
            .from(".navbar .language", {
                duration: 1,
                x: 20,
                opacity: 0,
                ease: "expo.inOut"
            })
            .from(".navbar .search", {
                delay: 1,
                duration: 1,
                x: 20,
                opacity: 0,
                ease: "expo.inOut"
            }, "<")
            .from(".navbar .menu", {
                delay: 1,
                duration: 1,
                x: 20,
                opacity: 0,
                ease: "expo.inOut"
            }, "<");

        gsap.timeline({delay: 3})
            .from(".media a", {
                duration: 1.5,
                stagger: 0.3,
                x: -20,
                opacity: 0,
                ease: "expo.inOut"
            })

        // BOTTOM-NAV ====================================    
        gsap.timeline({delay: 3})
            .from(".bottom-nav .button", {
                duration: 1,
                stagger: 0.5,
                x: 20,
                opacity: 0,
                ease: "expo.inOut"
            })