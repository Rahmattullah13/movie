import './movie-item';

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="${this.data.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">
                    ${this.data.Title}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                    ${this.data.Year}</h6>
                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="
                    ${this.data.imdbID}">See Detail</a>
                </div>
            </div>
        </div>
        `;
    this.shadowDOM.innerHTML += `
        <div class="col">
            <h1 class="text-center">${message}</h1>    
        </div>
            `;
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }
}

customElements.define('movie-list', MovieList);