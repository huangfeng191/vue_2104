
const axios = require('axios').default;
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8099/',
  timeout: 1000,
  headers: {'Access-Control-Allow-Origin': "*"}
});


export default instance;