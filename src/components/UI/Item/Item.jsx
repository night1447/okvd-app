import styles from "./Item.module.scss";
import Description from "../../Description/Description.jsx";
import {highlightText} from "../../../utils/highlightText.jsx";

const Item = ({item, selected, onClick, searchValue}) => {
    return <>
        <div className={styles.inner} data-select={selected}>
            <div className={`${styles.select} ${selected ? styles.active : ''}`} onClick={onClick}></div>
            {item.section ? <h1 className={styles.section}>{highlightText(searchValue, item.section)}</h1> : <></>}
            {item.number ? <p className={styles.number}>{highlightText(searchValue, item.number)}</p> : <></>}
            <h2 className={styles.title}>{highlightText(searchValue, item.title)}</h2>
        </div>
        {item.description ? <Description
            className={styles.description}>{highlightText(searchValue, item.description)}</Description> : <></>}
    </>
}

export default Item;
