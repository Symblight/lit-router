
import { LitElement, html } from 'lit';

export class About extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'About';
  }

  render() {
    return html`
      <section>
        <h1>${this.title}</h1>
      </section>
    `;
  }
}

customElements.define('vb-about', About);
