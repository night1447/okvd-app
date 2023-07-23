import ListItem from "../ListItem/ListItem.jsx";
import styles from './List.module.scss'
import {createRef, useEffect, useState} from "react";

const List = ({list, searchValue, active}) => {
    const listRef = createRef();
    const [activation, setActivation] = useState(false);
    useEffect(() => {
        if (listRef.current.querySelector('[data-select="true"]') || listRef.current.querySelector('[data-highlight="true"]')) {
            setActivation(true);
        } else {
            setActivation(false);
        }
    }, [listRef.current, searchValue])

    return <ul
        className={`${styles.list} ${activation || active ? styles.active : styles.disable}`} ref={listRef}>
        {
            list.map(item => <ListItem key={item.section || item.number}
                                       searchValue={searchValue}
                                       active={activation}
                                       item={item}/>)
        }
    </ul>
}

export default List;
