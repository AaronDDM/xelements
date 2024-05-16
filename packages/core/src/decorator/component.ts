import { FunctionComponent, h, render } from "preact";
import { X_ELEMENT_PROPERTIES_KEY } from "../core/globals";

type ComponentArgs = {
  tag: string,
  style?: string
}

export interface ComponentElement extends HTMLElement {
  render: FunctionComponent;
  attributeChangedCallback?(name: any, oldValue: any, newValue: any): void;
  injectStyles?: (shadowRoot: ShadowRoot) => void;
}

interface XElementConstructor {
  new(...params: any[]): ComponentElement;
}


export default function Component({ tag }: ComponentArgs) {
  return function ClassDecorator<C extends XElementConstructor>(
    target: C,
    ctx: ClassDecoratorContext<XElementConstructor>,
  ) {
    const className = ctx.name?.toString();
    console.debug(`[@Component] Class Name: ${className}`)

    // No render? throw an error
    if ('render' in target) {
      throw new Error('You have to define a render method.')
    }

    // Register custom element
    ctx.addInitializer(function (this) {
      // Register the custom element
      customElements.define(tag, this);
    })

    return class XElement extends target {
      constructor(...args: any[]) {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" })

        if (typeof this.injectStyles === "function") {
          this.injectStyles(shadowRoot)
        }

        const App = this.render.bind(this)

        render(h(App, {}), shadowRoot);
      }

      attributeChangedCallback(name: any, oldValue: any, newValue: any) {
        if (typeof super.attributeChangedCallback !== "undefined") {
          super.attributeChangedCallback(name, oldValue, newValue)
        } else {
          console.log(
            `[@Component] Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
          );
          // See if property exists, if it does, update it
          if (name in this && oldValue !== newValue) {
            this[name as keyof this] = newValue;
          }
        }
      }

      static get observedAttributes() {
        return this[Symbol.metadata]?.[X_ELEMENT_PROPERTIES_KEY] ?? []
      }
    };
  };
}