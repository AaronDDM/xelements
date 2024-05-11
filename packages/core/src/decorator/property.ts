import "../core/metadata-shim";
import { XElement } from "../core/base"
import { X_ELEMENT_PROPERTIES_KEY } from "../core/globals";

export type PropertyArgs = {
    name?: string;
}

export type PropertyContext =
    | ClassAccessorDecoratorContext
    | ClassGetterDecoratorContext
    | ClassFieldDecoratorContext
;
type Context = PropertyContext & {
    
    metadata: Record<PropertyKey, unknown>;
}

export default function Property<This extends XElement, Return>(args?: PropertyArgs) {
    return function Deorator(
        _target: undefined,
        context: Context
    ) {
        const propertyName = args?.name || context.name.toString();
        console.debug(`[@Property] Property Name: ${propertyName}`, { context })

        if (Array.isArray(context.metadata[X_ELEMENT_PROPERTIES_KEY])) {
            context.metadata[X_ELEMENT_PROPERTIES_KEY] = [...context.metadata[X_ELEMENT_PROPERTIES_KEY], propertyName];
        } else {
            context.metadata[X_ELEMENT_PROPERTIES_KEY] = [propertyName]
        }

        return function (this: This, value: Return) {
            return value;
        };
    }
}