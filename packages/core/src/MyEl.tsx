import { FunctionComponent } from "preact";

export const MyEl: FunctionComponent<{ size: number }> = ({ size }: { size: number }) => {
    return (
        <div>This is the size: {size} + {size} = {size * 2}!!!</div>
    )
}