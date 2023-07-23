import styles from './Button.module.scss'

const Button = ({variant, type, title, onClick, active, className}) => {
    return <button onClick={onClick} type={type}
                   className={`${styles.button} ${styles[variant]} ${active ? styles.active : ''} ${className}`}>
        {title}
    </button>
}

export default Button;
