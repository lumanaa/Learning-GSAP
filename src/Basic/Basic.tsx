import "./basic.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function BasicsPage() {
  useGSAP(() => {
    gsap.to("#box", {
      x: 250,
      duration: 2,
      ease: "power2.inOut",
      rotate: 360,
      backgroundColor: "#bfbce1",
      borderRadius: "50%",
      scale: 0.5,
      yoyo: true,
      repeat: -1,
    });
  });
  useGSAP(() => {
    gsap.to("#box2", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "circ.inOut",
    });
  });
  useGSAP(() => {
    gsap.from("#box3", {
      x: 250,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease: "power1.inOut",
    });
  });
  useGSAP(() => {
    gsap.fromTo(
      "#box4",
      {
        x: 0,
        rotation: 0,
        borderRadius:'0%'
      },
      {
        x: 250,
        rotation: 360,
        duration: 2,
        yoyo: true,
        repeat: -1,
        borderRadius:'100%',
        ease:'bounce.out'
      }
    );
  });

  return (
    <div className='basic-container'>
      {" "}
      <div className='basic-page'>
        <div id='box'></div>
        <div id='box2'></div>
        <div id='box3'></div>
        <div id='box4'></div>
      </div>
    </div>
  );
}

export default BasicsPage;
