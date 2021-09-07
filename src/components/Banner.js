import React from 'react';


const styles = {
  container: `
    w-auto
    h-full
    row-span-5
    grid
    grid-cols-6
    grid-rows-6
  `,

  img: `
    bg-gray-100
    col-start-1
    col-end-7
    row-start-1
    row-end-7
    z-0
    bg-hero-banner
    bg-contain
    bg-no-repeat
    bg-right-bottom
  `,

  text: `
    pl-4 sm:pl-12 md:pl-20 lg:pl-28
    text-6xl
    leading-snug
    col-start-1
    col-end-4
    row-start-4
    row-end-6
    z-10
  `
}


const Banner = () =>  {
  return (
    <div id="BANNER" className={styles.container}>
      <div className={styles.text}>Hey, I'm Didi, <br/> CPO at Magical</div>
      <div className={styles.img}></div>
    </div>
  )
}

export default Banner;