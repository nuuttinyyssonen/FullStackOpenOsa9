import {CoursePart} from '../types'

interface ContentProps {
    courseParts: CoursePart[];
}





const Content = ({ courseParts }: ContentProps) => {

    const assertNever = (value: never): never => {
        throw new Error(
          `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
    };
    
    const contentMap = courseParts.map((item, key) => {
        switch(item.kind) {
            case 'basic':
                return (
                    <div key={key}>
                        <h2>{item.name} {item.exerciseCount}</h2>
                        <p>{item.description}</p>
                    </div>
                )
            case 'background':
                return (
                    <div key={key}>
                        <h2>{item.name} {item.exerciseCount}</h2>
                        <p>{item.description}</p>
                        <p>{item.backgroundMaterial}</p>
                    </div>
                )
            case 'group': 
                return (
                    <div key={key}>
                        <h2>{item.name} {item.exerciseCount}</h2>
                        <p>Project exercises {item.groupProjectCount}</p>
                    </div>
                )
            case 'special':
                return (
                    <div key={key}>
                        <h2>{item.name} {item.exerciseCount}</h2>
                        <p>{item.requirements}</p>
                    </div>
                )
            default:
                return assertNever(item)
        }
    })


    return (
        <div>
            {contentMap}
        </div>
    )
}

export default Content