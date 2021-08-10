// ########## LOGO INTRO ANIMATIONS ###########
// ############################################
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
    playLandingAnimation(false);
    let website_out_anim =  gsap.timeline({repeat: 0, yoyo: false, paused: false, onComplete: function(){
         location.href= "../index.html";
    }})
    .to(".stars , .main_container", {
        opacity: 0,
        // background: "#262262",
        duration: 2
    })
    .to("html", {
        background: "#262262",
        duration: 2,
    })
    
});

// ########## VARIABLE DECLARATIONS ###########
// ##############################
let emojis = new Array(12); //12 emojis. 
let animations = Array.from(Array(12), () => new Array()) //Two dimensional array with 12 elements. 

// ########## LANDING ANIMATIONS ###########
// ##############################

function playLandingAnimation(flag){
//HOW IT WORKS
//The name/id of each emoji div follows the pattern "emojiX" where X is a number.
//So here's an array for each...
    let landing_anim = new Array(12);
    //Now it is time to populate it with a for loop.
    for(let i=0; i<landing_anim.length; i++){
        //Here we build the class name:
        let emojiNumber = i+1;
        let targetName = `.emoji_div_${emojiNumber}`;
        //SOURCE: https://greensock.com/docs/v3/GSAP/UtilityMethods/random()
        let Xcoordinate = gsap.utils.random(-50, 50, 1);
        let Ycoordinate = gsap.utils.random(-400, -400, 5);
        //And populate the array
        if (flag){ //intro
            landing_anim[i] == gsap
            .fromTo(targetName, {
                xPercent: Xcoordinate, //Direction of the fall. Units in percentages where 100% = size of emoji (width or height).
                yPercent: Ycoordinate //Height of the fall
            },
            {
                xPercent: 0, 
                yPercent: 0, //spawning place
                ease: "bounce.out", //:)
                duration: gsap.utils.random(2, 4, 0.2)
            });
        }
        else{//Outro
            landing_anim[i] == gsap
            .fromTo(targetName, {
                xPercent: 0, 
                yPercent: 0, //spawning place
            },
            {
                xPercent: Xcoordinate * 3, //Direction of the jump. Units in percentages where 100% = size of emoji (width or height).
                yPercent: Ycoordinate * 3, //Height of the jump
                ease: "bounce.out", //:)
                duration: gsap.utils.random(2, 4, 0.2)
            });
        }
    }
}
playLandingAnimation(true);

// ########## EMOJI 1 ###########
// ##############################
let emoji1_index = 0;
animations[emoji1_index][0] = gsap.fromTo(".eyeballs_1",{
    duration: 2.5,
    scale: 0.5,
    repeat: -1,
    yoyo: true,
    transformOrigin: "center",
    ease: "power1.inOut",
    paused: true
},
{
    duration: 2.5,
    scale: 1.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    paused: true
});

animations[emoji1_index][1] = gsap.fromTo("#mouth_1",{
    duration: 2.5,
    scale: 0.7,
    repeat: -1,
    yoyo: true,
    transformOrigin: "center",
    ease: "power1.inOut",
    paused: true
},
{
    duration: 2.5,
    scale: 1.4,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    paused: true
});
    // animations[0]= [emoji1_anim1, emoji1_anim2];
//Source: https://greensock.com/docs/v3/GSAP/gsap.fromTo()

// ########## EMOJI 2 ###########
// ##############################
let emoji2_index = 1;

animations[emoji2_index][0] = gsap.to(".eyeballs_2",  {
    duration: 1,
    yPercent: -80, //Moving up by 80% of the element's height. Replaced hard coded value to improve responsive design. Source: https://greensock.com/forums/topic/19968-animating-height-percent/
    repeat: -1,
    ease: "steps(4)",
    paused: true
});

let tooth_target_2 = "";
tooth_target_2 = "#tooth_2-1";
animations[emoji2_index][1] =gsap.timeline({repeat: -1, yoyo: true, paused: true})
    .to(tooth_target_2, {duration: 1, fill: "#fff200"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#2e3192"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#ef4136"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#fff"}, ">");

tooth_target_2 = "#tooth_2-2";
animations[emoji2_index][2] = gsap.timeline({repeat: -1, yoyo: true, paused: true})
    .to(tooth_target_2, {duration: 1, fill: "#fff"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#fff200"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#2e3192"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#ef4136"}, ">");

tooth_target_2 = "#tooth_2-3";
animations[emoji2_index][3] = gsap.timeline({repeat: -1, yoyo: true, paused: true})
    .to(tooth_target_2, {duration: 1, fill: "#ef4136"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#fff"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#fff200"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#2e3192"}, ">");

tooth_target_2 = "#tooth_2-4";
animations[emoji2_index][4] =gsap.timeline({repeat: -1, yoyo: true, paused: true})
    .to(tooth_target_2, {duration: 1, fill: "#2e3192"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#ef4136"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#fff"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#fff200"}, ">");

tooth_target_2 = "#tooth_2-5";
animations[emoji2_index][5] =gsap.timeline({repeat: -1, yoyo: true, paused: true})
    .to(tooth_target_2, {duration: 1, fill: "#fff"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#2e3192"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#fff200"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#ef4136"}, ">");

tooth_target_2 = "#tooth_2-6";
animations[emoji2_index][6] =gsap.timeline({repeat: -1, yoyo: true, paused: true})
    .to(tooth_target_2, {duration: 1, fill: "#fff200"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#ef4136"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#fff"}, ">")
    .to(tooth_target_2, {duration: 1, fill: "#2e3192"}, ">");


first_colour_target_2 = "#left_ear_2";
second_colour_target_2 = "#right_ear_2";
third_colour_target_2 = "#nose_2";
animations[emoji2_index][7] = gsap.timeline({repeat: -1, yoyo: true, paused: true})
    .to(first_colour_target_2, {duration: 1, fill: "#fff200"}, "")
    .to(first_colour_target_2, {duration: 1, fill: "#39b54a"}, "")
    .to(first_colour_target_2, {duration: 1, fill: "#2e3192"}, "")

    .to(second_colour_target_2, {duration: 1, fill: "#39b54a"}, "")
    .to(second_colour_target_2, {duration: 1, fill: "#2e3192"}, "")
    .to(second_colour_target_2, {duration: 1, fill: "#fff200"}, "")
    
    .to(third_colour_target_2, {duration: 1, fill: "#2e3192"}, "")
    .to(third_colour_target_2, {duration: 1, fill: "#fff200"}, "")
    .to(third_colour_target_2, {duration: 1, fill: "#39b54a"}, "");


// ########## EMOJI 3 ###########
// ##############################
let emoji3_index = 2;
let anim3_duration = 2;
animations[emoji3_index][0] = gsap.to("#progress_bar_3",  {
    duration: anim3_duration,
    scaleX: 6,
    repeat: -1,
    paused: true
});
animations[emoji3_index][1] = gsap.to(".eyeballs_3",{
    duration: anim3_duration,
    xPercent:60,
    repeat: -1,
    paused: true
});

// ########## EMOJI 4 ###########
// ##############################
let emoji4_index = 3;

//Source: https://greensock.com/docs/v3/GSAP/gsap.effects
gsap.registerEffect({
    name: "fallingTears",
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration,
                                 opacity: 0,  //tears dissapear
                                 yPercent:150}); //tears fall
    },
    defaults: {duration: 1.5}, //defaults 
    extendTimeline: true //According to the docs, this is how effects are called from timelines.
});

first_tears_target_4 = "#right_tear_4";
second_tears_target_4 = "#left_tear_4";

animations[emoji4_index][0] = gsap.timeline({repeat: -1, yoyo: false, paused: true})
    .fallingTears(first_tears_target_4, "")
    .fallingTears(second_tears_target_4, "0.75");

animations[emoji4_index][1] = gsap.fromTo([".eyeballs_4", ".ears_4"],{
    yPercent: -60,
    ease: "none",
    repeat: -1,
    paused: true
},
{
    duration: 2,
    yPercent: 0,
    ease: "bounce.out",
    repeat: -1,
    paused: true
});

// ########## EMOJI 5 ###########
// ##############################
let emoji5_index = 4;
animations[emoji5_index][0] = gsap.fromTo([".eyeballs_5"],{
    scale: 0.6,
    duration:1,
    transformOrigin: "center",
    ease: "bounce.inOut",
    repeat: -1,
    paused: true,
},
{
    scale: 1.4,
    ease: "bounce.inOut",
    repeat: -1,
    paused: true
});

// ########## EMOJI 6 ###########
// ##############################
let emoji6_index = 5;

gsap.registerEffect({
    name: "sleepingZ",
    effect: (targets, config) => {
        return gsap.fromTo(targets, 
            {
                duration: config.duration,
                opacity: 1,  //appear
            },
            {
                duration: config.duration,
                opacity: 0,  //dissapear
                yPercent:-80, //move up
                xPercent:80,//move to the right
                scale: 0.7//become smaller
            }); 
    },
    defaults: {duration: 3}, //effect durarion. Total is this + all the tweens delays on the timeline.
    extendTimeline: true //According to the docs, this is how effects are called from timelines.
});

animations[emoji6_index][0] = gsap.timeline({repeat: -1, yoyo: false, paused: true})
    .set("#sleep_6",{
        opacity:0
    })
    .fromTo("#mouth_6", {
        scale: 1.5,
        transformOrigin: "center",
    },
    {
        scale: 0.5,
        duration: 1,
    })
    .sleepingZ("#sleep_6", "1.25")
    .to("#mouth_6",{
        scale: 1.5,
        transformOrigin: "center",
        duration: 0.5,
    }); //Overlap by half a second with the sleepingZ effect.


// ########## EMOJI 7 ###########
// ##############################

let emoji7_index= 6;

animations[emoji7_index][0] = gsap.timeline({repeat: -1, yoyo: true, paused: true})
.fromTo("#emoji7_head", {
    scale: 1.6,
    transformOrigin: "center",
}, {
    scale: 0.8,
    duration: 2.5,
    ease: "power2.inOut"
})

animations[emoji7_index][1]= gsap.timeline({repeat: -1, yoyo: false, paused: true})
.fromTo("#left_ear_smoke_7", {
    opacity:0,
}, {
    opacity: 0,
    yPercent: +10,
    duration: 1
})
.fromTo("#left_ear_smoke_7", {
    opacity:1,
}, {
    opacity: 0,
    xPercent: -10,
    yPercent: -50,
    duration: 4
});

animations[emoji7_index][2]= gsap.timeline({repeat: -1, yoyo: false, paused: true})
.fromTo("#right_ear_smoke_7", {
    opacity:0,
}, {
    opacity: 0,
    yPercent: -10,
    duration: 1
})
.fromTo("#right_ear_smoke_7", {
    opacity:1,
}, {
    opacity: 0,
    xPercent: 10,
    yPercent: -50,
    duration: 4
});

animations[emoji7_index][3]= gsap.timeline({repeat: -1, paused: true})
.fromTo(".eyes_7", {
    fill: "white",
    stroke: "white"
}, {
    fill: "red",
    stroke: "red",
    duration: 2.5,
});

animations[emoji7_index][4]= gsap.timeline({repeat: -1, yoyo: true, paused: true})
.fromTo("#left_eye_brow_7", {
    transformOrigin: "0% 50%",
    rotate: 0,
    y: 0,
    xPercent: -40
}, {
    rotate: 25,
    duration: 2.5,
});
animations[emoji7_index][5]= gsap.timeline({repeat: -1, yoyo: true, paused: true})
.fromTo("#right_eye_brow_7", {
    transformOrigin: "100% 50%",
    rotate: 0,
    y: 0,
    xPercent: -640 //This one is offset by a lot. 
}, {
    rotate: -25,
    duration: 2.5,
});
// ########## EMOJI 8 ###########
// ##############################
let emoji8_index = 7;

animations[emoji8_index][0] = gsap.to("#left_eyeball_8", {
    rotation: "360",
    repeat: -1,
    transformOrigin: "100% 50%", //make the center of rotation the point of the eyeball that is closest to the center of the eye.
    duration: 2,
    paused: true,
    ease: "none" //no easing because it is a continuous loop
});
animations[emoji8_index][1] = gsap.to("#right_eyeball_8", {
    rotation: "-360",
    repeat: -1,
    transformOrigin: "0% 50%", //make the center of rotation the point of the eyeball that is closest to the center of the eye.
    duration: 2,
    paused: true,
    ease: "none" 
});


animations[emoji8_index][2]= gsap.timeline({repeat: -1, yoyo: false, paused: true})
.fromTo("#falling_tooth_8", {
    scaleY: 0.10,
}, {
    scaleY: 1,
    duration: 1.2
}
).to ("#falling_tooth_8", {
    yPercent: 170,
    duration: 0.88
}).to ("#falling_tooth_8", {
    opacity: 0,
    duration: 0.44
}); //start 0.4 seconds before the end of the previous animation. Source: https://greensock.com/docs/v3/GSAP/Timeline
    
// ########## EMOJI 9 ###########
// ##############################
let emoji9_index = 8;

animations[emoji9_index][0] = gsap
.to("#left_eye_9", {
    xPercent:25,
    duration: 0.5,
    paused: true,
    repeat: -1
});
animations[emoji9_index][1] = gsap
.to("#right_eye_9", {
    xPercent:-25,
    duration: 0.5,
    paused: true,
    repeat: -1
});
animations[emoji9_index][2] = gsap.
to("#nose_9", {
    rotation: "360",
    yPercent: -25,
    repeat: -1,
    paused: true,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: "elastic.inOut" 
});
animations[emoji9_index][3] = gsap.
fromTo("#mouth_9", {
    transformOrigin: "50% 50%",
    scaleY:0.1,
},{
    scaleY:0.5,
    yoyo: true,
    repeat:-1,
    paused: true
});


// ########## EMOJI 10 ###########
// ###############################
let emoji10_index = 9;
animations[emoji10_index][0]= gsap.set("#right_eye_p2_10, #right_eye_p1_10, #left_eye_p1_10, #left_eye_p2_10",{
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    repeat: 1,
});
animations[emoji10_index][1]= gsap.timeline({repeat: -1, yoyo: false, paused: true})
.to("#eyes_10", {
    opacity: 0,
    duration: 2,
})
.fromTo("#left_eye_p1_10",{
    opacity: 1,
     yPercent: 100, //object's height.  Doing this because of the transformOrigin below... 
    transformOrigin: "0% 100%", //The lines will "grow"
}, {
    scaleX:1,
    scaleY:1,
    opacity: 1,
    duration: 1,
})
.fromTo("#left_eye_p2_10",{
    opacity: 1,
    transformOrigin: "0% 0%", 
}, {
    scaleX:1,
    scaleY:1,
    opacity: 1,
    duration: 1,
})
.fromTo("#right_eye_p1_10",{
    opacity: 1,
    yPercent: 100, //object's height.
    transformOrigin: "0% 100%",
}, {
    scaleX:1,
    opacity: 1,
    scaleY:1,
    duration: 1,
})
.fromTo("#right_eye_p2_10",{
    opacity: 1,
    transformOrigin: "0% 0%", 
}, {
    scaleX:1,
    opacity: 1,
    scaleY:1,
    duration: 1,
})
.to("#nose_10", {
    rotation: "180",
    transformOrigin: "50% 50%",
    duration: 1,
})
.to("#nose_10", {
    delay: 1.5, // make the animation stop for a second... Source: https://greensock.com/docs/v3/GSAP/Timeline/delay()
    rotation: "-180",
    transformOrigin: "50% 50%",
    duration: 0.3,
});
//Turns out reversing the animations sets index[0] as the starting point of this emoji.
// That is why I also set opacity to 1 in each animation.


// ########## EMOJI 11 ###########
// ###############################
let emoji11_index= 10;

animations[emoji11_index][0] = gsap
.fromTo(".glasses_11", {
    yPercent: -100,
    transformOrigin: "100% 100%"
}, {
    yPercent: 0,
    repeat: -1,
    paused: true,
    duration: 3
});
animations[emoji11_index][1] = gsap
.fromTo("#teeth_11", {
    scaleY:0.1,
    transformOrigin: "center"
}, {
    scaleY:1,
    duration: 3,
    paused: true,
    repeat: -1
})
// ########## EMOJI 12 ###########
// ###############################
let emoji12_index = 11;

animations[emoji12_index][0] = gsap
.fromTo("#termometer_status_12",{
    scaleX: 0,
    transformOrigin: "0% 100%",
    yPercent: 95,
    // yPercent:-385,
    // xPercent: 67
}, {
    scaleX:1.6,
    scaleY: 1.05,
    duration: 1.5,
    paused: true,
    repeat: -1,
});

animations[emoji12_index][1] = gsap
.fromTo(".eyeballs_12",{
    yPercent: -65,
}, {
    yPercent: 0,
    duration: 1.5,
    paused: true,
    repeat: -1,
});

// ########## EVENT LISTENERS ###########
// ######################################

for (let i= 0; i<12; i++){
    let id_int = i + 1; //We start at 0, but the first emoji is "1";
    let emoji_id = `emoji${id_int}`;
    console.log(emoji_id);
    emojis[i] = document.getElementById(emoji_id);
}
//Add event listener to each emoji

emojis.forEach(function(emoji) {
    let emojiIndex = emojis.indexOf(emoji);
    let currentEmoji = emojiIndex+1; //For display purposes. Work with emojiIndex for the index;
    let eventListeners = ["mouseenter", "click"];
    eventListeners.forEach(function(evt){
        emoji.addEventListener(evt, function(){
            animations[emojiIndex].forEach(function(anim){
                if (anim._dur > 0){
                    // There is a gsap.set animation on emoji #10 that gets played the event listener gets triggered.
                    // Not executing that here as I only need it once onpageload.
                    // S
                    anim.play();
                    console.log(`Playing animation #${animations[emojiIndex].indexOf(anim)} for emoji #${currentEmoji}`);
                }
                else{
                    console.log(`Animation #${animations[emojiIndex].indexOf(anim)} for emoji #${currentEmoji} has a duration of 0. Not playing`);
                }
            });
    });
    });

    emoji.addEventListener("mouseleave", function(){
        animations[emojiIndex].forEach(function(anim){
            console.log(`Pausing animation for emoji #${currentEmoji}`);
            anim.pause();
        });
    });

});


// Handle buttons
function playAll(){
    console.log("Playing all animations");
    animations.forEach(function(emoji_anims){
        let emojiIndex = animations.indexOf(emoji_anims);
        let currentEmoji = emojiIndex+1;
        emoji_anims.forEach(function(anim){
           if (anim._dur > 0){
                    // There is a gsap.set animation on emoji #10 that gets played the event listener gets triggered.
                    // Not executing that here as I only need it once onpageload.
                    // S
                    anim.play();
                    console.log(`Playing animation #${animations[emojiIndex].indexOf(anim)} for emoji #${currentEmoji}`);
                }
                else{
                    console.log(`Animation #${animations[emojiIndex].indexOf(anim)} for emoji #${currentEmoji} has a duration of 0. Not playing`);
                }
        })
    });
}

function pauseAll(){
    console.log("Pausing all animations");
    animations.forEach(function(emoji_anims){
        emoji_anims.forEach(function(anim){
            anim.pause();
        })
    });
}

function reverseAll(){
    console.log("Playing all animations in reverse");
    animations.forEach(function(emoji_anims){
        let emojiIndex = animations.indexOf(emoji_anims);
        let currentEmoji = emojiIndex+1;
        emoji_anims.forEach(function(anim){
            if (anim._dur > 0){
                anim.reverse();
                console.log(`Reversing animation #${animations[emojiIndex].indexOf(anim)} for emoji #${currentEmoji}`);
            }
            else{
                console.log(`Animation #${animations[emojiIndex].indexOf(anim)} for emoji #${currentEmoji} has a duration of 0.`);
            }
        })
    });
}



let allStars = document.querySelectorAll('.stars g'); //Get all the background stars in array
let stars_anim = Array.from(new Array(allStars.length), () => new Array()) //Two dimensional array with room all stars;

for (let i = 0; i < allStars.length; i++) {
    //Get height and width of (browser) windows: https://www.w3schools.com/jsref/prop_win_innerheight.asp
    let w = window.innerWidth;
    let h = window.innerHeight;
    let negative_w = w*-1;
    let negative_h = h*-1;
    let Xcoordinate = gsap.utils.random(negative_w, w, 10);
    let Ycoordinate = gsap.utils.random(negative_h, h, 10);
    let childOrder = i + 1;
    let target = ".stars g:nth-child(" + childOrder + ")";
    if(document.querySelectorAll(target).length > 0){ //Avoid non existing elements
        stars_anim[i][0] = gsap.timeline({repeat: -1, yoyo: true, paused: false})
        .to(target, {
            x : Xcoordinate,
            y : Ycoordinate,
            duration : 25
        }).to(target, {
            x : Xcoordinate*-1, //Come back and go in the oposite direction.
            y : Ycoordinate*-1,
            duration : 50  //Needs to be twice as much to keep the speed consistent. The distance is twice as much as the previous animation.
        });
        stars_anim[i][1] = gsap.timeline({repeat: -1, yoyo: true, paused: false})
        .to(target, {
            opacity: 0.9,
            duration: gsap.utils.random(10, 15, 0.5) //So they are not all the same.
        }).to(target, {
        opacity:0.2,
        duration: 3
        });
}
}
//Get height of emoji container to and assign it to stars background to avoid overflow
//Source: https://www.w3schools.com/jsref/prop_element_offsetheight.asp
// document.getElementsByClassName("main_container")[0].offsetHeight

// fake6 = gsap.to(".stars g:nth-child(2)",  {
//     duration: 5,
//     scaleX: 6,
//     repeat: -1,
//     paused: false
// });