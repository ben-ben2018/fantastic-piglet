import axios from "axios";
const baseUrl = "http://127.0.0.1:1337/api/";
axios.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error: Object) {
    return Promise.resolve(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: Object) {
    return Promise.resolve(error);
  }
);
// let token = "e1d0ddc6421faa0f90698537099717a9e610dc9703d30f416587252354dd73847b01c41644ff1f392d5e9ca8f4d9e8378facddd1c3d65d74592818b8bc197dc2c97aceb8589ebcfac07cc73032b43aca5ad0117d38117e8ff3e8b5ddf4e1f8886cdce341dac34e17c27a741267c56b560e4f3fe554264542629739ef89f6c014"
function find(api: Object, other: String) {
  return axios.get(baseUrl + api + "?populate=*" + other);
}
function add(api: Object, data: Object) {
  return axios.post(baseUrl + api + "?populate=*", data);
}
function updata(api: Object, data: Object) {
  return axios.put(baseUrl + api + "?populate=*", data);
}
function del(api: Object) {
  return axios.delete(baseUrl + api + "?populate=*");
}
export const axios2 = {
  find,
  add,
  updata,
  del,
};
