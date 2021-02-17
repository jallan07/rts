import axios from 'axios';

// eslint-disable-next-line
export default {
  getSearchResults: function (search) {
    return axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`);
  }
};
