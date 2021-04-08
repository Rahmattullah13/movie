class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#search-input').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <div class="container">
            <div class="row mt-3 justify-content-center">
                <div class="col-md-8">
                <h1 class="text-center text-danger">Search Movie</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Movie title..." id="search-input" />
                    <button class="btn btn-danger" id="search-button">Search</button>
                </div>
            </div>
      </div>
        `;

    this.shadowDOM.querySelector('#search-button').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
