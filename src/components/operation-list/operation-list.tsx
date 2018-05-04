import { Component, Prop } from "@stencil/core";

interface OperationItem {
  title: string;
  imgUrl: string;
  by: string;
}

@Component({
  tag: "operation-list",
  styleUrl: "operation-list.css",
  shadow: true
})
export class OperationList {
  @Prop() list: Array<OperationItem> = [];

  render() {
    return (
      <div class="operation-list">
        {this.list.map(item => (
          <div class="operation-item">
            <img class="operation-item-cover" src={item.imgUrl} />
            <div class="operation-section">
              <div class="operation-item-title">{item.title}</div>
              <div class="operation-item-by">{item.by}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
