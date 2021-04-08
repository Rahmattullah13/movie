import "../component/movie-list";
import "../component/search-bar";
import DataSource from "../data/data-source";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector
    ("movie-list");


    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = function(results) {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;