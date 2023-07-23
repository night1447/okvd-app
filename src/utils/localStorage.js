export const getLocalStorageSelect = (item) => JSON.parse(localStorage.getItem('selected')).includes(item.section || item.number);


export const writeToLocalStorage = (selected, item) => {
    let items = JSON.parse(localStorage.getItem('selected')) || [];
    if (items.length > 0) {
        items = items?.filter(element => element !== (item.section || item.number));
    }
    if (selected) {
        items.push(item.section || item.number);
    }
    localStorage.setItem('selected', JSON.stringify(items));
}
