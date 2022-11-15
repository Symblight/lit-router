import { LitElement, html, css } from 'lit';
import { createStore, createEvent } from 'effector';

const $counter = createStore(0);
const add = createEvent();
const sub = createEvent();
const apply = createEvent();

$counter
  .on(add, counter => counter + 1)
  .on(sub, counter => counter - 1)
  .on(apply, (_, value) => value);

export class VbHome extends LitElement {
  constructor() {
    super();
    this.title = 'Home';

    this.counter = 0;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.useStore();
  }

  store_update_handler(currentState) {
    this.counter = currentState;
  }

  /**
   * Subscribes to the store.
   */
  useStore() {
    $counter.watch(this.store_update_handler.bind(this));
  }

  increase() {
    this.counter -= 1;
    apply(this.counter);
  }

  decrease() {
    this.counter += 1;
    apply(this.counter);
  }

  add() {
    add();
  }

  sub() {
    sub();
  }

  static styles = css`
    .wrapper {
      display: grid;
      grid-template-rows: 44px 1fr;
      border: 1px solid #b2bec3;
      border-radius: 6px;
      justify-content: center;
      align-items: center;
    }
  `;

  render() {
    return html`
      <section class="wrapper">
        <h1>${this.title}</h1>
        <span>${this.counter}</span>
        <div>
          <h3>Local</h3>
          <button @click="${this.decrease}">+</button>
          <button @click="${this.increase}">-</button>
        </div>
        <div>
          <h3>Global</h3>
          <button @click="${this.add}">+</button>
          <button @click="${this.sub}">-</button>
        </div>
      </section>
    `;
  }
}

customElements.define('vb-home', VbHome);
