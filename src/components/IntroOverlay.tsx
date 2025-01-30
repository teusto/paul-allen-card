import './IntroOverlay.scss';
import gsap from 'gsap';
import { Power2, Power4 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from 'react';
import { useAnimations } from '../contexts/AnimationProvider';

gsap.registerPlugin(useGSAP);

const IntroOverlay = () => {
    const { completeAnimation } = useAnimations();
    let topBottomRef = useRef(null);
    const timeline = gsap.timeline();

    useEffect(() => {
        console.log({ topBottomRef, timeline })
    })

    useGSAP(() => {
        timeline.from(".line span", {y: 100, ease: Power4.easeOut, delay: 1, skewY: 7, stagger: { amount: 1.6}, duration: 2})
                .to(topBottomRef.current.childNodes[0], {x: '-100%', ease: Power2.easeInOut, duration: 1.6}) 
                .to(topBottomRef.current.childNodes[1],{x: '100%', ease: Power2.easeInOut, duration: 1.6}, "<0")
                .eventCallback('onComplete', () => { completeAnimation() })
    })

    return (
        <>
            <div className="intro_overlay" ref={topBottomRef}>
                <div className="top">
                    <div className="overlay_top">
                        <h2>
                            <div className="line">
                                <span>Impressive. Very nice.</span>
                            </div>
                            <div className="line">
                                <span>Let's see Matheus Toscano's card.</span>
                            </div>
                        </h2>
                    </div>
                </div>
                <div className="bottom">
                    <div className="overlay_bottom"></div>
                </div>
            </div>
        </>
    )
}

export default IntroOverlay