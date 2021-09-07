import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Banner from './Banner';
import Header from './Header';
import Contact from './Contact';


/* TODOs
  [x] Add circular font
  [] Add banner img
  [x] Add header
  [x] Fix CTA anim to start later
*/

const styles = {
  body: `
    flex
    items-center	
    w-auto
    flex-col
  `,

  heroContainer: `
    h-screen
    grid-cols-1
    grid
    grid-rows-6
    max-w-screen-2xl
    w-full
    mx-10
    z-0
  `,
  missionContainer: `
    w-full
    h-auto
    bg-black
    top-0
    z-10
  `,
  missionBlurb: `
    text-white
    font-sans
    font-normal
    text-6xl
    max-w-screen-2xl
    mx-auto
    my-36
    tracking-wide
    leading-tight
    px-4 sm:px-12 md:px-20 lg:px-28
  `
}

gsap.registerPlugin(ScrollTrigger)

const Website = () =>  {

  React.useLayoutEffect(() => {
    
    gsap.timeline({
      scrollTrigger: {
          trigger: "#MISSION",
          scrub: 0.6,
          start: "top bottom",
          end: "top top",
          pin: "#HERO",
          pinSpacing: false,
          // markers: true,
          snap: true,
          id: "hero-pin"
      }})
      .to("#HEADER", {duration: 3, opacity: 0})
      .to("#BANNER", {duration: 3, y: "-10%"}, "<")
      .from("#MISSIONBLURB", {y: "+=20vh", duration: 3, opacity: 0}, "<")


      gsap.timeline({
        scrollTrigger: {
        trigger: "#CONTACT",
        scrub: 0.2,
        start: "top 80%",
        end: "bottom bottom",
        // markers: true,
        id: "taco-taco"
      }})
      .from(["#JOIN", "#INTRO", "#PARTY"], {stagger: 1, y: "200px", duration: 2, opacity: 0})
      
      

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