
import { LitElement, html } from 'lit';

export class VbHome extends LitElement {
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
    this.title = 'Home';
  }

  render() {
    return html`
      <section>
        <h1>${this.title}</h1>
      </section>
    `;
  }
}

customElements.define('vb-home', VbHome);
