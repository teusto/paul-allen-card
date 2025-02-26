import '../styles/Home.scss';
import Scene from '../assets/scene.mp4';
import gsap from 'gsap';
import { Power2 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import Logo from '../assets/logo.svg';
import { NavLink } from 'react-router';

gsap.registerPlugin(useGSAP);

const Home = () => {
    let containerRef = useRef(null);
    let videoRef = useRef(null);
    let cardRef = useRef(null);
    const timeline = gsap.timeline();
    let rule = CSSRulePlugin.getRule(".video_container::after"); //get the rule
    let ruleLogo = CSSRulePlugin.getRule(".logo_container::after"); //get the rule
    const [degs, setDegs] = useState({ x: 0, y: 0 });

    useGSAP(() => {
        timeline.to(containerRef.current, { css: { visibility: 'visible', opacity: 1 }, delay: .35, duration: 5 })
            .to(rule, { width: '0%', ease: Power2.easeInOut, duration: 2 })
            // .to(ruleLogo, { width: '0%', ease: Power2.easeInOut, duration: 2 }, "<")
            // .from(videoRef.current, { scale: 1.5, ease: Power2.easeInOut, duration: 2 }, ">-1.0")
            // .to(videoRef.current, { scale: 0, ease: Power2.easeInOut, duration: 4 }, 32)
            .from(cardRef.current, { zIndex: -1, opacity: 1, scale: 0, ease: Power2.easeInOut, duration: 4, x: -10 }, '<')
    })

    const handleHover = (ev) => {
        //scaleMovementToDegs(ev.clientX, ev.clientY)
    }

    const scaleMovementToDegs = (x, y) => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let mousePosition = { x, y };
        let maxRange = 5
        let minRange = -15
        let interval = maxRange - minRange;
        let xDeg =  interval * mousePosition.x / width + minRange;
        let yDeg = interval * mousePosition.y / height + minRange;
        setDegs({ x: xDeg, y: yDeg });
    }

    return (
        <div className="wrapper">
            <div className="container" ref={containerRef}>
                {/* <div className='logo_container'>
                    <img src={Logo} />
                </div>
                <div className="video_container">
                    <video ref={videoRef} className="video" src={Scene} muted autoPlay playsInline></video>
                </div> */}
                <div className='card_container' ref={cardRef} onPointerMove={handleHover} onMouseMoveCapture={handleHover} style={{transform: `translate(-50%, -50%) perspective(600px) rotateX(${degs.x}deg) rotateY(${degs.y}deg)`}}>
                    <div className='card'>
                        <div className='card_top'>
                            <p><a href='https://wa.me/351932209245' target='_blank' rel="noopener noreferrer">+351 932209245</a></p>
                            <p className='top_right'>
                                <NavLink to={'/projects-education'} viewTransition>PROJECTS & EDUCATION</NavLink>
                                <a href='src\assets\Matheus_CV_2025_update.pdf' download='Matheus Resume' target='_blank'>download cv</a>
                            </p>
                        </div>
                        <div className='card_mid'>
                            <h2>matheus TOSCANO</h2>
                            <p>Developer</p>
                        </div>
                        <div className='card_bottom'>
                            <address>Lisbon, Portugal. <span><a href='https://www.linkedin.com/in/matheus-toscano-oliveira/' target="_blank" rel="noopener noreferrer">linkedin.</a></span> <span><a href='mailto:pteutoscano@gmail.com'>pteutoscano@gmail.com</a></span></address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home