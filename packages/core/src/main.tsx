import { signal } from "@preact/signals";
import { Fragment } from "preact";
import Component from "./decorator/component";
import Property from "./decorator/property";
import { XElement } from "./core/base";
import { MyEl } from "./MyEl";

@Component()
class MyXElement extends XElement {
  @Property()
  private size = signal("");

  private loading = signal(false);

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
        <MyEl size={this.size.value} />
        <div>{!this.loading.value ? 'Loading...' : 'Loaded'}</div>
        <button onClick={() => {
          console.debug("clicked")
          this.loading.value = !this.loading.value
        }}>Toggle</button>
      </Fragment>
    )
  }
}

customElements.define("my-custom-element", MyXElement);