import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerr() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scrollRef.current) return;
      const boxes = gsap.utils.toArray(
        scrollRef.current.children
      ) as HTMLElement[];
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  ); //scope that way it will know the exactly when the animation has to happen

  return (
    <>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <h2>SCROLL DOWN</h2>
      <div className='scroll-body' ref={scrollRef}>
        <div className='scroll-blue'></div>
        <div className='scroll-orange'></div>
      </div>
    </>
  );
}

export default ScrollTriggerr;
