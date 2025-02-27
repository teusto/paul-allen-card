// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { forwardRef } from 'react';
import styles from './Descriptions.module.scss';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

type DescriptionsProps = {
    paragraphs: string[];
}

const Descriptions = forwardRef(({paragraphs}:DescriptionsProps, ref) => {

    useGSAP(() => {
        gsap.from(ref?.current?.childNodes, {ease: "power4.inOut", yPercent: 5, opacity: 0, stagger: .1})
    }, [])

    console.log({paragraphs})

    return(
        <div className={styles.wrapper} ref={ref}>
            <p>{paragraphs[0]}</p>
            <img />
            <p>{paragraphs[1]}</p>
        </div>
    )
})

export default Descriptions