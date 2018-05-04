import { Component, Prop } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "my-button.css",
  shadow: true
})
export class OperationList {
  @Prop() onClick: any;
  render() {
    return (
      <button class="my-button" onClick={this.onClick}>
        <slot />
      </button>
    );
  }
}
