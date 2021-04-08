class DataSource {
  static searchMovie(keyword) {
    return fetch('http://omdbapi.com', {
      method: 'get',
      dataType: 'json',
      data: {
        apikey: 'afbd2529',
        i: $('#search-input').val(),
      }.then((Response) => {
        return Response.json();
      }),
    }).then((responseJson) => {
      if (responseJson.movies) {
        return Promise.resolve(responseJson.movies);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
