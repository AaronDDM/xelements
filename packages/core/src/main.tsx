import { MyEl } from "./MyEl";
import Component from "./decorator/component";
import Property from "./decorator/property";
import { Fragment } from "preact/jsx-runtime";
import State from "./decorator/state";

@Component({
  tag: "my-custom-element",
  style: "main.scss"
})
export class MyXElement extends HTMLElement {
  @Property()
  private accessor size = "";

  @Property({ reflect: true })
  private accessor name = "";

  @State()
  private accessor loading = false;

  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <h1>hi</h1>
        <MyEl size={this.size} />
        <div>{!this.loading ? 'Loading...' : 'Loaded'}</div>
        <button onClick={() => {
          console.debug("clicked")
          this.name = `${this.size} is now`
          this.loading = !this.loading
        }}>Toggle</button>
      </Fragment>
    )
  }
}