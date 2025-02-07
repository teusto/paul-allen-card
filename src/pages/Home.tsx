import '../styles/Home.scss';
import Scene from '../assets/scene.mp4';
import gsap from 'gsap';
import { Power2 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import Logo from '../assets/logo.svg';

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
            .to(ruleLogo, { width: '0%', ease: Power2.easeInOut, duration: 2 }, "<")
            .from(videoRef.current, { scale: 1.5, ease: Power2.easeInOut, duration: 2 }, ">-1.0")
            .to(videoRef.current, { scale: 0, ease: Power2.easeInOut, duration: 3 }, 32)
            .from(cardRef.current, { zIndex: -1, opacity: 1, scale: 0, ease: Power2.easeInOut, duration: 3 }, '<')
    })

    const handleHover = (ev) => {
        scaleMovementToDegs(ev.clientX, ev.clientY)
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
                <div className='logo_container'>
                    <img src={Logo} />
                </div>
                <div className="video_container">
                    <video ref={videoRef} className="video" src={Scene} muted autoPlay playsInline></video>
                </div>
                <div className='card_container' ref={cardRef} onPointerMove={handleHover} onMouseMoveCapture={handleHover} style={{transform: `translate(-50%, -50%) perspective(600px) rotateX(${degs.x}deg) rotateY(${degs.y}deg)`}}>
                    <div className='card'>
                        <div className='card_top'>
                            <p>+351 932209245</p>
                            <p className='top_right'>
                                <span>PROJECTS & EDUCATION</span>
                                <span>download cv</span>
                            </p>
                        </div>
                        <div className='card_mid'>
                            <h2>matheus TOSCANO</h2>
                            <p>Developer</p>
                        </div>
                        <div className='card_bottom'>
                            <p>Lisbon, Portugal. <span>linkedin.</span> <span>pteutoscano@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home