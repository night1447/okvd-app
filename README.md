# OKVD app

### Описание проекта

Проект "Список выбора ОКВЭД" предоставляет пользователю функциональность поиска по ОКВЭДам и выбору пунктов, необходимых
пользователю. Выбранные пункты сохраняются в локальном хранилище (localStorage).

### Функциональность

1. Поиск по ОКВЭДам
    - Пользователь может осуществлять поиск по кодам и названиям ОКВЭДов, чтобы быстро найти соответствующие пункты.

2. Выбор пунктов
    - Пользователь может выбрать необходимые пункты ОКВЭДов из списка.
    - Выбранные пункты отображаются пользователю для его информирования и контроля.

3. Сохранение в localStorage
    - Каждый раз, когда пользователь вносит изменения в выбранные пункты ОКВЭДов, эти изменения сохраняются в локальном
      хранилище браузера (localStorage).
    - При загрузке приложения, выбранные пункты автоматически восстанавливаются из localStorage, чтобы пользователь мог
      продолжить работу с предыдущим выбором.

### Технический стек

Проект "Список выбора ОКВЭД" использует следующий технический стек:

- HTML/SCSS для создания польз   овательского интерфейса;
- JavaScript для обработки событий и взаимодействия с локальным хранилищем;
- React

```javascript
//поиск схожих с вводом пользователя и выделения фрагмента происходит в данной функции
const highlightText = (value, text) => {
    const regexp = new RegExp(`${value}`, 'gi');
    if (value.length < 2) {
        return text;
    }
    const parts = text.split(regexp);
    return <>
        {parts.length > 1 ? parts.map((part, index) => <>
            {part === '' || index === 0 ?
                part :
                <>
                    <span style={{background: 'var(--red)', color: 'white', fontFamily: 'inherit'}}
                          data-highlight={'true'}>{value}</span>
                    {part}
                </>
            }
        </>) : text}
    </>
    //проверка подходит элемент или нет происходит в данной функции
    const isSuitableItem = (item, value) => {
        if (!value?.length) {
            return true;
        }
        const regexp = new RegExp(`${value}`, 'gi');
        return regexp.test(item.title) || regexp.test(item.description) || regexp.test(item.number) || regexp.test(item.section);
    }

}

```

### Контакты

- Электронная почта: solodow.mitya@yandex.by


