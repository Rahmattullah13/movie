class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
          <div class="container">
            <a class="navbar-brand" href="#">Movievaganza</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Search Movie</a>
              </div>
            </div>
          </div>
        </nav>
        `;
    }
  }
  
  customElements.define("app-bar", AppBar);