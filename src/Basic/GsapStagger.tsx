import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function GsapStagger() {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 500,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      stagger:{
        amount:1.5,
        grid :[2,1],
        axis:'y',
        ease:'circ.inOut',
        from:'center'

      }
    });
  },[]);
  return (
    <>
      <div className='stagger-container'>
        <div className='stagger-box sbox1'></div>
        <div className='stagger-box sbox2'></div>
        <div className='stagger-box sbox3'></div>
        <div className='stagger-box sbox4'></div>
        <div className='stagger-box sbox3'></div>
        <div className='stagger-box sbox2'></div>
        <div className='stagger-box sbox1'></div>
      </div>
    </>
  );
}

export default GsapStagger;
