import { signal } from "@preact/signals";
import type { Signal } from "@preact/signals";
import "../core/metadata-shim";

export type PropertyArgs = {
    name?: string;
}

    ;
type Context = ClassAccessorDecoratorContext & {
    metadata: Record<PropertyKey, unknown>;
}

export default function State<This, ValueType extends any>(args?: PropertyArgs) {
    return function Deorator(
        value: ClassAccessorDecoratorTarget<This, ValueType>,
        context: Context
    ): ClassAccessorDecoratorResult<This, ValueType> {
        const fieldName = args?.name || context.name.toString();
        let { get } = value;
        console.debug(`[@State] Name: ${fieldName}`, { value, context })

        if (context.kind !== "accessor") {
            throw new Error("@State() can only be used on accessor properties (e.g. @State accessor private myState: boolean = true;)")
        }

        return {
            get(this) {
                const v = get.call(this) as Signal<ValueType>
                return v?.value;
            },

            set(this, val: any) {
                const signalValue = get.call(this) as Signal<ValueType>;
                if (signalValue) {
                    signalValue.value = val;
                }
            },

            init(initialValue: any) {
                const value = signal(initialValue) as ValueType;
                return value;
            },
        }
    }
}