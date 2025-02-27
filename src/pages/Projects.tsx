// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import gsap, { Power4 } from "gsap";
import Logo from "../assets/logo.svg";
import styles from "../styles/Projects.module.scss";
import PageTitle from "../components/PageTitle";
import BusinessCard, { position } from "../components/BusinessCard";
import PageTransition from "../components/PageTransition";
import Descriptions from "../components/Descriptions";

type INFODATA = {
  title: string;
  descriptions: {
    paragraphs: string[];
    screen: string;
  };
  links: {
    [key: string]: string;
  };
  stack: string[];
  positions: position;
};

const INFO: INFODATA[] = [
  {
    title: `Harvest DAO`,
    descriptions: {
      screen: "",
      paragraphs: [
        `The idea for the Harvest Moon DAO came from blending my love for gaming and blockchain. Inspired by games like Harvest Moon, I imagined a decentralized community where members could collectively decide what to plant and harvest on shared land. I started by sketching the user flow, focusing on simplicity and transparency. Using React and Sass, I designed a clean, intuitive interface that felt approachable for non-technical users. The real challenge was integrating DAO concepts—like voting and proposals—into a seamless experience.`,
        `Development was a deep dive into Solidity and Hardhat to build the smart contracts that power the DAO. I created a system where users could propose crops, vote on decisions, and track harvests—all on-chain. Integrating the frontend with the blockchain was tricky, but React’s flexibility made it manageable. Testing was rigorous, especially for edge cases in voting and fund allocation. It’s a project that reflects my passion for blending creativity with technology.`,
      ],
    },
    links: {
      github: "https://github.com/teusto/harvest-moon-dao",
    },
    stack: [
      "Remix",
      "SASS",
      "Solidity",
      "Blockchain",
      "DAO",
      "Hardhat",
      "web3",
    ],
    positions: {
      top: "110px",
      left: "200px",
      angle: "-15deg",
    },
  },
  {
    title: `Whos's Knock?`,
    descriptions: {
      screen: "",
      paragraphs: [
        "Who’s Knocks is a secure access control app that lets users prove their access rights without ever revealing their credentials. Using zero-knowledge proofs (ZKP) and blockchain, it ensures that only authorized individuals can gain entry—whether it's a physical door or a digital system—without exposing sensitive data. No more passwords, no more centralized databases full of vulnerable info. Just cryptographic proof that you have the right to enter, and nothing more.",
        "On the tech side, Who’s Knocks combines ZKP for privacy, blockchain for trust, and smart contracts for automation. The system is fully decentralized, meaning no single entity controls access records, and every verification is tamper-proof and auditable. It’s built with security-first principles, leveraging cutting-edge cryptographic techniques to create a frictionless yet bulletproof authentication process.",
      ],
    },
    links: {
      github: "https://github.com/teusto/WhosKnocks",
    },
    stack: ["React", "SASS", "Node.js", "Blockchain", "ZPK", "Solidity", "Nx"],
    positions: {
      top: "160px",
      left: "400px",
      angle: "15deg",
    },
  },
  {
    title: `Lara's Holistic Site`,
    descriptions: {
      screen: "",
      paragraphs: ["Test", "Tes2"],
    },
    links: {
      github: "https://github.com/teusto/whosknock",
    },
    stack: ["React", "SASS", "GSAP", "Node.js"],
    positions: {
      top: "330px",
      left: "420px",
      angle: "-20deg",
    },
  },
  {
    title: `This Portfolio`,
    descriptions: {
      screen: "",
      paragraphs: [
        `The idea for my portfolio was inspired by the Paul Allen’s business card scene from American Psycho—minimalist yet memorable. I sketched wireframes, aiming for a virtual "card" that showcased my skills with subtle interactivity. Using react, I focused on clean HTML and CSS, obsessing over typography, spacing, and animations to mimic the movie scene. Balancing aesthetics and usability was the biggest challenge, but every pixel felt intentional, like crafting a digital first impression.`,
        `Development was a mix of simplicity and polish. I built the core with React and SASS, adding GSAP sparingly for hover effects and smooth transitions. Deployment via GitHub Pages was straightforward, and automating builds with GitHub Actions streamlined updates. Now, when someone interacts with the card, I hope they feel the care behind every detail—a tiny piece of my brain, live on the internet.`,
      ],
    },
    links: {
      github: "https://github.com/teusto/paul-allen-card",
    },
    stack: ["React", "SASS", "GSAP"],
    positions: {
      top: "220px",
      left: "290px",
      angle: "0deg",
    },
  },
];

{
  /*
  
  */
}
const Projects = () => {
  const businessCardUniqueRef = useRef([]);
  const descriptionsRef = useRef([]);
  const [renderOpening, setRenderOpening] = useState(true);
  const [showDescriptions, setShowDescriptions] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
  let navigate = useNavigate();

  const animateHover = (businessCardID: number) => {
    console.log(`Entering hover of -- ${businessCardID}`);
    gsap.to(businessCardUniqueRef.current[businessCardID], {
      ease: Power4.easeInOut,
      rotate: "0deg",
      duration: 1,
    });
    let copy = businessCardUniqueRef.current.slice();
    let a = copy.splice(businessCardID, 1);
    gsap.to([copy], {
      backgroundColor: "#00000005",
      filter: "blur(.25rem)",
      ease: Power4.easeInOut,
      duration: 1,
      stagger: 0.1,
    });
  };

  const animateExitHover = (businessCardID: number, deg: number) => {
    // study on how to give a name to the animation and here simple do somethin like animation.revert() or use timeline and timestamps
    console.log(`Exiting hover of -- ${businessCardID}`);
    let copy = businessCardUniqueRef.current.slice();
    let a = copy.splice(businessCardID, 1);
    gsap.to(businessCardUniqueRef.current[businessCardID], {
      ease: "back.out",
      rotate: `${deg}deg`,
      duration: 0.5,
    });
    gsap.to([copy], {
      ease: "back.out",
      backgroundColor: "#fefbfa",
      filter: "blur(0)",
    });
    setShowDescriptions(false);
  };

  const animateClick = (businessCardID: number) => {
    console.log("clicked");
    setShowDescriptions(true);
    setClickedCard(businessCardID);
  };

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
          <div className={styles.logoContainer} onClick={() => navigate("/")}>
            <img src={Logo} />
          </div>
          <PageTitle />
          {showDescriptions && (
            <Descriptions
              ref={descriptionsRef}
              paragraphs={INFO[clickedCard]?.descriptions.paragraphs}
            />
          )}
          {INFO.map((info, index) => {
            return (
              <BusinessCard
                key={index}
                ref={(r) => (businessCardUniqueRef.current[index] = r)}
                position={{ ...info.positions }}
                elevation={index}
                onHover={animateHover}
                onHoverExit={animateExitHover}
                onClick={animateClick}
                id={index}
                angle={info.positions.angle}
                info={{ ...info }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
