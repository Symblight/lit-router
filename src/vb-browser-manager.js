import { LitElement } from 'lit';
import { Router } from '@vaadin/router';

const routes = [
  {
    path: '/about',
    component: 'vb-about',
    action: async () => {
      await import('./pages/about/index.js');
    },
  },
  {
    path: '/',
    component: 'vb-home',
    action: async () => {
      await import('./pages/home/index.js');
    },
  },
];

export class VbBrowserManager extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  firstUpdated() {
    const router = new Router(this.renderRoot);
    router.setRoutes(routes);
  }
}

customElements.define('vb-browser-manager', VbBrowserManager);
