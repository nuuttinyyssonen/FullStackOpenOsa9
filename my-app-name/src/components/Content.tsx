interface ContentProps {
    courseParts: {
        name: string;
        exerciseCount: number;
    }[];
}



const Content = ({ courseParts }: ContentProps) => {

    const contentMap = courseParts.map((item, key) => {
        return <div key={key}>{item.name} {item.exerciseCount}</div>
    })

    return (
        <div>
            {contentMap}
        </div>
    )
}

export default Content