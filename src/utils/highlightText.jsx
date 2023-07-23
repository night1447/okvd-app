export const highlightText = (value, text) => {
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
                          data-highlight={'true'}>{value}</span>{part}
                </>
            }
        </>) : text}
    </>;
}
