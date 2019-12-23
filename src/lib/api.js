import {
  importStorage
} from './firebase';

class API {
  constructor(storage) {
    this.storage = storage;
    this.proxy = 'https://cors-anywhere.herokuapp.com/';
  }

  get_bookmakers() {
    const targetUrl = 'https://firebasestorage.googleapis.com/v0/b/vue-test-8c696.appspot.com/o/bookies.json?alt=media&token=179b6545-6044-4089-8538-14ebe93ef06d';

    return fetch(this.proxy + targetUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);

        // Fallback for demonstration if proxy fails
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
      })
  }

  get_countries() {
    const targetUrl = 'https://firebasestorage.googleapis.com/v0/b/vue-test-8c696.appspot.com/o/countries.json?alt=media&token=b745d3c6-b718-4f5f-952f-b8b850f2ccd3';

    return fetch(this.proxy + targetUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);

        // Fallback for demonstration if proxy fails
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
      })
  }

  save_bookmakers(path, bookmakers) {
    return this.storage().then(storage => {
      const jsonFile = new Blob([JSON.stringify(bookmakers)], { type: 'application/json' });
      const storageRef = storage().ref(path);

      return storageRef.put(jsonFile).then( () => {
          console.log('successfull save');
        })
        .catch(error => {
          console.log(error);
        });
      });
  }
}

export default new API(
  importStorage,
  importFunctions
);
