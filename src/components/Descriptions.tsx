import { forwardRef, useEffect } from 'react';
import styles from './Descriptions.module.scss';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const Descriptions = forwardRef(({}, ref) => {

    useGSAP(() => {
        gsap.from(ref?.current?.childNodes, {ease: "power4.inOut", yPercent: 5, opacity: 0, stagger: .1})
    }, [])

    return(
        <div className={styles.wrapper} ref={ref}>
            <p>Tortor tincidunt commodo ac augue ligula imperdiet. Risus hac platea purus, volutpat sodales cubilia egestas. Augue lacus curae purus ridiculus etiam nibh magnis. Ligula pretium tellus sagittis class tellus mi neque. Sociosqu ante hendrerit lobortis bibendum egestas, nullam cras dictum? Facilisi consequat sociosqu posuere eget ornare imperdiet. Bibendum augue adipiscing etiam habitant eros aenean lectus. Risus sapien leo nibh malesuada phasellus dapibus.</p>
            <img />
            <p>Accumsan diam hendrerit in ligula fringilla suscipit odio. Varius aptent elit rutrum pretium vulputate posuere nullam. Cubilia facilisis a habitant dolor massa euismod.</p>
        </div>
    )
})

export default Descriptions