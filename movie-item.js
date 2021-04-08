class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <img src="${this.data.Poster}" class="img-fluid">
      </div>

      <div class="col-md-8">
        <ul class="list-group">
            <li class="list-group-item">
            <h3>${this.movie.Title}</h3>
            </li>
            <li class="list-group-item">Released : 
            ${this.movie.Released}</li>
            <li class="list-group-item">Genre : 
            ${this.movie.Genre}
            </li>                 
            <li class="list-group-item">Director : 
            ${this.movie.Director}
            </li>                 
            <li class="list-group-item">Actors : 
            ${this.movie.Actors}
            </li>                 
            <li class="list-group-item">Runtime : 
            ${this.movie.Runtime}
            </li>                 
            </ul>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define('movie-item', MovieItem);
