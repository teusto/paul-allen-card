import { useEffect, useRef, useState } from "react";
import gsap, { Power4 } from "gsap";
import Logo from "../assets/logo.svg";
import styles from "../styles/Projects.module.scss";
import PageTitle from "../components/PageTitle";
import BusinessCard from "../components/BusinessCard";
import PageTransition from "../components/PageTransition";

const Projects = () => {
  const businessCardUniqueRef = useRef([]);
  const [renderOpening, setRenderOpening] = useState(false);

  const animateHover = (businessCardID: number) => {
    console.log({businessCardID})
    gsap.to(businessCardUniqueRef.current[businessCardID], {
      ease: Power4.easeInOut,
      rotate: "0deg",
      duration: 1,
    });
    let copy = businessCardUniqueRef.current.slice(); 
    let a = copy.splice(businessCardID, 1);
    console.log({ a, businessCardUniqueRef, copy });
    gsap.to([copy], {
      backgroundColor: "#00000010",
      filter: "blur(.1rem)",
      ease: Power4.easeInOut,
      duration: 1,
      stagger: 0.1,
    });
  };

  const animateExitHover = (businessCardID: number, deg: number) => {
    // study on how to give a name to the animation and here simple do somethin like animation.revert() or use timeline and timestamps
    console.log(businessCardUniqueRef.current[businessCardID], businessCardID, 'hover')
    let copy = businessCardUniqueRef.current.slice();
    let a = copy.splice(businessCardID, 1);
    gsap.to(businessCardUniqueRef.current[businessCardID], {ease: "back.out", rotate: `${deg}deg`, duration: .5})
    gsap.to([copy], {ease: "back.out", backgroundColor: '#fefbfa', filter: 'blur(0)'})
  };

  const animateClick = (businessCardID: number) => {};

  const setAnimationEnd = () => {
    setRenderOpening(!renderOpening);
  };

  useEffect(() => {
    console.log("changing value of rendering", renderOpening);
  }, [renderOpening]);

  return (
    <>
      {renderOpening && <PageTransition setStatus={setAnimationEnd} />}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <PageTitle />
          <div className={styles.logoContainer}>
            <img src={Logo} />
          </div>
          <BusinessCard
            ref={(r) => (businessCardUniqueRef.current[0] = r)}
            position={{ top: "130px", left: "100px" }}
            elevation={1}
            onHover={animateHover}
            onHoverExit={animateExitHover}
            id={0}
            angle="10deg"
          />
          <BusinessCard
            ref={(r) => (businessCardUniqueRef.current[1] = r)}
            position={{ top: "160px", left: "100px" }}
            elevation={2}
            onHover={animateHover}
            onHoverExit={animateExitHover}
            id={1}
            angle="-5deg"
          />
          <BusinessCard
            ref={(r) => (businessCardUniqueRef.current[2] = r)}
            position={{ top: "155px", left: "400px" }}
            elevation={3}
            onHover={animateHover}
            onHoverExit={animateExitHover}
            id={2}
            angle="-20deg"
          />
          <BusinessCard
            ref={(r) => (businessCardUniqueRef.current[3] = r)}
            position={{ top: "200px", left: "200px" }}
            elevation={4}
            onHover={animateHover}
            onHoverExit={animateExitHover}
            id={3}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
