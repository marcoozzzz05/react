

export default function ItemsList({items}) {
    const listItems = items.map(item => 
        <li>{item}</li>
    )

    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}