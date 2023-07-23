import List from "../List/List.jsx";
import {useState} from "react";
import Button from "../UI/Button/Button.jsx";
import styles from './Dropdown.module.scss'
import Item from "../UI/Item/Item.jsx";

const DropdownListItem = ({item, selected, onClick, active, searchValue}) => {

    const [showList, setShowList] = useState(active);
    const showListHandler = () => {
        setShowList(prevState => !prevState)
    };
    return (
        <li className={styles.item}>
            {active ? <></> : <Button onClick={showListHandler} title={showList ? 'Скрыть' : 'Показать'}
                                      active={showList}
                                      type={'button'}
                                      variant={'dropdown'}/>}
            <Item item={item}
                  selected={selected}
                  onClick={onClick}
                  searchValue={searchValue}/>
            <List list={item.children}
                  active={active || showList}
                  searchValue={searchValue}/>
        </li>
    );
};

export default DropdownListItem;
