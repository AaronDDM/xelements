import { FunctionComponent } from "preact";

export const MyEl: FunctionComponent<{ size: string }> = ({ size }: { size: string }) => {
    return (
        <div>This is the size: {size}!!!</div>
    )
}