import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Banner from './Banner';
import Header from './Header';
import Contact from './Contact';


const styles = {
  body: `
    flex
    items-center	
    w-full
    flex-col
    relative
  `,
  heroContainer: `
    h-screen
    grid-cols-1
    grid
    grid-rows-6
    max-w-5xl
    w-full
    bg-gray-100
  `,
  missionContainer: `
    w-full
    h-auto
    bg-black
    absolute
    top-0
  `,
  missionBlurb: `
    text-white
    font-sans
    font-normal
    text-6xl
    max-w-4xl
    mx-auto
    my-36
    tracking-wide
    leading-tight
  `
}

gsap.registerPlugin(ScrollTrigger)

const Website = () =>  {

  React.useLayoutEffect(() => {
    
    gsap.timeline({
      scrollTrigger: {
          trigger: "#MISSION",
          scrub: 0.2,
          start: "top bottom",
          end: "top top",
          pin: "#HERO",
          pinSpacing: false,
          markers: true,
          id: "hero-pin"
      }})
      .to("#HEADER", {scale: 0.8, duration: 2, opacity: 0})
      .to("#BANNER", {duration: 3, y: -100}, "<")
      .from("#MISSION", {y: "+=100vh", duration: 3}, "<")
      .from("#MISSIONBLURB", {y: "+=10vh", duration: 1, opacity: 0}, "<+=1")


      gsap.timeline({
        trigger: "#CONTACT",
        scrub: 0.2,
        start: "top bottom",
        end: "bottom bottom",
        markers: true,
        id: "taco-taco"
      })
      // .to("#MISSIONBLURB", {scale: 0.8, duration: 2, opacity: 0})
      

  });


  return (
    <div className={styles.body}>
      <div id="HERO" className={styles.heroContainer}>
        <Header/>
        <Banner/>
      </div>
      <div id="MISSION" className={styles.missionContainer}>
        <div id="MISSIONBLURB" className={styles.missionBlurb}>
          Our time is everything. It is the foremost non-renewable resource that our ability to have an impact on society hinges on. 
          <br /> <br />
          But in a world overrun by distracting stimuli, control over our time is slowly slipping out of our hands.
          <br /> <br />
          Mindfully authoring the use of our time is tedious and time consuming. Tools that enable this to be done more effectively are necessary now more than ever before.
          <br /> <br />
          I’ve decided to join Magical as CPO so that people everywhere can stand a better chance at making time for the things that matter.        
          </div>
          <Contact/>
      </div>
    </div>
  )
}

export default Website;