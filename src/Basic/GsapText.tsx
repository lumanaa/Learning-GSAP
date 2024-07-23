import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function GsapText() {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        delay: 1,
        stagger: 0.5,
        y: 20,
      }
    );
  }, []);
  return (
    <>
      <div className='text-body'>
        <h1 id='text'>GSAP Text</h1>
        <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          reiciendis! Reprehenderit repellendus corrupti, eaque dolor quae nulla
          labore, tenetur sequi eum molestias nobis, nisi dignissimos dolores ad
          earum ea unde
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          vitae accusamus cupiditate officia, soluta modi id esse distinctio.
          Quisquam neque aliquid mollitia adipisci fugit cum sequi perferendis
          minus. Rem.
        </p>
        <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          reiciendis! Reprehenderit repellendus corrupti, eaque dolor quae nulla
          labore
        </p>
        <div className='para'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sequi
          dicta officiis quod veritatis officia repudiandae ipsa repellendus
          architecto dolorum, numquam quas excepturi, in a? Quia nemo ea iure
          explicabo.
        </div>
      </div>
    </>
  );
}

export default GsapText;
