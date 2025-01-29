import '../styles/Home.scss';
import Scene from '../assets/scene.mp4';
import gsap from 'gsap';
import { Power2 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(useGSAP);

const Home = () => {
    let containerRef = useRef(null);
    let videoRef = useRef(null);
    const timeline = gsap.timeline();
    let rule = CSSRulePlugin.getRule(".video_container::after"); //get the rule

    useEffect(() => {
        console.log({containerRef, videoRef, timeline})
    })

    useGSAP(() => {
        timeline.to(containerRef.current, {css: {visibility: 'visible'}})
                .to(rule, {width: '0%', ease: Power2.easeInOut, duration: 1.2})
                .from(videoRef.current, {scale: 1.5, ease: Power2.easeInOut, duration: 2}, ">-1.0")
    })

    return (
        <div className="wrapper">
            <div className="container" ref={containerRef}>
                <div className="video_container">
                    <video ref={videoRef} className="video" src={Scene} autoPlay playsInline></video>
                </div>
            </div>
        </div>
    )
}

export default Home