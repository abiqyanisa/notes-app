class FooterBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._style = document.createElement("style");
    }

    _updateStyle() {
        this._style.textContent = `
            :host {
                display: block;
                background-color: #ffccd5;
            }
            h1 {
                font-size: 30px;
                color: #590d22;
                padding: 30px 100px;
                text-align: right;
            }
            @media screen and (max-width: 1000px) {
                h1 {
                    font-size: 25px;
                    padding: 20px 100px;
                }
            }
            @media screen and (max-width: 500px) {
                h1 {
                    text-align: center;
                }
            }
        `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `      
            <h1>Notes App</h1>
        `;
    }
}

customElements.define('footer-bar', FooterBar);