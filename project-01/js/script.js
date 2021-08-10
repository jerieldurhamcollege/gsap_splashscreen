let introAnim = gsap.fromTo("#viewbox", {
    opacity: 0
}, {
    opacity: 1,
    duration:10
});

let introAnim2 =gsap.timeline({repeat: 0, yoyo: false, paused: false}).
    fromTo("#rocket", {
    x: -screen.width,
    y: -screen.height,
    rotation:125
}, {
    x:screen.width * 2.5,
    y:screen.height* 2.5,
    duration: 5,
})
.fromTo("#rocket", {
    opacity: 1
}, {
    opacity: 0,
    duration: 1,
});

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


// ########## WEBSITE OUT ANIMATIONS###########
// ############################################
let header_link = document.getElementById('header_link');
header_link.addEventListener('click', function(){
    logo_anim.reverse();
    introAnim.pause();
    // introAnim.reverse();
    let website_out_anim =  gsap.timeline({repeat: 0, yoyo: false, paused: false, onComplete: function(){
         location.href= "../index.html";
    }})
    .to("#viewbox" , {
        opacity: 0,
        // background: "#262262",
        duration: 2
    })
    .to("body", {
        background: "#262262",
        duration: 2,
    })
    
});