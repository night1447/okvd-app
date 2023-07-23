import {useState} from "react";
import Button from "../UI/Button/Button.jsx";
import styles from './Description.module.scss'

const Description = ({children, className}) => {
    const [show, setShow] = useState(false);
    const showDescriptionHandler = () => {
        setShow(prevState => !prevState)
    }
    return <div className={styles.wrapper}>
        <p className={`${show || children.length === undefined ? styles.show : ''} ${styles.description} ${className}`}>
            {children}
        </p>
        {children.length > 500 ? <Button type={'button'} variant={'default'}
                                   className={styles.button}
                                   title={show ? 'Свернуть' : 'Раскрыть'}
                                   onClick={showDescriptionHandler}/> : <></>}
    </div>
}

export default Description;
