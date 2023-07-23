import Item from "../UI/Item/Item.jsx";
import DropdownListItem from "../DropdownListItem/DropdownListItem.jsx";
import {useEffect, useState} from "react";

const isSuitableItem = (item, value) => {
    if (!value?.length) {
        return true;
    }
    const regexp = new RegExp(`${value}`, 'gi');
    return regexp.test(item.title) || regexp.test(item.description) || regexp.test(item.number) || regexp.test(item.section);
}
const getLocalStorageSelect = (item) => localStorage.getItem('selected')?.indexOf(item.section || item.number) !== -1;
const ListItem = ({item, searchValue,active}) => {
    const [selected, setSelected] = useState(getLocalStorageSelect(item));
    const changeSelectedHandler = () => {
        setSelected(prevState => !prevState);
    }
    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('selected')) || [];
        if (selected) {
            items.push(item.section || item.number);
        } else if (items.length > 0) {
            items = items?.filter(element => element !== (item.section || item.number));
        }
        localStorage.setItem('selected', JSON.stringify(items));
    }, [selected]);


    if (!isSuitableItem(item, searchValue)) {
        return <></>
    }

    return (
        item.children.length ?
            <DropdownListItem key={item.section || item.number}
                              onClick={changeSelectedHandler}
                              searchValue={searchValue}
                              active={active}
                              selected={selected}
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
