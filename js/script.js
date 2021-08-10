//ANIMATE LOGO
let logo_element = document.getElementById('logo');

// for (let i = 1; i <16; i++){
//     let target = "#logo_" + i;
//     let logo_anim= gsap.fromTo(target, {
//         opacity:0
//     }, 
//     {
//         opacity:1,
//         duration: 2,
//     });
// }
let logo_init_anim = gsap.set(".logo_path", {
    opacity: 0,
    fill: "white",
});
let logo_anim = gsap.timeline({repeat: 0, yoyo: false, paused: false})
.fromTo(".logo_path", {
    opacity: 0
}, {
    opacity:1,
    stagger: 0.1
})
.fromTo(".logo_path", {
    fill:"white"
}, {
    fill: "yellow",
    stagger: 0.05
});





let p1_div = document.getElementById("rocket");
let p2_div = document.getElementById("emoji");

// ########## WEBSITE OUT ANIMATIONS###########
// ############################################
let header_link = document.getElementById('header_link');
header_link.addEventListener('click', function(){
    logo_anim.reverse();
    let website_out_anim =  gsap.timeline({repeat: 0, yoyo: false, paused: false, onComplete: function(){
        location.href= "index.html";
    }})
    .to("#rocket", {
        duration: 2,
        yPercent: -300, //3 times the height.
        opacity:0, //in case that the screen is huge... More like a failsafe.}, ">")
        ease: " power4. out",
    })
    .to("#emoji", {
        duration: 1,
        opacity:0, 
        yPercent: 300, //3 times the height.
        ease: " power4. out",
        },"<")
    .to("#project1_div", {
        duration: 2,
        backgroundColor: "#262262"
    })
    .to("#project2_div", {
        duration: 2,
        backgroundColor: "#262262"
        },"<")
    .to("#separator > *", {
        duration: 2,
        fill: "#262262"
        },"<")
    .to("#content", {
        duration: 2,
        backgroundColor: "#262262"
        },"<")
    .to(".description", {
        duration: 2,
        Color: "#262262"
        },"<")
    .to("#separator_div", {
        duration: 2,
        backgroundColor: "#262262"
        },"<");
    
});

//Onload Animations
let intro_dur = 2;
let p1_div_load_anim = gsap.from("#rocket", {
    duration: intro_dur,
    opacity:0,
    y: -screen.height,
    ease: " power4. out"
});
let p2_div_load_anim = gsap.from("#emoji", {
    duration: intro_dur,
    opacity:0,
    y: screen.height,
    ease: " power4. out"
});

let backgroundAnim1 = gsap.fromTo("#project1_div", {
    backgroundColor: "#262262"
},{
    backgroundColor:"#005dae",
    duration:1.5,
} );
let backgroundAnim2 = gsap.fromTo("#project2_div", {
    backgroundColor: "#262262"
},{
    backgroundColor:"#00add6",
    duration:1.5,
} );
let backgroundAnim3 = gsap.fromTo("#separator > *", {
    opacity: 0,
}, {
    opacity: 1,
    duration:1,
});
let backgroundAnim4 = gsap.fromTo("#separator_div", {
    opacity: 0,
}, {
    opacity: 1,
    duration:0,
});
//Click  and hover events
p1_div.addEventListener("click", function(){
    console.log("p1_div clicked");
    logo_anim.reverse();
    let p1_outAnim = gsap.timeline({repeat: 0, yoyo: false, paused: false, onComplete: function(){
        location.href= "project-01/index.html";
    }})
    .to("#rocket", {
        duration: 2,
        yPercent: -500, //10 times the height.
        opacity:0, //in case that the screen is huge... More like a failsafe.}, ">")
        ease: " power4. out"
    })
    .to("#project1_div", {
        duration: 2,
        backgroundColor: "black"
    })
    .to("#project2_div", {
        duration: 2,
        backgroundColor: "black"
        },"<")
    .to("#emoji > *", {
        duration: 1,
        opacity:0 
        },"<")
    .to("#separator > *", {
        duration: 2,
        fill: "black"
        },"<")
    .to("#content", {
        duration: 2,
        backgroundColor: "black"
        },"<")
    .to(".description", {
        duration: 2,
        Color: "black"
        },"<")
    .to("#separator_div", {
        duration: 2,
        backgroundColor: "black"
        },"<");
});




p2_div.addEventListener("click", function(){
    console.log("p2_div clicked");
    logo_anim.reverse();
    let p2_outAnim = gsap.timeline({repeat: 0, yoyo: false, paused: false, onComplete: function(){
        location.href= "project-02/index.html";
    }})
    .to("#emoji", {
        duration: 0.3,
        yPercent: -50, 
        xPercent: 0,
        ease: " power4. out"
    })
    .to("#emoji", {
        duration: 0.7,
        yPercent: 0, 
        xPercent: 0,
        ease: "Bounce.easeOut"
    })
    .to("#emoji", {
        duration: 0.3,
        yPercent: -100, 
        xPercent: 0,
        ease: " power4. out"
    })
    .to("#emoji", {
        duration: 0.7,
        yPercent: 0, 
        xPercent: 0,
        ease: "Bounce.easeOut"
    })
    .to("#emoji", {
        duration: 1.5,
        yPercent: -500, 
        opacity:0,
        ease: " power4. out"
    })
    .to("#project2_div", {
        duration: 2,
        backgroundColor:  "#17045A"
    })
    .to("#project1_div", {
        duration: 2,
        backgroundColor:  "#17045A"
        },"<")
    .to("#rocket > *", {
        duration: 1,
        opacity:0 
        },"<")
    .to("#separator > *", {
        duration: 2,
        fill:  "#17045A"
        },"<")
    .to(".description", {
        duration: 2,
        color: "#17045A"
        },"<")
    .to("#content", {
        duration: 2,
        backgroundColor:  "#17045A"
        },"<")
    .to("#separator_div", {
        duration: 2,
        backgroundColor:  "#17045A"
        },"<");
});

let rocket_onhover_anim1;
p1_div.addEventListener("mouseover", function(){
    console.log("p1_div_Mouse_Enter");
    rocket_onhover_anim1 = gsap.to("#rocket_fire", {
        repeat: -1,
        duration:1,
        yoyo: true,
        filter: "blur(8px)" //Source: https://greensock.com/forums/topic/20180-motion-blur-with-svg-gaussianblur-tween-only-the-x-value/
    });

    rocket_onhover_anim2 = gsap.to("#rocket", {
        scale: 1.1
    })
    
});
p1_div.addEventListener("mouseout", function(){
    console.log("p1_div_Mouse_Out");
    rocket_onhover_anim1.pause();
    let rocket_onhover_anim3 = gsap.to("#rocket_fire", {
        repeat: 1,
        duration:3,
        yoyo: false,
        filter: "blur(0px)" //Source: https://greensock.com/forums/topic/20180-motion-blur-with-svg-gaussianblur-tween-only-the-x-value/
    });
    let rocket_onhover_anim4 = gsap.to("#rocket", {
        scale : 1
        // duration: 2,
        // // yoyo: true,
        // repeat: 0
    })
});


let emoji_onhover_anim1;
p2_div.addEventListener("mouseover", function(){
    console.log("p2_div_Mouse_Enter");

    emoji_onhover_anim1 = gsap.to("#emoji", {
        scale: 1.1,
        ease: "slow(0.50.5,0.7,0.7, false)"
    })
    
});
p2_div.addEventListener("mouseout", function(){
    console.log("p2_div_Mouse_Out");
    emoji_onhover_anim1.pause();
    let emoji_onhover_anim2 = gsap.to("#emoji", {
        scale : 1,
        ease: "slow(0.50.5,0.7,0.7, false)"

    })
});