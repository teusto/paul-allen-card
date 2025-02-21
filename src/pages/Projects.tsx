import { useRef } from "react";
import gsap, { Power4 } from "gsap";
import Logo from "../assets/logo.svg";
import styles from "../styles/Projects.module.scss";
import PageTitle from "../components/PageTitle";
import BusinessCard from "../components/BusinessCard";

const Projects = () => {
  const businessCardUniqueRef = useRef([]);

  const animateHover = (businessCardID: number) => {
    gsap.to(businessCardUniqueRef.current[businessCardID], {
      ease: Power4.easeInOut,
      rotate: '0deg',
      duration: 1
    });
    let a = businessCardUniqueRef.current.splice(businessCardID, 1)
    console.log({a, businessCardUniqueRef})
    gsap.to([businessCardUniqueRef.current], {backgroundColor: '#00000025', filter: 'blur(.2rem)', ease: Power4.easeInOut, duration: 1, stagger: .1})
  };

  const animateExitHover = (businessCardID: number) => {
    // study on how to give a name to the animation and here simple do somethin like animation.revert() or use timeline and timestamps
  }

  const animateClick = (BusinessCardID: number) => {};

  return (
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
  );
};

export default Projects;
