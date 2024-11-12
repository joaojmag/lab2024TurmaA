import styles from './HelloWorld.module.css'

function HelloWorld() {
    return (
        <div className={styles.worldContainer}>
            <p className={styles.worldContent} >Ola Mundo aaaaaaaa</p>
        </div>
    )
}

export default HelloWorld