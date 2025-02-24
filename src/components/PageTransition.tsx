import { useRef } from "react";
import styles from "./PageTransition.module.scss";
import Scene from "../assets/heypaul.mp4";
import { useLocation } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PageTransition = ({setStatus}) => {
  const animationRef = useRef(null);
  const location = useLocation();

  useGSAP(() => {
    console.log({ animationRef });
    let tl = gsap.timeline({autoRemoveChildren: true});
    tl.to(animationRef?.current?.children[0], {
      y: -innerHeight,
      duration: .5,
      ease: "power2.inOut",
    }).addLabel("first");
    tl.to(animationRef?.current?.children[1], {
      y: -innerHeight,
      duration: 4,
      ease: "power4.in",
    }).addLabel("second");
    tl.to(animationRef?.current?.children[2], {
        y: -innerHeight,
        duration: .5,
        ease: "power2.out",
      }).addLabel("three").call(setStatus);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.videoContainer} ref={animationRef}>
        <div className={styles.first} />
        <div className={styles.second}>
          <video
            className="video"
            src={Scene}
            muted
            autoPlay
            playsInline
          ></video>
        </div>
        <div className={styles.third} />
      </div>
    </div>
  );
};

export default PageTransition;
