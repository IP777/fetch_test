//https://api.themoviedb.org/3/search/movie?api_key=8b49236e6b82eb62c6f5cab7126e8684&page=1&query=batman&include_adult=false&language=en-US
//https://api.themoviedb.org/3/movie/11415/similar?api_key=8b49236e6b82eb62c6f5cab7126e8684
//https://api.themoviedb.org/3/movie/76341?api_key=8b49236e6b82eb62c6f5cab7126e8684&language=en-US
const myHttpRequest = {
  baseUrl: 'https://api.themoviedb.org/3/',
  API_KEY: '8b49236e6b82eb62c6f5cab7126e8684',
  request: 'flower',
  pagination: 1,

  createMarkup(condition, template, container) {
    this.request = condition;
    fetch(
      `${this.baseUrl}search/movie?api_key=${this.API_KEY}&page=${this.pagination}&query=${this.request}&include_adult=false&language=en-US`,
    )
      .then(response => {
        //console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data.results);
        const markup = data.results
          .map(img_card => template(img_card))
          .join('');
        container.innerHTML = markup;
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },

  createMarkupId(id, template, container) {
    fetch(`${this.baseUrl}movie/${id}?api_key=${this.API_KEY}&language=en-US`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        container.innerHTML = template(data);
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },
};

export default myHttpRequest;
