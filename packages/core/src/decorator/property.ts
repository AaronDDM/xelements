import { Signal, signal } from "@preact/signals";
import { X_ELEMENT_PROPERTIES_KEY } from "../core/globals";
import "../core/metadata-shim";

export type PropertyArgs = {
    name?: string;
    reflect?: boolean;
}

export default function Property<T extends HTMLElement, V extends any>(args?: PropertyArgs) {
    function result(target: undefined, context: ClassFieldDecoratorContext<T, V>): (this: T, v: any) => any;
    function result(target: ClassAccessorDecoratorTarget<T, V>, context: ClassAccessorDecoratorContext<T, V>): ClassAccessorDecoratorResult<T, V>;
    function result(target: any, context: ClassFieldDecoratorContext<T, V> | ClassAccessorDecoratorContext<T, V>):
    ClassAccessorDecoratorResult<T, V> | ((this: T, v: any) => any) {
        const propertyName = args?.name || context.name.toString();
        console.debug(`[@Property] Property Name: ${propertyName}`, { context })

        if (Array.isArray(context.metadata[X_ELEMENT_PROPERTIES_KEY])) {
            context.metadata[X_ELEMENT_PROPERTIES_KEY] = [...context.metadata[X_ELEMENT_PROPERTIES_KEY], propertyName];
        } else {
            context.metadata[X_ELEMENT_PROPERTIES_KEY] = [propertyName]
        }

        switch (context.kind) {
            case 'accessor':
                const { get } = target;
                return {
                    get(this) {
                        const v = get.call(this) as Signal<V>
                        return v  as V;
                    },
        
                    set(this, val: any) {
                        const signalValue = get.call(this) as Signal<V>;
                        if (signalValue) {
                            signalValue.value = val;
                        }
                        if (args?.reflect) this.setAttribute(propertyName, val)
                    },
        
                    init(initialValue: any) {
                        const value = signal(initialValue) as V;
                        return value;
                    },
                };
            case 'field':
                return function (this: T, value: any) {
                    return value
                };
        }
    };

    return result;
}