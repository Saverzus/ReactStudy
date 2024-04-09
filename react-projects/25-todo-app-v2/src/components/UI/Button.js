import styles from './Button.module.css'

function button(props) {
    const { children, disabled = false } = props;
    return (
        <>
            <button
                {...props}
                className={styles.button}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}

export default button