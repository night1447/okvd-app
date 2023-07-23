import data from '../src/assets/data.json'
import List from "./components/List/List.jsx";
import Container from "./components/UI/Container/Container.jsx";
import Search from "./components/Search/Search.jsx";
import {useState} from "react";

const App = () => {
    const [searchValue, setSearchValue] = useState('');

    const changeSearchValueHandler = (value) => {
        setSearchValue(value);
    }
    return (
        <Container>
            <Search  onSearch={changeSearchValueHandler}/>
            <List list={data} searchValue={searchValue} active={true}/>
        </Container>
    );
}

export default App;
