import styles from './Search.module.scss'
const Search = ({onSearch}) => {

    return <div>
        <label>
            <input type="text" onInput={(e) => {
                onSearch(e.target.value);
            }}/>
        </label>
    </div>
}
export default Search;
