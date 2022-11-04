
function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
show();
var menu=document.querySelector("#menu")
var full=document.querySelector("#fullscreen-nav")
var nav=document.querySelector("#nav>h3")
var nav=document.querySelector("#navpart2 h3")
var nav2=document.querySelector("#line1")
var nav2=document.querySelector("#line2")

var flag=0;

menu.addEventListener("click",function(){
  if(flag===0){
  full.style.transform=`translateY(0%)`
  nav.style.color="#232025"
  nav2.style.color="#232025"
  line1.style.backgroundColor="#232025"
  line2.style.backgroundColor="#232025"
  line1.style.transform=`rotate(120deg)`
  line2.style.transform=`rotate(240deg)`
  line1.style.width=`100%`
  flag=1
}
else{
  full.style.transform=`translateY(-100%)`
  nav.style.color="#d5cdc4"
  nav2.style.color="#d5cdc4"
  line1.style.backgroundColor="#d5cdc4"
  line2.style.backgroundColor="#d5cdc4"
  line1.style.transform=`rotate(0deg)`
  line2.style.transform=`rotate(0deg)`
  line1.style.width=`100%`
  flag=0

}

})

gsap.from("#main-text",{
  opacity:0,
  duration:2,
  onStart:function(){
    $('#main-text').textillate({ in: { effect: 'fadeInUp' } });

  }
})
gsap.from("#sub-text h3",{
  opacity:0,
  duration:2,
  onStart:function(){
    $('#sub-text h3').textillate({ in: { effect: 'fadeInUp' } });

  }
})
gsap.from("#sub2-text h4",{
  opacity:0,
  duration:2,
  onStart:function(){
    $('#sub2-text  h4').textillate({ in: { effect: 'fadeInUp' } });

  }
})
