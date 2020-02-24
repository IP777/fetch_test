const myHttpRequest = {
  baseUrl: 'https://pixabay.com/',
  API_KEY: '15197033-6a0a9e6d0bedb15a0a6a5ba9a',
  request: 'flower',
  pagination: 1,

  buildUrl(pageIndex) {
    const URL = `${this.baseUrl}api/?key=${this.API_KEY}&q=${this.request}&image_type=photo&per_page=12&page=${pageIndex}`;
    return URL;
  },
  createMarkup(condition, template, container) {
    this.request = condition;
    fetch(this.buildUrl(this.pagination))
      .then(response => {
        //console.log(response);
        return response.json();
      })
      .then(data => {
        //console.log(template);
        const markup = data.hits.map(img_card => template(img_card)).join('');
        container.innerHTML = markup;
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },
};

export default myHttpRequest;
