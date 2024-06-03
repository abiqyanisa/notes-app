class NoteItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;
    _note = {
        id: null,
        title: null,
        body: null,
        createdAt: null,
        archived: false
    };

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    set note(value) {
        this._note = value;

        this.render();
    }

    get note() {
        return this._note;
    }

    _updateStyle() {
        this._style.textContent = `
            :host {
                display: block;
            }
            .note-card {
                height: 100%;
                
                border-radius: 15px;
                box-shadow: 1px 3px 3px 1px #ffccd5;
                overflow: hidden;
            }
            h3 {
                margin: 0;
                font-weight: 900;
                padding: 20px;
                color: #590d22;
                background-color: #ffccd5;
            }
            p {
                padding-inline: 20px;
            }
            @media screen and (max-width: 1000px) {
                h3 {
                    font-size: 15px;
                    padding: 15px;
                }
                p {
                    font-size: 12px;
                }
            }
        `;
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <div class="note-card">
                <h3>${this._note.title}</h3>
                <p>${this._note.body}</p>
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);