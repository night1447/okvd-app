import List from "../List/List.jsx";
import {useRef, useState} from "react";
import Button from "../UI/Button/Button.jsx";
import styles from './Dropdown.module.scss'
import Item from "../UI/Item/Item.jsx";

const DropdownListItem = ({item, selected, active, onClick, searchValue}) => {
    const [showList, setShowList] = useState(active);
    const ref = useRef();
    const showListHandler = () => {
        setShowList(prevState => !prevState)
    };
    return (
        <li className={styles.item} ref={ref}>
            <Button onClick={showListHandler} title={active ? 'Скрыть' : 'Показать'}
                    active={!!ref.current?.querySelector('[data-select="true"]') || !!ref.current?.querySelector('[data-highlight="true"]') || showList}
                    type={'button'}
                    variant={'dropdown'}/>
            <Item item={item}
                  selected={selected}
                  onClick={onClick}
                  searchValue={searchValue}/>
            <List list={item.children}
                  active={showList}
                  searchValue={searchValue}/>
        </li>
    );
};

export default DropdownListItem;
