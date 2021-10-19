import axioss from "axios";
import { BASE_URL_API } from "./constants";
import {} from "../containers/publicPages/login/redux/actions";

const axios = axioss.create({
  baseURL: BASE_URL_API,

  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

axios.interceptors.response.use(function (response) {
  // Do something with response data

  return response;
}, function (error, response) {
  if(error.response.status === 401 && window.location.pathname !== "/login"){
    localStorage.removeItem('token');
    window.location = '/login'
    }else{
      return Promise.reject(error)
    }
});

export default axios;