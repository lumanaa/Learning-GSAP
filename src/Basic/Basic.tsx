import "./basic.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function BasicsPage() {
  useGSAP(() => {
    gsap.to("#box", {
      x: 1000,
      duration: 2,
      ease: "power2.inOut",
      rotate: 360,
      backgroundColor: "#bfbce1",
      borderRadius: "50%",
      scale: 0.5,
      yoyo:true,
      repeat:-1
    });
  });
  useGSAP (()=>{
    gsap.to("#box2",{
      x:250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration:2,
      ease: 'circ.inOut'
    })
  })

  return (
    <div className='basic-page'>
      <div id='box'></div>
 
      <div id='box2'></div>
    </div>
  );
}

export default BasicsPage;
