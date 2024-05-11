
import { h, render } from "preact";

export default function Component() {
  return function ClassDecorator<C extends new (...args: any[]) => any>(
    target: C,
    ctx: ClassDecoratorContext,
  ) {
    const className = ctx.name?.toString();
    console.debug(`[@Component] Class Name: ${className}`)
    return class extends target {
      constructor(...args: any[]) {
        super();

        const host = document.createElement('div');
        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
          host,
        );

        const App = this.render.bind(this)

        render(h(App, {}), shadowRoot);
      }
    };
  };
}