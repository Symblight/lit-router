import { LitElement, html } from 'lit';
import './vb-browser-manager.js';

// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class VbApp extends LitElement {
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
    this.title = 'My app';
  }

  render() {
    return html`
      <header>
        <a href="/about">About</a>
        <a href="/">Home</a>
      </header>
      <main>
        <vb-browser-manager></vb-browser-manager>
      </main>
      <footer>Footer</footer>
    `;
  }
}
