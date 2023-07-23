const isSuitableItem = (item, value) => {
    if (!value?.length) {
        return true;
    }
    const regexp = new RegExp(`${value}`, 'gi');
    return regexp.test(item.title) || regexp.test(item.description) || regexp.test(item.number) || regexp.test(item.section);
}

export default isSuitableItem;
