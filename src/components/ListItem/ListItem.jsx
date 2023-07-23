import Item from "../UI/Item/Item.jsx";
import DropdownListItem from "../DropdownListItem/DropdownListItem.jsx";
import {useEffect, useState} from "react";
import {getLocalStorageSelect, writeToLocalStorage} from "../../utils/localStorage.js";
import isSuitableItem from "../../utils/isSuitableItem.js";


const ListItem = ({item, active, searchValue}) => {
    const [selected, setSelected] = useState(getLocalStorageSelect(item));
    const changeSelectedHandler = () => {
        setSelected(prevState => !prevState);
    }
    useEffect(() => {
        writeToLocalStorage(selected, item);
    }, [selected]);


    if (!isSuitableItem(item, searchValue)) {
        return <></>
    }

    return (
        item.children.length ?
            <DropdownListItem key={item.section || item.number}
                              onClick={changeSelectedHandler}
                              searchValue={searchValue}
                              selected={selected}
                              active={active}
                              item={item}/>
            :
            <li key={item.section || item.number}>
                <Item item={item}
                      searchValue={searchValue}
                      onClick={changeSelectedHandler}
                      selected={selected}/>
            </li>)
}
export default ListItem;
