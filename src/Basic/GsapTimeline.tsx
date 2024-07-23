import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function GsapTimeline() {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
      backgroundColor: "#B4E380",
    });
    timeline.to("#yellow-box", {
      y: 250,
      borderRadius: "20%",
      duration: 2,
      ease: "back.inOut",
      backgroundColor: "#FFAAAA",
    });
    timeline.to("#yellow-box", {
      x: 500,
      borderRadius: "8px",
      ease: "back.inOut",
      duration: 2,
      backgroundColor: "#E68369",
    });
    timeline.to('#yellow-box',{
      x:700,
      y:0,
      rotation:0,
      ease:'back.inOut',
      duration:2,
      backgroundColor: '#83B4FF'
    })
  },[]);

  return (
    <>
    <div id='yellow-box'></div>
    <div className="btn-container">
      <button className="play-btn" onClick={()=>{
        if(timeline.paused()){
          timeline.play();
        } else {
          timeline.pause();
        }
      }}>Play/Pause</button>
    </div>

   </>
  )
 
}

export default GsapTimeline;
