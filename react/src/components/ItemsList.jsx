

export default function ItemsList() {
    const car = ["Audi", "Mercedes", "BMW", "Alfa Romeo"]
    const listItems = car.map(cars => 
        <li>{cars}</li>
    )

    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}