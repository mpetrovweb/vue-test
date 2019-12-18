class API {
  constructor() {

  }

  get_bookmakers() {
    return fetch('./data/bookies.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      })
  }

  get_countries() {
    return fetch('./data/countries.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default new API();
