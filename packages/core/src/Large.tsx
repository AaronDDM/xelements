import { FunctionComponent } from "preact";

export const Large: FunctionComponent = () => {
    return (
        <div>
            {Array(10000).fill(Math.random()).map(n => <div>{n}</div>)}
        </div>
    )
}