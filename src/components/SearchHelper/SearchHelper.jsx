import Search from "../Search/Search.jsx";
import List from "../List/List.jsx";
import data from "../../assets/data.json";
import {useState} from "react";

const SearchHelper = () => {
    const [searchValue, setSearchValue] = useState('');

    const changeSearchValueHandler = (value) => {
        setSearchValue(value);
    }
    return <>
        <Search onSearch={changeSearchValueHandler}/>
        <List list={data} searchValue={searchValue} active={true}/>
    </>
}
export default SearchHelper;
