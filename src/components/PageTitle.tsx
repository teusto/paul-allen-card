import styles from './PageTitle.module.scss'

const PageTitle = () => {
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.title}>PROJECTS<div className={styles.line}/>&<div className={styles.line}/>EDUCATION</h2>
        </div>
    )
}

export default PageTitle;