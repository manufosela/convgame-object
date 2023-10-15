import { html, LitElement } from 'lit';
import { ConvgameObjectStyles } from './ConvgameObjectStyles.js';

export class ConvgameObject extends LitElement {
  static styles = [ConvgameObjectStyles];

  static properties = {
    name: { type: String },
    looked: { type: Boolean },
    caught: { type: Boolean },
    used: { type: Boolean },
    opened: { type: Boolean },
    objectProperties: { type: Object }, // like position or size
    otherProperties: { type: Object }, // like content or color
  };

  constructor() {
    super();
    this.name = 'object';

    this.looked = false;
    this.caugth = false;
    this.used = false;
    this.opened = false;

    this.otherProperties = { content: null, color: 'transparent' };
    this.objectProperties = { position: { x: 0, y: 0 }, size: { width: 20, height: 20, unit: 'px' } };
  }

  look() {
    this.looked = true;
  }

  catch() {
    this.caught = true;
  }

  use() {
    this.used = true;
  }

  open() {
    this.opened = true;
  }

  render() {
    const width = this.objectProperties.size.width + this.objectProperties.size.unit;
    const height = this.objectProperties.size.height + this.objectProperties.size.unit;
    return html`
      <div style="width:${width}; height:${height}">${this.object}</div>
        `;
  }
}
