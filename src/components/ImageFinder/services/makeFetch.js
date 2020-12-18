const makeFetch = {
  key: '18291614-3687f9869972091b65dd4882c',

  perPage: 12,

  crateFetchFind(targetSearch, page) {
    console.log(page);

    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=
        ${targetSearch}&page=${page}&per_page=${this.perPage}&key=${this.key}`)
      .then((res) => res.json())
      .then(({ hits, totalHits }) => ({ hits, totalHits }));
  },
};

export default makeFetch;
