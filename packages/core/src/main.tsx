import { signal } from "@preact/signals";
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
  private size = signal("");

  @State()
  private accessor loading = false;

  constructor() {
    super();
  }

  attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
    );

    this.size.value = newValue
  }

  render() {
    return (
      <Fragment>
        <h1>hi</h1>
        <MyEl size={this.size.value} />
        <div>{!this.loading ? 'Loading...' : 'Loaded'}</div>
        <button onClick={() => {
          console.debug("clicked")
          this.loading = !this.loading
        }}>Toggle</button>
      </Fragment>
    )
  }
}