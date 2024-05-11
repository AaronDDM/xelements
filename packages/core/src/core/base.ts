import { X_ELEMENT_PROPERTIES_KEY } from "./globals";

export class XElement extends HTMLElement {
    static get observedAttributes() {
        return this[Symbol.metadata]?.[X_ELEMENT_PROPERTIES_KEY] ?? []
    }
}