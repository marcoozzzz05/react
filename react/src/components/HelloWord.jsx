const HelloWord = ({title,scrivania="undefined"}) => {
    return (
        <>
        <h1>{title}</h1>
        <div>{scrivania}</div>
        </>
    )
}

export default HelloWord