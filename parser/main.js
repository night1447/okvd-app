const table = document.querySelector('table');
const getDefaultDataView = (table) => {
    const tbody = table.querySelector('tbody');
    const numbers = [];
    const titles = [];
    tbody.querySelectorAll('tr').forEach(item => {
        const title = item.lastElementChild.querySelector('span').innerHTML.trim();
        const number = item.firstElementChild.querySelector('span').innerHTML.trim();
        numbers.push(number);
        titles.push(title);
    })
    let data = [];
    let i = 0, j = -1;

    while (i < numbers.length - 1) {
        const isSection = numbers.at(i).toLowerCase().indexOf('раздел');
        console.log(numbers.at(i).search(/\d/), numbers.at(i));
        if (isSection === 0) {
            j++;
            data.push({
                title: titles.at(i),
                section: numbers.at(i),
                children: []
            });
        }

        if (isSection === -1) {
            const childrenItem = {
                title: titles.at(i),
                number: numbers.at(i),
                children: [],
            };

            if (numbers.at(i) === "") {
                const element = data.at(j).children.at(-1);
                if (element) {
                    element.description = titles.at(i);
                } else {
                    data.at(j).description = titles.at(i);
                }
            } else {
                data.at(j).children.push(childrenItem);
            }
        }
        i++;
    }
    let index = 0;
    while (index < data.length) {
        let children = data.at(index).children;
        for (let i = children.length - 1; i >= 0; i--) {
            const firstElement = children.at(i);
            for (let j = i - 1; j >= 0; j--) {
                const secondElement = children.at(j);
                if (firstElement.number.includes(secondElement.number)) {
                    secondElement.children.unshift(firstElement);
                    children.splice(i, 1);
                    break;
                }
            }
        }
        index++;
    }
    return data;
}

const data = getDefaultDataView(table);


console.log(JSON.stringify(data));
