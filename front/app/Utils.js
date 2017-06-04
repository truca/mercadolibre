import axios from "axios";

const restCall = (method, name, path, requestCallback, successCallback, errorCallback, data = {}) => {
  console.log(`${name} request in ${path}`);
  requestCallback();
  method(path, data).then(results => {
    console.log(`${name} success in ${path}: `, results.data);
    successCallback(results.data)
  }).catch(error => {
    console.log(`${name} error in ${path}: `, error);
    errorCallback(error);
  });
}

//  fetching methods Utilities for redux
const U = {
  get: (path, requestCallback, successCallback, errorCallback) => {
    restCall(axios.get, "GET", path, requestCallback, successCallback, errorCallback);
  },
  post: (path, requestCallback, successCallback, errorCallback, data) => {
    restCall(axios.post, "POST", path, requestCallback, successCallback, errorCallback, data);
  },
  update: (path, requestCallback, successCallback, errorCallback, data) => {
    restCall(axios.update, "UPDATE", path, requestCallback, successCallback, errorCallback, data);
  },
  delete: (path, requestCallback, successCallback, errorCallback) => {
    restCall(axios.delete, "DELETE", path, requestCallback, successCallback, errorCallback);
  }
}

export default U;
