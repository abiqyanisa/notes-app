class NoteList extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    _column = 3;
    _gutter = 50;

    static get observedAttributes() {
        return ['column', 'gutter'];
    }

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    _updateStyle() {
        this._style.textContent = `
            :host {
                display: block;
            }
            .note-list {
                display: grid;
                grid-template-columns: ${'1fr '.repeat(this.column)};
            
                gap: ${this.gutter}px;
            }
            @media screen and (max-width: 1000px) {
                .note-list {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                }
            }
            @media screen and (max-width: 500px) {
                .note-list {
                    grid-template-columns: repeat(1, 1fr);
                    gap: 20px
                }
            }
        `;
    }

    set column(value) {
        const newValue = Number(value);
        if (!Utils.isValidInteger(newValue)) return;
    
        this._column = value;
    }

    get column() {
        return this._column;
    }

    set gutter(value) {
        const newValue = Number(value);
        if (!Utils.isValidInteger(newValue)) return;

        this._gutter = value;
    }

    get gutter() {
        return this._gutter;
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
            <div class="note-list">
                <slot></slot>
            </div>
        `;
    }

}

customElements.define('note-list', NoteList);