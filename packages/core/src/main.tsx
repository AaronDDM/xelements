import { Signal, signal } from "@preact/signals";
import "preact/debug";
import { Fragment } from "preact/jsx-runtime";
import { Large } from "./Large";
import { MyEl } from "./MyEl";
import Component from "./decorator/component";
import Property from "./decorator/property";

@Component({
  tag: "my-custom-element",
  style: "main.scss"
})
export class MyXElement extends HTMLElement {
  @Property()
  private accessor size: number = 0;

  @Property()
  private accessor name = "";

  private accessor loading: Signal<boolean> = signal(false);

  constructor() {
    super();
  }

  render() {
    const isLoading = this.loading.value;
    return (
      <Fragment>
        <h1>hi</h1>
        <br/>
        <MyEl size={this.size} />
        <br/>
        <div>{!isLoading ? 'Loading...' : 'Loaded'}</div>
        <br/>
        <button onClick={() => {
          console.debug("clicked")
          this.name = `${this.size} is now`
          this.loading.value = !this.loading.value
        }}>Toggle</button>
        <Large />
      </Fragment>
    )
  }
}