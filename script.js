var tl=gsap.timeline()

gsap.from("#nav img",{
    x:-100,
    duration:.8,
    delay:.8,
    opacity:0
})
gsap.from("#nav h3",{
    y:-100,
    duration:.8,
    delay:.8,
    opacity:0
})
gsap.from("#nav h4,#btn",{
    x:100,
    duration:.8,
    delay:.8,
    opacity:0
})
tl.from("#img1,#img2,#img3,#img4",{
    scale:0,
    opacity:0,
    duration:.8
})
tl.from("#main h1",{
    y:100,
    opacity:0,
    duration:.5
})
tl.from("h5",{
    scale:0,
    opacity:0
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:1,
    yoyo:true
})