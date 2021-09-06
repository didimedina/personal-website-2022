import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';


const styles = {
  CTAContainer: `
    grid-cols-2
    grid
    grid-rows-[auto, auto]
    max-w-5xl
    w-full
    gap-14
    mx-auto
    mb-40
  `,

  fillCTA: `
  bg-white
    p-12
    col-span-2
  `,

  fillHeading: `
    text-4xl
    text-left
    font-sans
  text-black
    mb-4
  `,

  fillDescription: `
  text-2xl
  text-left
  font-sans
text-black
  `,

  pillCTA: `
  bg-transparent
  p-12
  col-span-1
  border
  border-white
  `,

  pillHeading: `
    text-4xl
    text-left
    font-sans
  text-white
    mb-4
  `,

  pillDescription: `
    text-2xl
    font-sans
    text-left
  text-white
  `,
}


const Contact = () =>  {

  const animationRef = useRef(null)


  React.useLayoutEffect(() => {
    
    animationRef.current = gsap.to("#ARROW", {paused: true, x: 50 })

  }, []);

  const onMouseEnterHandler = () => {
    animationRef.current.play();
  };



  return (
    <div id="CONTACT" className={styles.CTAContainer}>
      <button id="JOIN" className={styles.fillCTA}>
        <div id="ARROW" className={styles.fillHeading} onMouseEnter={onMouseEnterHandler}>Join my team →</div>
        <div className={styles.fillDescription}>If you’re a brilliant product person who cares deeply about helping others make time for what matters, I’d love to hear from you.</div>
      </button>
      <button id="INTRO" className={styles.pillCTA}>
        <div className={styles.pillHeading}>Get intro’d →</div>
        <div className={styles.pillDescription}>If you’re interested in hiring me, I’m currently unavailable. However, if you have an awesome project I’d be happy to introduce you to someone I trust.</div>
      </button>
      <button id="PARTY" className={styles.pillCTA}>
        <div className={styles.pillHeading}>Throw a party →</div>
        <div className={styles.pillDescription}>If you’re into community building and want to collaberate on hosting a Peer to Peir dinner together, get in touch, it’ll be fun and somewhat professional.</div>
      </button>
    </div>
  )
}

export default Contact;