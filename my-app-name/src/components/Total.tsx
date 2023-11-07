interface TotalProps {
    total: number
}

const Total = ({total}: TotalProps) => {

    return (
        <div>
            <h2>Number of exercises {total}</h2>
        </div>
    )
}

export default Total;