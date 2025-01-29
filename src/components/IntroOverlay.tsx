import styles from './IntroOverlay.module.scss';

const IntroOverlay = () => {
  return (
    <>
        <div className={styles.intro_overlay}>
            <div className={styles.top}>
                <div className={styles.overlay_top}>
                    <p>Impressive. Very nice.</p>
                    <p>Let's see Matheus Toscano's card.</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.overlay_bottom}></div>
            </div>
        </div>
    </>
  )
}

export default IntroOverlay