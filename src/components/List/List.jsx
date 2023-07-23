import ListItem from "../ListItem/ListItem.jsx";
import styles from './List.module.scss'
import {createRef, useEffect, useState} from "react";

const changeActiveList = (ref) => {
    return ref.current?.querySelector('[data-highlight]') || ref.current?.querySelector('[data-select="true"]');
}
const List = ({list, searchValue, active}) => {
    const [activation, setActivation] = useState(active);
    const listRef = createRef();
    useEffect(() => {
        console.log(123)
        setActivation(active)
    }, []);

    useEffect(() => {
        console.log(1234)
        setActivation(changeActiveList(listRef))
    }, [searchValue]);

    return <ul
        className={`${styles.list} ${activation ? styles.active : styles.disable}`}
        ref={listRef}>
        {
            list.map(item => <ListItem key={item.section || item.number}
                                       searchValue={searchValue}
                                       active={changeActiveList(listRef)}
                                       item={item}/>)
        }
    </ul>
}

export default List;
