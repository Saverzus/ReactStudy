import styles from './Button.module.css'

function button({ onClick, children, title, disabled = false }) {
    return (
        <>
            <button
                className={styles.button}
                onClick={onClick}
                title={title}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}

export default button